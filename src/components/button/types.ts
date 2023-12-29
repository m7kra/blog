import { ReactNode } from 'react';

type Colors =
    | 'primary'
    | 'primary-container'
    | 'secondary'
    | 'secondary-container'
    | 'terciary'
    | 'terciary-container'
    | 'surface'
    | 'surface-variant'
    | 'inherit'
    | 'darken'
    | 'error'
    | 'error-container';

export type ButtonProps = {
    onClick: () => void;
    shape: 'box' | 'text' | 'outline';
    size?: number | null;
    children?: ReactNode;
    initialColor: Colors;
    hoverColor: Colors;
    transparent?: boolean;
    keybindings?: string[] | null;
};
