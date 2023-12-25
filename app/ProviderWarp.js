"use client";
import { SessionProvider } from "next-auth/react";

export default function ProviderWarp({ children }) {
    return(
        <SessionProvider>
            {children}
        </SessionProvider>
    )
}