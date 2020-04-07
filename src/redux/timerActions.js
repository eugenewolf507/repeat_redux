export const Type = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
  CHANGE_STEP: "CHANGE_STEP",
};

export const increment = (timerValue) => ({
  type: Type.INCREMENT,
  payload: timerValue,
});

export const decrement = (timerValue) => ({
  type: Type.DECREMENT,
  payload: timerValue,
});

export const changeStep = (step) => ({
  type: Type.CHANGE_STEP,
  payload: step,
});
