import React from "react";
import "./wordsInput.scss";

class WordsInput extends React.Component {
  state = {
    words: [],
    word: "",
    hasThreeWords: true,
  };

  addWord = (e) => {
    e.preventDefault();
    this.setState({
      words: [...this.state.words, this.state.word],
      word: "",
      hasThreeWords: true,
    });
  };

  showWord = (e) => {
    e.preventDefault();
    this.setState({
      hasThreeWords: this.state.words.length >= 3 ? true : false,
    });
    this.props.childValue(this.state.words);
  };
  onChangeHandler = (e) => {
    this.setState({
      word: e.target.value,
    });
  };
  render() {
    console.log(this.state.words, this.state.hasThreeWords);
    return (
      <form action="" className="words">
        <label htmlFor="words-input" className="words-label">
          Add Words
        </label>
        <input
          value={this.state.word}
          type="text"
          name="words-input"
          id="words-input"
          className="words-input"
          onChange={this.onChangeHandler}
        />
        {!this.state.hasThreeWords ? (
          <p className="words-error">Add at least 3 words to continue</p>
        ) : (
          ""
        )}
        <div className="words-buttons">
          <button className="words-buttons-show" onClick={this.showWord}>
            Show me the message
          </button>
          <button className="words-buttons-add" onClick={this.addWord}>
            Add new word
          </button>
        </div>
      </form>
    );
  }
}

export default WordsInput;
