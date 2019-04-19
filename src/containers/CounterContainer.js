import React, { Component } from "react";
import { connect } from "react-redux";

import { CounterActions, PostActions } from "../store/actionCreators";

import Counter from "../components/Counter";

class CounterContainer extends Component {
  async componentDidMount() {
    await this.getPost(this.props.number)
  }

  handleIncrement = () => {
    CounterActions.increment();
  };

  handleDecrement = () => {
    CounterActions.decrement();
  };

  handleReset = () => {
    CounterActions.reset();
  };

  async componentDidUpdate(prevProps) {
    if (prevProps.number !== this.props.number) {
      await this.getPost(this.props.number)
    }
  }

  getPost = async postId => {
    await PostActions.getPost(postId)
  }

  render() {
    const { handleIncrement, handleDecrement, handleReset } = this;
    const { number, data } = this.props;

    return (
      <Counter
        number={number}
        data={data}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onReset={handleReset}
      />
    );
  }
}

export default connect(state => ({
  number: state.counter.number,
  data: state.post.data
}))(CounterContainer);
