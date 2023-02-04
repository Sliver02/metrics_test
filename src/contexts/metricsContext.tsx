import { createContext, ReactNode, useState } from 'react';

// single metric interface
interface IMetric {
    id: string;
    code: string;
    amounts: number[] | null;
    date: Date;
}

// context interface
interface IMetricsContext {
    metrics: IMetric[];
    getMetrics: () => Promise<IMetric[]>;
    getMetric: (id: string) => Promise<IMetric | undefined>;
    addMetric: (newMetric: IMetric) => Promise<boolean>;
    updateMetric: (newMetric: IMetric) => Promise<boolean>;
    deleteMetric: (id: string) => Promise<boolean>;
    delay: (time: number) => void;
}

// create context with default values
const MetricsContext = createContext<IMetricsContext>({
    metrics: [],
    getMetrics: async () => Promise.resolve([]),
    getMetric: async () => Promise.resolve(undefined),
    addMetric: async () => Promise.resolve(false),
    updateMetric: async () => Promise.resolve(false),
    deleteMetric: async () => Promise.resolve(false),
    delay: async () => null,
});

const CHALLENGE_API_KEY = 'challengeApiKey';

// defaults metrics
const startMetrics = [
    { id: '4bd', code: 'Alpha', amounts: [123, 23], date: new Date(2011, 10, 30) },
    { id: 'bez', code: 'Beta', amounts: null, date: new Date(2022, 2, 28) },
    { id: 's31', code: 'Gamma', amounts: [0, 1, 2, 3], date: new Date(2023, 1, 3) },
    { id: 'fg4', code: 'Delta', amounts: [23, 0, 100], date: new Date(2013, 5, 4) },
    { id: 'hj6', code: 'Epsilon', amounts: [0], date: new Date(2020, 2, 8) },
    { id: 'j66', code: 'Zeta', amounts: [15, 2, 54, 3, 1, 3, 6, 32], date: new Date(2021, 2, 3) },
];

// global metrics provider
export const MetricsProvider = ({
    key,
    children,
}: {
    key: string;
    children: ReactNode | ReactNode[];
}) => {
    const [apiKey] = useState<string>(key);
    const [metrics, setMetrics] = useState<IMetric[]>(startMetrics);

    const getMetrics = async () => {
        await delay(1000);
        if (apiKey !== CHALLENGE_API_KEY) {
            return Promise.reject('API Key is not valid!');
        }
        return Promise.resolve(metrics);
    };

    const getMetric = async (id: string) => {
        await delay(1000);
        if (apiKey !== CHALLENGE_API_KEY) {
            return Promise.reject('API Key is not valid!');
        }

        const metric = metrics.find((metric) => metric.id === id);

        return Promise.resolve(metric);
    };

    const addMetric = async (newMetric: IMetric) => {
        await delay(1000);
        if (apiKey !== CHALLENGE_API_KEY) {
            return Promise.reject('API Key is not valid!');
        }

        setMetrics([...metrics, newMetric]);

        return Promise.resolve(true);
    };

    const updateMetric = async (newMetric: IMetric) => {
        await delay(1000);
        if (apiKey !== CHALLENGE_API_KEY) {
            return Promise.reject('API Key is not valid!');
        }

        setMetrics(
            metrics.map((metric) => {
                if (newMetric.id === metric.id) {
                    return newMetric;
                } else {
                    return metric;
                }
            })
        );

        return Promise.resolve(true);
    };

    const deleteMetric = async (id: string) => {
        await delay(1000);
        if (apiKey !== CHALLENGE_API_KEY) {
            return Promise.reject('API Key is not valid!');
        }

        setMetrics(metrics.filter((metric) => metric.id !== id));

        return Promise.resolve(true);
    };

    const delay = async (time: number) => {
        return new Promise((resolve) => setTimeout(resolve, time));
    };

    return (
        <MetricsContext.Provider
            value={{
                metrics,
                getMetrics,
                getMetric,
                addMetric,
                updateMetric,
                deleteMetric,
                delay,
            }}
        >
            {children}
        </MetricsContext.Provider>
    );
};
