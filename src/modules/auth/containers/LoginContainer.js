// @flow
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Login from "../components/Login";

export default connect(
  (state) => ({}),
  (dispatch) => bindActionCreators({}, dispatch)
)(Login);
