import { mdiCheck } from '@mdi/js';
import { StyledIcon } from 'assets/globalStyles';
import { IInput } from './interfaces';
import { Descrtiption, InputContainer, StyledInput } from './styled';
import { useRef, useEffect, useState } from 'react';

const Input = ({
    label,
    description,
    disabled,
    type,
    startValue,
    name,
    onClick,
    onChange,
}: IInput) => {
    const [value, setValue] = useState(startValue);

    const modifiers = { disabled };

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let current = e.target.value ? e.target.value : '';
        setValue(current);

        !!onChange && onChange(e);
    };

    return (
        <StyledInput hasValue={!!value} {...modifiers}>
            <InputContainer>
                <input
                    id={name}
                    type={type}
                    value={value}
                    name={name}
                    onClick={onClick}
                    onChange={(e) => onInputChange(e)}
                    {...modifiers}
                />
                <label htmlFor={name}>{label}</label>
            </InputContainer>
            {!!description && <Descrtiption>{description}</Descrtiption>}
        </StyledInput>
    );
};

Input.defaultProps = {
    label: 'Input label',
    type: 'text',
};

export default Input;
