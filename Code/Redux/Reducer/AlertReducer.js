function alertReducer(state = 0, action) {
  switch (action.type) {
    case 'SHOW_ALERT':
      return true;
    case 'HIDE_ALERT':
      return false;
    default:
      return state;
  }
}
export default alertReducer;
