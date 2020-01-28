import { COUNT_ACTIONS } from '../actions/actions';

const initialState = {
  count: 1,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case COUNT_ACTIONS.COUNT_UP:
      return { ...state, count: state.count + 1 };
    case COUNT_ACTIONS.COUNT_DOWN:
      return { ...state, count: state.count - 1 };
    case COUNT_ACTIONS.COUNT_RESET:
      return { ...state, count: 1 };
    case COUNT_ACTIONS.COUNT_SUBMIT:
      return { ...state, count: action.payload };
    default:
      return state;
  }
}
