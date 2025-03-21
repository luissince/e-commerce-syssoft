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
    // Usa useRef para asegurar que la store persista entre re-renders
    // pero es única para cada solicitud/sesión
    const storeRef = useRef<AppStore>()
    if (!storeRef.current) {
        // Inicializa la store en el primer render
        storeRef.current = makeStore()
    }

    return <Provider store={storeRef.current}>{children}</Provider>
};
