import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';

import AceEditor from 'react-ace';

require('./Themes.jsx');

let content = "";

class Editor extends Component {
  constructor(props) {
    super(props);
    let mode = this.props.match.params.tag;
    let found = false;
    let language = {};
    this.props.data.languages.forEach(el=>{
      if(el.mode == mode) {
        language = el;
        found = true;
      }
    });
    this.state = {
      language: language,
      mode: mode,
      theme: 'monokai',
      options: {
        enableMultiselect: true,
        enableEmmet: true,
        enableBasicAutocompletion: true,
        enableLiveAutocompletion:   true,
        enableSnippets: true,
        spellcheck: true,
        useElasticTabstops: true,
        tabSize: 2,
      }
    }
  }
  render() {
    return(
      <section>
        <div className="toolbar">
          <ul>
            <li><a>{this.state.language.name}</a></li>
            <li><a className="btn btn-sm btn-success" onClick={this.onClickRun.bind(this)}><i className="fa fa-play" aria-hidden="true"></i>&nbsp;run</a></li>
          </ul>
        </div>
        <div className="row">
          <AceEditor
            name="editor"
            mode={this.state.mode}
            theme={this.state.theme}
            setOptions={this.state.options}
            onChange={this.onChange.bind(this)}
          />
        </div>
        <div id="console" className="statsbar">
        </div>
      </section>
    )
  }
  onChange(value, event) {
    content = value;
  }
  onClickRun() {
    let data = {
      mode: this.state.mode,
      content: content,
    }
    axios.post('/api/compiler/run', data).then(res=>{
      console.log($('#console'));
      $('#console')[0].innerHTML += res.data.stdout + "</br>";
    });
  }
}
function mapStateToProps(state) {
  return {
    data: state.data,
  };
}
export default withRouter(connect(mapStateToProps)(Editor));
