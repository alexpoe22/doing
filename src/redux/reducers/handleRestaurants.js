export default (state = [], action) => {
  switch (action.type) {
    case 'SET_RESTAURANTS':
      return action.restaurants;
    default:
      return state;
  }
};
