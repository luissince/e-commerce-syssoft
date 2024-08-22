'use client'

import { ThemeProvider } from 'next-themes'
import { Fragment, ReactNode, useEffect, useRef } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Provider } from 'react-redux';
import { AppStore, makeStore } from './lib/store';

export function ThemesProviders({ children }: { children: ReactNode }) {
    return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
        </ThemeProvider>
    )
}

export const AOSProviders = ({ children }: { children: ReactNode }) => {
    useEffect(() => {
        AOS.init();
    }, []);

    return <Fragment>{children}</Fragment>;
};


export const ReduxProviders = ({ children }: { children: ReactNode }) => {
    const storeRef = useRef<AppStore>()
    if (!storeRef.current) {
        storeRef.current = makeStore()
    }

    return <Provider store={storeRef.current}>{children}</Provider>
};
