// @flow
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Thanks from "../components/Thanks";

export default connect(
  (state) => ({
    user: state.auth.user,
  }),
  (dispatch) => bindActionCreators({}, dispatch)
)(Thanks);
