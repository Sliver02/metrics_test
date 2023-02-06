import { mdiHelpCircle } from '@mdi/js';
import { StyledIcon } from 'assets/globalStyles';
import { ITooltip } from './interfaces';
import { Dialog, IconContainer, StyledTooltip } from './styled';

const Tooltip = ({ label, description, disabled, small }: ITooltip) => {
    const modifiers = { disabled, small };

    return (
        <StyledTooltip {...modifiers}>
            <IconContainer>
                <StyledIcon path={mdiHelpCircle} />
                <Dialog>{description}</Dialog>
            </IconContainer>
            {label}
        </StyledTooltip>
    );
};

Tooltip.defaultProps = {
    label: 'Tooltip label',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, obcaecati?',
};

export default Tooltip;
