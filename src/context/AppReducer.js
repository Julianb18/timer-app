function nextId(timerNames) {
  const maxId = timerNames.reduce(
    (maxId, timerName) => Math.max(timerName.id, maxId),
    -1
  );
  return maxId + 1;
}

export const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TIMER_NAME":
      return {
        ...state,
        timerNames: [
          ...state.timerNames,
          {
            tName: action.payload,
            id: nextId(state.timerNames),
          },
        ],
      };

    case "REMOVE_TIMER_NAME":
      return {
        ...state,
        timerNames: state.timerNames.filter(
          (name) => name.id !== action.payload
        ),
      };

    default:
      return state;
  }
};
