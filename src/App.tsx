import { Box, Header } from 'assets/globalStyles';
import Checkbox from 'components/atoms/CheckBox';
import Input from 'components/atoms/Input';
import Button from './components/atoms/Button';
import { MetricsProvider } from './contexts/metricsContext';

const App = () => {
    return (
        <MetricsProvider api="challengeApiKey">
            <div className="App">
                <header className="App-header"></header>
                <Header as="h1" type="large">
                    Component library
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
            </div>
        </MetricsProvider>
    );
};

export default App;
