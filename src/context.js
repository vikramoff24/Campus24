import React, {useContext, useReducer} from 'react'
import reducer from './reducer';
const initialState = {
  chat_user: null
}
const AppContext = React.createContext();

export const AppProvider = ({children}) => {

  const [state, dispatch] = useReducer(reducer, initialState);

  const setChatUser = (user) => {
    dispatch({
      type: 'SET_CHAT_USER',
      chat_user: user
    })
  }

  return <AppContext.Provider
    value = 
    {{...state,
      setChatUser
    }}
  >
    {children}
  </AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext);
} 