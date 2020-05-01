import React from "react";
import WordsInput from "./components/wordsInput/wordsInput";
import Message from "./components/message/message";

import "./App.scss";

class App extends React.Component {
  state = {
    hasThreeWords: false,
  };
  childValue = (wordsArray) => {
    this.setState({
      wordsArray: wordsArray,
      hasThreeWords: wordsArray.length >= 3 ? true : false,
    });
  };

  showForm = () => {
    this.setState({
      wordsArray: [],
      hasThreeWords: false,
    });
  };
  render() {
    return (
      <div className="App">
        {this.state.hasThreeWords ? (
          <Message wordsArray={this.state.wordsArray} showForm={this.showForm} />
        ) : (
          <WordsInput childValue={this.childValue}></WordsInput>
        )}
      </div>
    );
  }
}

export default App;
