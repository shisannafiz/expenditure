export default (state, action) => {
  switch (action.type) {
    case 'GET_EXPENSES':
      return {
        ...state,
        expenses: action.payload,
      };
    case 'DELETE_EXPENSE':
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    case 'ADD_EXPENSE':
      return {
        ...state,
        recent: [action.payload, ...state.recent],
      };
    case 'EDIT_EXPENSE':
      return {
        ...state,
        items: [
          action.payload,
          ...state.items.filter((item) => item.id !== action.payload),
        ],
      };
    case 'SORT_EXPENSES':
      return {
        ...state,
        expenses: action.payload,
      };
    default:
      return state;
  }
};
