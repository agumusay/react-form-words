import React from "react";

class Message extends React.Component {
  state = {
    index: 0,
  };

  handleClick = () => {
    
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
      <div className="container">
        <button className="close-button" onClick={this.handleClick}>
          ×
        </button>
        <p className="container-message">
          I am a <span className="container-span">{this.props.wordsArray[this.state.index]}</span>
        </p>
      </div>
    );
  }
}

export default Message;
