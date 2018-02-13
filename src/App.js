import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import MDReactComponent from 'markdown-react-js';
import MarkdownRenderer from 'react-markdown-renderer';



class App extends Component {
  constructor() {
    super();
    this.state = {
      text: ''
    }
  }
  render() {
    return (
      <div>
        <textarea value={this.state.text} onChange={event => this.setState({text: event.target.value})}></textarea>

        <h2>react-markdown</h2>
        <ReactMarkdown source={this.state.text} />
        <hr />

        <h2>markdown-react-js</h2>
        <MDReactComponent text={this.state.text} />
        <hr />

        <h2>react-markdown-renderer</h2>
        <MarkdownRenderer markdown={this.state.text} />
        <hr />
      </div>
    );
  }
}

export default App;
