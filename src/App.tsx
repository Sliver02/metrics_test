import { Box, Header } from 'assets/globalStyles';
import Button from './components/atoms/Button';
import { MetricsProvider } from './contexts/metricsContext';

const App = () => {
    return (
        <MetricsProvider key="challengeApiKey">
            <div className="App">
                <header className="App-header"></header>
                <body>
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
                        <Button />
                        <Button disabled />
                        <Button small />
                        <Button small disabled />
                    </Box>
                </body>
            </div>
        </MetricsProvider>
    );
};

export default App;
