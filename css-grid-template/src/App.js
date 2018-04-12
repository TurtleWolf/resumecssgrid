import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="container">
            <div className="z-depth-2" alt="image wordings"><img src="img/normal1.jpg"/></div>
            <div className="vertical z-depth-2" alt="image wordings"><img src="img/vertical1.jpg"/></div>
            <div className="horizontal z-depth-2" alt="image wordings"><img src="img/cssGRID/mysql.png"/></div>
            <div className="z-depth-2" alt="image wordings"><img src="img/normal2.jpg"/></div>
            <div className="z-depth-2" alt="image wordings"><img src={logo} className="App-logo" alt="logo" /></div>
            <div className="big z-depth-2" alt="image wordings"><img src="img/cssGRID/images.jpg"/></div>
            <div className="z-depth-2" alt="image wordings"><img src="img/normal4.jpg"/></div>
            <div className="social-link-list vertical z-depth-2" alt="image wordings">                    <ul>
                        <li><a href="https://codepen.io/TurtleWolf/"><i className="fa fa-codepen" aria-hidden="true"></i> CodePen</a>
                        </li>
                        <li><a href="https://www.facebook.com/groups/266866570176327/"><i className="fa fa-facebook-official" aria-hidden="true"></i> DangerousMinds</a>
                        </li>
                        <li><a href="https://www.facebook.com/turtlew0lf"><i className="fa fa-facebook-official" aria-hidden="true"></i> Facebook</a></li>
                        <li><a href="https://www.freecodecamp.org/turtlewolf"><i className="fa fa-free-code-camp" aria-hidden="true"></i> FreeCodeCamp</a></li>
                        <li><b><a href="https://github.com/TurtleWolf"><i className="fa fa-github" aria-hidden="true"></i> GitHub/TW</a></b></li>
                        <li><a href="https://plus.google.com/+JonathanPohlner"><i className="fa fa-google-plus" aria-hidden="true"></i> GooglePlus/JP</a></li>
                        <li><a href="https://www.linkedin.com/in/turtle-wolfe-87796377/"><i className="fa fa-linkedin" aria-hidden="true"></i> LinkedIn/TW</a></li>
                        <li><strong><a href="https://www.twitch.tv/turtlewolfe" className="bg-faded text-muted"><i className="fa fa-twitch" aria-hidden="true"></i> Twitch.tv/TW</a></strong></li>
                        <li><a href="https://twitter.com/JonPohlner?lang=en"><i className="fa fa-twitter" aria-hidden="true"></i> Twitter/JP</a></li>
                        <li><strong><a href="https://www.youtube.com/playlist?list=PLETG2T1KvnioI_uRwEx1-efEI6EpoN_ZR"><i className="fa fa-youtube-play" aria-hidden="true"></i> YouTube/TW</a></strong></li>
                    </ul></div>
            <div className="z-depth-2" alt="image wordings"><img src="img/normal5.jpg"/></div>
            <div className="horizontal z-depth-2" alt="image wordings"><img src="img/horizontal2.jpg"/></div>
            <div className="z-depth-2" alt="image wordings"><img src="img/cssGRID/git.png"/></div>
            <div className="big z-depth-2" alt="image wordings"><img src="img/big2.jpg"/></div>
            <div className="z-depth-2" alt="image wordings"><img src="img/cssGRID/nodejs-logo.png"/></div>
            <div className="horizontal z-depth-2" alt="image wordings"><img src="img/cssGRID/php.png"/></div>
            <div className="z-depth-2" alt="image wordings"><img src="img/normal8.jpg"/></div>
            <div className="big z-depth-2" alt="image wordings"><img src="img/cssGRID/cssgrid.png"/></div>
            <div className="z-depth-2" alt="image wordings"><img src="img/cssGRID/matrix.gif"/></div>
            <div className="vertical z-depth-2" alt="image wordings"><img src="img/cssGRID/html5.jpg"/></div>
        </div>
      </div>
    );
  }
}

export default App;