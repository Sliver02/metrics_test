export interface IButtonModifiers {
    disabled?: boolean;
    small?: boolean;
}

export interface IButton extends IButtonModifiers {
    label: string;
    onClick?: () => void;
    link?: {
        url: string;
        title?: string;
        target?: 'self' | 'blank';
    };
}
