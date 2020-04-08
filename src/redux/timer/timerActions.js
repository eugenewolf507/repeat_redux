export const Type = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
  CHANGE_STEP: "CHANGE_STEP",
};

export const increment = (timerValue) => ({
  type: Type.INCREMENT,
  payload: timerValue,
  meta: {
    throttle: 2000,
  },
});

export const decrement = (timerValue) => ({
  type: Type.DECREMENT,
  payload: timerValue,
  meta: {
    throttle: 1000,
  },
});

export const changeStep = (step) => ({
  type: Type.CHANGE_STEP,
  payload: step,
});
