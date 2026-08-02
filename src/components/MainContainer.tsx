import React from "react";

interface MainContainerProps {
    children: React.ReactNode;
}

export function Main({ children }: MainContainerProps) {
    return (
        <div className="container mx-auto px-4 max-w-7xl w-full mt-8">
            {children}
        </div>
    );
}