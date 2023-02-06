import { Box, Title } from 'assets/globalStyles';
import Button from 'components/atoms/Button';
import Checkbox from 'components/atoms/CheckBox';
import Input from 'components/atoms/Input';
import Tooltip from 'components/atoms/Tooltip';

const DesignSystem = () => {
    return (
        <>
            <Title as="h1" type="large">
                Design system
            </Title>
            <Box>
                <Title as="h2" type="medium">
                    Button component
                </Title>
                <Button />
                <Button disabled />
                <Button small />
                <Button small disabled />
            </Box>

            <Box>
                <Title as="h2" type="medium">
                    Checkbox component
                </Title>
                <Checkbox />
                <Checkbox disabled />
            </Box>

            <Box>
                <Title as="h2" type="medium">
                    Input component
                </Title>
                <Input />
                <Input description="This is the input description" disabled />
            </Box>

            <Box>
                <Title as="h2" type="medium">
                    Tooltip component
                </Title>
                <Tooltip />
                <Tooltip disabled />
                <Tooltip small />
                <Tooltip small disabled />
            </Box>
        </>
    );
};

export default DesignSystem;
