import { IButton } from './interfaces';
import { StyledButton } from './styled';

// initiate Button as complex component rather than directly styled for scalability
// might be needed for specific functionalities tied to analytics or url manipulation
const Button = ({ label, onClick, link, disabled, small }: IButton) => {
    const modifiers = { disabled, small };

    return (
        <StyledButton
            as={!!link?.url ? 'a' : 'button'}
            href={!!link?.url ? link?.url : ''}
            title={!!link?.title ? link?.title : ''}
            target={!!link?.target ? link?.target : ''}
            onClick={onClick}
            {...modifiers}
        >
            {label}
        </StyledButton>
    );
};

export default Button;
