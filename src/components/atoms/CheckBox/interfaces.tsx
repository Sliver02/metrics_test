export interface ICheckboxModifiers {
    checked?: boolean;
    disabled?: boolean;
}

export interface ICheckbox extends ICheckboxModifiers {
    label?: string;
    value?: string | number | readonly string[] | undefined;
    name?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
