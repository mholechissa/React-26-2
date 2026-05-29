export const TODO_ACTIONS = {
  FETCH_START: 'FETCH_START',
  FETCH_SUCCESS: 'FETCH_SUCCESS',
  FETCH_ERROR: 'FETCH_ERROR',

  ADD_TODO_START: 'ADD_TODO_START',
  ADD_TODO_SUCCESS: 'ADD_TODO_SUCCESS',
  ADD_TODO_ERROR: 'ADD_TODO_ERROR',

  COMPLETE_TODO_START: 'COMPLETE_TODO_START',
  COMPLETE_TODO_SUCCESS: 'COMPLETE_TODO_SUCCESS',
  COMPLETE_TODO_ERROR: 'COMPLETE_TODO_ERROR',

  UPDATE_TODO_START: 'UPDATE_TODO_START',
  UPDATE_TODO_SUCCESS: 'UPDATE_TODO_SUCCESS',
  UPDATE_TODO_ERROR: 'UPDATE_TODO_ERROR',

  SET_SORT: 'SET_SORT',
  SET_FILTER: 'SET_FILTER',

  CLEAR_ERROR: 'CLEAR_ERROR',
  RESET_FILTERS: 'RESET_FILTER_ERROR',
  RESET_FILTERS: 'RESET_FILTERS',
};

export const initialTodoState = {
  todoList: [],
  error: "",
  filterError: "",
  isTodoListLoading: false,
  sortBy: "createdDate",
  sortDirection: "asc",
  filterTerm: "",
  dataVersion: 0,
};

export function todoReducer(state, action) {
  switch (action.type) {
 case TODO_ACTIONS.ADD_TODO_START:
  return {
    ...state,
    error: "",
  };

case TODO_ACTIONS.ADD_TODO_SUCCESS:
  return {
    ...state,
    dataVersion: state.dataVersion + 1,
  };

case TODO_ACTIONS.ADD_TODO_ERROR:
  return {
    ...state,
    error: action.payload.message,
  };

case TODO_ACTIONS.COMPLETE_TODO_START:
  return state;

case TODO_ACTIONS.COMPLETE_TODO_SUCCESS:
  return {
    ...state,
    dataVersion: state.dataVersion + 1,
  };

case TODO_ACTIONS.COMPLETE_TODO_ERROR:
  return {
    ...state,
    error: action.payload.message,
  };

case TODO_ACTIONS.UPDATE_TODO_START:
  return state;

case TODO_ACTIONS.UPDATE_TODO_SUCCESS:
  return {
    ...state,
    dataVersion: state.dataVersion + 1,
  };

case TODO_ACTIONS.UPDATE_TODO_ERROR:
  return {
    ...state,
    error: action.payload.message,
  };
case TODO_ACTIONS.CLEAR_ERROR_FILTER_ERROR:
  return {
    ...state,
    filterError: "",
  }
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
}