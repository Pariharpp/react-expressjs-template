import React, { Component } from 'react';
import { connect } from "react-redux"

class Home extends Component {
  render() {
    return(
      <section>
        <div className="row">
          <div className="main-header">
            <div className="container">
              <div className="col-sm-12">
                <h1>{this.getName()}</h1>
                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="container">
            <div className="row languages">
              <div className="col-sm-12">
                <p>Select language</p>
              </div>
              {this.getLanguagesIcon()}
            </div>
          </div>
        </div>
      </section>
    )
  }
  getName() {
    return "<Lets Code />";
  }
  getLanguagesIcon() {
    return this.props.data.languages.map((lang) =>
    <div className="col-sm-3">
      <div className="icon">
        <img src={this.getLangIcon(lang.icon)} />
      </div>
    </div> );
  }
  getLangIcon(lang) {
    return "/img/icons/" + lang + ".svg";
  }
}
function mapStateToProps(state) {
  return {
    data: state.data,
  };
}
export default connect(mapStateToProps)(Home);
