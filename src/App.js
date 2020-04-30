import React from "react";
import WordsInput from "./components/wordsInput/wordsInput";
import Message from "./components/message/message";

import "./App.scss";

class App extends React.Component {
  state = {
    hasThreeWords: false,
  };
  childValue = (hasThreeWords, wordsArray) => {
    this.setState({
      hasThreeWords: hasThreeWords,
      wordsArray: wordsArray,
    });
  };

  render() {
    return (
      <div className="App">
        {this.state.hasThreeWords ? (
          <Message wordsArray={this.state.wordsArray} />
        ) : (
          <WordsInput childValue={this.childValue} />
        )}
      </div>
    );
  }
}

export default App;
