const initState = {
  idUser: 10,
  emailUser: 'devwcs@gmail.com',
  activeProfile: '/api/profiles/7',
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return {
        idUser: action.idUser,
        emailUser: action.emailUser,
        activeProfile: action.activeProfile,
      };
    default:
      return state;
  }
};

export default userReducer;
