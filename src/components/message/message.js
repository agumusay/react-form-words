import React from "react";

class Message extends React.Component {
  state = {
    index: 0,
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        index: this.state.index === this.props.wordsArray.length - 1 ? 0 : this.state.index + 1,
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return (
      <div>
        I am a <span>{this.props.wordsArray[this.state.index]}</span>
      </div>
    );
  }
}

export default Message;
