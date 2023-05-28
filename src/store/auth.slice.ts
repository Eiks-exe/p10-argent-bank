interface IReducerAction {
    type: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    payload?: Record<string, any>;
}

interface IAuth {
    token: string
}

const authReducer = (state: IAuth, action: IReducerAction) => {
  switch (action.type) {
    case 'getAuth':
        
        break;
    
    default:
        return state
  }
} 


export {}