import React, { Component } from "react";
import { connect } from "react-redux";

import AppTemplate from "./AppTemplate";
import CounterContainer from "../containers/CounterContainer";

class App extends Component {
  render() {
    const {
      isLoding,
      isError
    } = this.props
    return (
      <div className="section-app">
        <h1>Redux 공부하기</h1>
        <AppTemplate counter={<CounterContainer />} />
        {isLoding && <h2>로딩중...</h2>}
        {isError && <h1>에러발생!</h1>}
      </div>
    );
  }
}

export default connect(state => ({
  isLoding: state.common.isLoding,
  isError: state.common.isError,
  isSuccess: state.common.isSuccess
}))(App);
