import Modal from 'react-modal';
import './container.css'
import React, { forwardRef, useCallback, useImperativeHandle, useRef } from 'react';

const customStyles = {
    overlay: {
        position: 'fixed' as 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
};

Modal.setAppElement('#root');


interface CustomModalProps {
    isOpen: boolean;
    onOpen?: () => void;
    onHidden?: () => void;
    onClose: () => void;
    contentLabel: string;
    children: React.ReactNode;
    ref: any,
    className?: string,
}

export type CustomModalType = {
    handleOnClose: () => Promise<void>;
    handleMouseDown: (event: React.MouseEvent<HTMLDivElement>) => void
}

const CustomModal: React.ForwardRefRenderFunction<CustomModalType, CustomModalProps> = ({ isOpen, onOpen, onHidden, contentLabel, children, onClose, className }, ref) => {
    const draggingRef = useRef(false);
    const offsetXRef = useRef(0);
    const offsetYRef = useRef(0);
    const modalRef = useRef<HTMLDivElement>();

    const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
        if (modalRef.current) {
            draggingRef.current = true;
            offsetXRef.current = event.clientX - modalRef.current.offsetLeft;
            offsetYRef.current = event.clientY - modalRef.current.offsetTop;
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
        }
    };

    const handleMouseMove = useCallback((event: MouseEvent) => {
        if (draggingRef.current && modalRef.current) {
            const left = event.clientX - offsetXRef.current;
            const top = event.clientY - offsetYRef.current;
            modalRef.current.style.left = `${left}px`;
            modalRef.current.style.top = `${top}px`;
        }
    }, []);

    const handleMouseUp = useCallback(() => {
        draggingRef.current = false;
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
    }, [handleMouseMove]);

    const handleOnClose = async () => {
        await new Promise<void>((resolve) => {
            const data = modalRef.current;
            if (data) {
                data.classList.add("close-cm");
                data.addEventListener('animationend', () => {
                    resolve();
                });
            }
        });
        onClose();
    };

    useImperativeHandle(ref, () => ({
        handleOnClose: async () => await handleOnClose(),
        handleMouseDown: (event: React.MouseEvent<HTMLDivElement>) => handleMouseDown(event),
    }));

    return (
        <Modal
            contentRef={(ref) => { modalRef.current = ref; }}
            isOpen={isOpen}
            onAfterOpen={() => {
                const bodyRef = document.body as HTMLBodyElement;
                bodyRef.style.overflow = "hidden"
                if (onOpen !== undefined) onOpen();
            }}
            onRequestClose={async () => await handleOnClose()}
            onAfterClose={() => {
                const bodyRef = document.body as HTMLBodyElement;
                bodyRef.style.overflow = "initial"
                if (onHidden !== undefined) onHidden()
            }}
            style={customStyles}
            className={`modal-custom ${className}`}
            shouldCloseOnOverlayClick={false}
            shouldReturnFocusAfterClose={true}
            shouldCloseOnEsc={true}
            contentLabel={contentLabel}
        >
            {children}
        </Modal>
    );
};

export default forwardRef(CustomModal);