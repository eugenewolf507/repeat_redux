import tv4 from "tv4";
import stateSchema from "../../schemas/state-validation.json";

const stateValidator = (store) => (next) => (action) => {
  next(action);
  const isValid = tv4.validate(store.getState(), stateSchema);

  if (!isValid) {
    console.warning("Invalid state schema detected");
  }
};

export default stateValidator;
