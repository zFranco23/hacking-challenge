// @flow
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actions as AuthActions } from "../../auth/duck";
import MakeYourPlan from "../components/MakeYourPlan";

export default connect(
  (state) => ({
    isFetchingCar: state.auth.isFetchingCar,
    car: state.auth.car,
    user: state.auth.user,
  }),
  (dispatch) =>
    bindActionCreators(
      {
        ...AuthActions,
      },
      dispatch
    )
)(MakeYourPlan);
