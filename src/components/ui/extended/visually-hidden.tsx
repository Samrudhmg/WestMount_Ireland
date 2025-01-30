import React from 'react';

interface VisuallyHiddenProps {
    children: React.ReactNode;
}

export function VisuallyHidden({ children }: Readonly<VisuallyHiddenProps>) {
    return (
        <span
            className="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0"
            style={{ clip: 'rect(0, 0, 0, 0)' }}
        >
            {children}
        </span>
    );
}
