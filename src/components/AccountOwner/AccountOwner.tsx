import React, { useEffect } from 'react';
import AppForm from '../AppForm/AppForm';
import './AccountOwner.css';

interface PropsItem {
    firstName?: string;
    lastName?: string;

    onModeChange?: (mode: 'edit' | 'view') => void;
    onEdit?: (firstName: string, lastName: string) => void;
}

const AppAccountOwner: React.FC<PropsItem> = ({ firstName, lastName, onModeChange, onEdit }) => {
    const [firstNameValue, setFirstNameValue] = React.useState(firstName || '');
    const [lastNameValue, setLastNameValue] = React.useState(lastName || '');

    useEffect(() => {
        if (firstName && lastName) {
            setFirstNameValue(firstName);
            setLastNameValue(lastName);
        }

        const init = () => {
            setFirstNameValue('');
            setLastNameValue('');
        };
        
    }, [firstName, lastName]);


    return (
        <div className="header">
            <h1>
                Welcome back
                <br />
                {firstNameValue} {lastNameValue}!
            </h1>
            <button className="edit-button" onClick={() => {}}>
                Edit Name
            </button>
        </div>
    );

};

export default AppAccountOwner;
