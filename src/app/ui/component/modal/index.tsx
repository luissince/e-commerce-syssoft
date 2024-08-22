
import { keyNumberFloat, keyNumberInteger, keyNumberPhone } from '@/helper/util';
import CustomModal, { CustomModalType } from './container';
import React, { RefObject } from 'react';
import { IoMdCloseCircle } from 'react-icons/io';

interface CustomModalForm {
    contentRef: RefObject<CustomModalType>;
    isOpen: boolean;
    onOpen?: () => void;
    onHidden?: () => void;
    onClose: () => void;
    contentLabel: string;
    titleHeader: string;
    className?: string;
    body: React.ReactNode;
    footer: React.ReactNode;
    classNameFooter?: string;
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export const CustomModalForm: React.FC<CustomModalForm> = ({
    contentRef,
    isOpen,
    onOpen,
    onHidden,
    onClose,
    contentLabel,
    titleHeader,
    className,
    body,
    footer,
    classNameFooter,
    onSubmit,
}) => {
    return (
        <CustomModal
            ref={contentRef}
            isOpen={isOpen}
            onOpen={onOpen}
            onHidden={onHidden}
            onClose={onClose}
            contentLabel={contentLabel}
            className={className}
        >
            <form
                className='flex flex-col h-full'
                onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
                    event.preventDefault();
                    onSubmit(event);
                }}
                onKeyDown={(event: React.KeyboardEvent<HTMLFormElement>) => {
                    const target = event.target as HTMLElement;
                    console.log(target)
                    // const inputEvent = event as unknown as React.KeyboardEvent<HTMLInputElement>;
                    // if (target.role === 'float') {
                    //   keyNumberFloat(event, () => {
                    //     onSubmit();
                    //   });
                    // }

                    // if (target.role === 'integer') {
                    //   keyNumberInteger(event, () => {
                    //     onSubmit();
                    //   });
                    // }

                    // if (target.role === 'phone') {
                    //   keyNumberPhone(event, () => {
                    //     onSubmit();
                    //   });
                    // }
                }}
            >
                <div className="header-cm" onMouseDown={(event) => contentRef!.current!.handleMouseDown(event)}>
                    <p className='m-0 h6'>{titleHeader}</p>
                    <button
                        type="button"
                        className='p-2 font-semibold bg-black text-white text-3xl'
                        onClick={async () => await contentRef.current?.handleOnClose()}>
                        <IoMdCloseCircle />
                    </button>
                </div>
                <div className="body-cm relative">
                    {body}
                </div>
                {
                    footer && (
                        <div className={`${classNameFooter ? classNameFooter : "footer-cm"}`}>
                            {footer}
                        </div>
                    )
                }
            </form>
        </CustomModal>
    );
}
