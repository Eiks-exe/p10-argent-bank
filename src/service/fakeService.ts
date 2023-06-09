import { IUser } from "../interfaces";

export const getMockUser = (): IUser =>{
    const mockUser: IUser = {
        firstName: "patrick",
        lastName:"bateman",
        email: "pbateman@pierceandpierce.com",
        password: "Dorsia1234"
    }

    return mockUser
}

export const transactionFake = [
    {
        id: 42,
        date: 1650236900000,
        description: 'Pagac-Mayert',
        amount: 3976,
        balance: 175973,
        type: 'Withdrawal',
        category: 'Food',
        notes: null,
    },
    {
        id: 99,
        date: 1643848570000,
        description: 'Leffler-Baumbach',
        amount: 9484,
        balance: 158450,
        type: 'Depot',
        category: 'Entertainment',
        notes: null,
    },
    {
        id: 100,
        date: 1630318098000,
        description: 'Homenick Inc',
        amount: 7299,
        balance: 188753,
        type: 'Depot',
        category: 'Sport',
        notes: null,
    },
    {
        id: 46,
        date: 1634408094000,
        description: 'Cole Inc',
        amount: 2610,
        balance: 199888,
        type: 'Depot',
        category: 'Subscription',
        notes: null,
    },
    {
        id: 52,
        date: 1625844909000,
        description: 'Stroman and Sons',
        amount: 5123,
        balance: 188997,
        type: 'Depot',
        category: 'Sport',
        notes: null,
    },
    {
        id: 68,
        date: 1639262702000,
        description: 'Macejkovic, Gutkowski and Bayer',
        amount: 779,
        balance: 154724,
        type: 'Withdrawal',
        category: 'Food',
        notes: null,
    },
    {
        id: 13,
        date: 1651602768000,
        description: 'Blick-Balistreri',
        amount: 9475,
        balance: 175905,
        type: 'Depot',
        category: 'Sport',
        notes: null,
    },
    {
        id: 61,
        date: 1642237102000,
        description: 'Greenfelder-Jacobs',
        amount: 5365,
        balance: 164494,
        type: 'Electronics',
        category: 'Assurance',
        notes: null,
    },
    {
        id: 64,
        date: 1635052868000,
        description: 'Larkin Group',
        amount: 7202,
        balance: 175897,
        type: 'Withdrawal',
        category: 'Entertainment',
        notes: null,
    },
];
