import { mdiCheck } from '@mdi/js';
import { StyledIcon } from 'assets/globalStyles';
import { ICheckbox } from './interfaces';
import { FakeInput, StyledCheckbox } from './styled';
import { useRef, useState } from 'react';

const Checkbox = ({ label, checked, disabled, value, name, onChange }: ICheckbox) => {
    const [inputChecked, setInputChecked] = useState(checked);

    const modifiers = { disabled };

    const inputRef = useRef<any>(null);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setInputChecked(!inputChecked);
        inputRef?.current?.click();
    };

    return (
        <StyledCheckbox ref={inputRef} checked={inputChecked} onClick={handleClick} {...modifiers}>
            <input value={value} name={name} onChange={onChange} checked={!!inputChecked} />
            <FakeInput>{!!inputChecked && <StyledIcon path={mdiCheck} />}</FakeInput>
            {label}
        </StyledCheckbox>
    );
};

Checkbox.defaultProps = {
    label: 'Checkbox label',
};

export default Checkbox;
