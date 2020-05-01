import React from "react";
import "./wordsInput.scss";

class WordsInput extends React.Component {
  state = {
    words: [],
    word: "",
    boolean: true,
  };

  onChangeHandler = (e) => {
    this.setState({
      word: e.target.value,
    });
  };

  addWord = (e) => {
    e.preventDefault();
    this.setState({
      words: [...this.state.words, this.state.word],
      word: "",
      boolean: true,
    });
  };

  showMessage = (e) => {
    e.preventDefault();
    this.setState({
      boolean: this.state.words.length >= 3 ? true : false,
    });
    this.props.childValue(this.state.words);
  };

  render() {
    console.log(this.state.words, this.state.boolean);
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
        {!this.state.boolean ? <p className="words-error">Add at least 3 words to continue</p> : ""}
        <div className="words-buttons">
          <button className="words-buttons-show" onClick={this.showMessage}>
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
