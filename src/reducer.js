const reducer = (state, action) => {
  switch(action.type){
    case 'SET_CHAT_USER':
      return {
        ...state,
        chat_user: action.chat_user
      }
    default:
      return state;
  }
}

export default reducer