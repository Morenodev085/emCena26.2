import React from "react";

interface MainContainerProps {
    children: React.ReactNode;
}

export function Main({ children }: MainContainerProps) {
    return (
        <main className="w-full min-h-screen">
            {children}
        </main>
    );
}