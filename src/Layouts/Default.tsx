import { Outlet, Link } from 'react-router-dom';

const Default = () => {
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center', padding: '2rem' }}>
                <div style={{ maxWidth: '100rem', width: '100%' }}>
                    <header style={{ marginBottom: '2rem' }}>
                        <nav>
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/design-system">Design system</Link>
                                </li>
                            </ul>
                        </nav>
                    </header>
                    <Outlet />
                </div>
            </div>
        </>
    );
};

export default Default;
