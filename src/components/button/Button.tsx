import { ButtonProps } from './types';
import './Button.css';

export default function Button({
    onClick,
    children,
    shape,
    size = null,
    initialColor,
    hoverColor,
    transparent = false,
    keybindings,
}: ButtonProps) {
    // Depending on the type of the button, different classes are added
    const classes = ['button', shape, initialColor, `hover-${hoverColor}`];
    if (transparent) classes.push('transparent');

    return (
        <div
            onClick={(event) => {
                event.stopPropagation();
                onClick();
            }}
            className={classes.join(' ')}
            style={size ? { height: size, width: size } : undefined}
        >
            {children}
        </div>
    );
}
