// @flow
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actions as AuthActions } from "../duck";

import Login from "../components/Login";

export default connect(
  (state) => ({
    isFetchingUser: state.auth.isFetchingUser,
  }),
  (dispatch) => bindActionCreators({ ...AuthActions }, dispatch)
)(Login);
