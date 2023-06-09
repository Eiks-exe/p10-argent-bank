import React from 'react'
import './AccountInfo.css'

interface PropsGrid {
    children?: React.ReactNode;
}

const Grid: React.FC<PropsGrid> = ({ children }) => {
    return (
        <div>
            <h2 className="sr-only" style={{mixBlendMode: "difference"}}>Accounts</h2>
            {children}
        </div>
    )
}

interface PropsItem {
    title: string;
    amount: number;
    fullWidth?: boolean;
    onClick?: () => void;
    textAlign?: 'left' | 'right' | 'center';
}


const Item: React.FC<PropsItem> = ({ title, amount, fullWidth, onClick, textAlign }) => {
    return (
        <section className={'account' + (fullWidth ? ' account-fw' : '')}>
            <div className="account-content-wrapper" style={{ textAlign: textAlign }}>
                <h3 className="account-title">{title}</h3>
                <p className="account-amount">${amount}</p>
                <p className="account-amount-description">Available Balance</p>
            </div>
            {onClick && (
                <div className="account-content-wrapper cta">
                    <button className="transaction-button" onClick={onClick}>
                        View transactions
                    </button>
                </div>
            )}
        </section>
    )
}

const AccountInfo = {
    Grid,
    Item
}

export default AccountInfo