import React, { Component } from 'react';

let languages = [
  {name: 'C', icon: 'c'},
  {name: 'C++', icon: 'cpp'},
  {name: 'Java', icon: 'java'},
  {name: 'Python', icon: 'python'},
  {name: 'PhP', icon: 'php'},
  {name: 'Ruby', icon: 'ruby'},
  {name: 'JavaScript', icon: 'javascript'},
  {name: 'GO', icon: 'go'},
]

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
    return languages.map((lang) =>
    <div className="col-sm-3">
      <div className="icon">
        <img src={this.getLangIcon(lang.icon)} />
        {/* <p>{lang.name}</p> */}
      </div>
    </div> );
  }
  getLangIcon(lang) {
    return "/img/icons/" + lang + ".svg";
  }
}
export default Home;
