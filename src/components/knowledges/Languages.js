import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Languages extends Component {
  //un state est un endroit où on peut stocker des choses dynamiquement
  state = {
    languages:[
      {id: 2, value: "Css", xp: 0.9},
      {id: 3, value: "Javascript", xp: 0.9},
      {id: 4, value: "Php", xp: 0.16},
      {id: 5, value: "Python", xp: 5},
      {id: 6, value: "Fortran90", xp: 5},
      {id: 7, value: "C++", xp: 1},
      //{id: 8, value: "Matlab", xp: 5},
      //{id: 9, value: "Maple", xp: 3},
    ],
    frameworks:[
      {id: 1, value: "Sass", xp:0.9},
      {id: 2, value: "WordPress", xp:0.5},
      {id: 3, value: "Bootstrap", xp:0.1},
      {id: 4, value: "React", xp:0.1},
      {id: 5, value: "Rest", xp:0.1},
      {id: 6, value: "Symfony", xp:0.1},
    ]
  }
  render() {
    let {languages,frameworks} = this.state;//quand on tapera frameworks ça voudra dire this.state.framework avec this étant la fonction Languages

    return (
      <div className="languagesFrameworks">
        <div className="languagesGrid">
          <ProgressBar 
            languages={languages}
            className="languagesDisplay"
            title="languages"
          />
          <ProgressBar 
            languages={frameworks}
            className="frameworkDisplay"
            title="frameworks & bibliothèques"
          />
        </div>
      </div>
    );
  }
}

export default Languages;