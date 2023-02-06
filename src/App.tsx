import { MetricsProvider } from './contexts/metricsContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DesignSystem from 'pages/DesignSystem';
import Default from 'Layouts/Default';
import Home from 'pages/Home';

const App = () => {
    return (
        <MetricsProvider api="challengeApiKey">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Default />}>
                        <Route index element={<Home />} />
                        <Route path="design-system" element={<DesignSystem />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </MetricsProvider>
    );
};

export default App;
