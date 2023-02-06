import Table from 'components/molecules/Table';
import MetricsContext, { IMetric } from 'contexts/metricsContext';
import { useContext, useEffect, useState } from 'react';

const Home = () => {
    const { getMetrics } = useContext(MetricsContext);
    const [currentMetrics, setCurrentMetrics] = useState<IMetric[]>([]);

    useEffect(() => {
        getMetrics().then((metrics) => setCurrentMetrics(metrics));
    }, []);

    return (
        <>
            <Table data={currentMetrics} />
        </>
    );
};

export default Home;
