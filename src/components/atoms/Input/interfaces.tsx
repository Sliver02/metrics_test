export interface IInputModifiers {
    disabled?: boolean;
    hasValue?: boolean;
}

export interface IInput extends IInputModifiers {
    type?: 'text' | 'password' | 'number' | 'date';
    name?: string;
    icon?: string;
    label?: string;
    description?: string;
    startValue?: string;
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void | undefined;
}
