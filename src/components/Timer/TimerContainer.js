import { connect } from "react-redux";
import Timer from "./Timer";
import * as timerActions from "../../redux/timer/timerActions";
import * as timerSelectors from "../../redux/timer/timerSelectors";

const mapStateToProps = (state) => ({
  value: timerSelectors.getValue(state),
  step: timerSelectors.getStep(state),
});

const mapDispatchToProps = (dispatch) => ({
  onIncrement: (step) => dispatch(timerActions.increment(step)),
  onDecrement: (step) => dispatch(timerActions.decrement(step)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
