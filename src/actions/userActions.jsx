export const addUserToState = (idUser, emailUser, activeProfile) => {
  return {
    type: 'ADD_USER',
    idUser,
    emailUser,
    activeProfile,
  };
};

export const deleteUserFromState = (idUser) => {
  return {
    type: 'DELETE_USER',
    idUser,
  };
};
