export interface ITooltipModifiers {
    disabled?: boolean;
    small?: boolean;
}

export interface ITooltip extends ITooltipModifiers {
    label: string;
    description: string;
}
