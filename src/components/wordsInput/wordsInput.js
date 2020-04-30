import React from "react";
import "./wordsInput.scss";

class WordsInput extends React.Component {
  state = {
    words: [],
    word: "",
  };

  addWord = (e) => {
    e.preventDefault();
    this.setState({
      words: [...this.state.words, this.state.word],
      word: "",
    });
  };

  showWord = (e) => {
    e.preventDefault();

    this.props.childValue(this.state.hasThreeWords, this.state.words);
  };
  onChangeHandler = (e) => {
    this.setState({
      hasThreeWords: this.state.words.length >= 2 ? true : false,
    });
    this.setState({
      word: e.target.value,
    });
  };
  render() {
    return (
      <form action="" className="words">
        <label htmlFor="words-input">Add Words</label>
        <input
          value={this.state.word}
          type="text"
          name="words-input"
          id="words-input"
          onChange={this.onChangeHandler}
        />
        {!this.state.hasThreeWords && <p>Add at least 3 words to continue</p>}
        <div className="button-container">
          <button className="words-submit" onClick={this.showWord}>
            Show me the message
          </button>
          <button className="words-add" onClick={this.addWord}>
            Add new word
          </button>
        </div>
      </form>
    );
  }
}

export default WordsInput;
