import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthentificate } from '../store/auth.slice';

interface Props {
    children: React.ReactNode;
    reverse?: boolean;
}

const PrivateRoute: React.FC<Props> = ({ children, reverse }) => {
    const { isAuthenticated } = useAuthentificate();
    if (reverse) {
        return isAuthenticated ? <Navigate to="/profile" replace /> : <>{children}</>;
    } else {
        return isAuthenticated ? <>{children}</> : <Navigate to="/login" replace />;
    }
};

export default PrivateRoute;