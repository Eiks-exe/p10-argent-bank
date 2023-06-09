import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import DashboardTransaction from './pages/TransactionsDashboard/TransactionsDashboard';
import PrivateRoute from './components/PrivateRoute';

const App = (): JSX.Element => {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={
                <PrivateRoute reverse>
                    <Login/>
                </PrivateRoute>} />
                <Route path="/profile" element={<Dashboard />} />
                <Route
                    path="/profile/accounts/:id"
                    element={
                        <DashboardTransaction />
                    }
                />
            </Routes>
        </div>
    );
};

export default App;
