import { Box, Header } from 'assets/globalStyles';
import Button from 'components/atoms/Button';
import Checkbox from 'components/atoms/CheckBox';
import Input from 'components/atoms/Input';
import Tooltip from 'components/atoms/Tooltip';

const DesignSystem = () => {
    return (
        <>
            <Header as="h1" type="large">
                Design system
            </Header>
            <Box>
                <Header as="h2" type="medium">
                    Button component
                </Header>
                <Button />
                <Button disabled />
                <Button small />
                <Button small disabled />
            </Box>

            <Box>
                <Header as="h2" type="medium">
                    Checkbox component
                </Header>
                <Checkbox />
                <Checkbox disabled />
            </Box>

            <Box>
                <Header as="h2" type="medium">
                    Input component
                </Header>
                <Input />
                <Input description="This is the input description" disabled />
            </Box>

            <Box>
                <Header as="h2" type="medium">
                    Tooltip component
                </Header>
                <Tooltip />
                <Tooltip disabled />
                <Tooltip small />
                <Tooltip small disabled />
            </Box>
        </>
    );
};

export default DesignSystem;
