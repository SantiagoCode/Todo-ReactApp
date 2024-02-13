const getDataValidation = (register) => {
  return localStorage.getItem(register) ? JSON.parse(localStorage.getItem(register)) : [];
};

export default getDataValidation;