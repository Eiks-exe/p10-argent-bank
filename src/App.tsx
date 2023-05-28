import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import DashboardTransaction from './pages/TransactionsDashboard/TransactionsDashboard';

const App = (): JSX.Element => {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route
                    path="/profile/accounts/"
                    element={
                        <DashboardTransaction />
                    }
                />
            </Routes>
        </div>
    );
};

export default App;
