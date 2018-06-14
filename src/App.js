import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
// import ShuffleImgArray from "./components/FillImgLinks";
import PlayArea, Column1, Column2, Column3, Column4, from "./components/filling-links"; //"./   ./components/filling-links"; //FillImgLinks";
// import Column1 from "./components/filling-links"

class App extends /*React.*/Component {
  // Render() {
  render() {
    // React() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <h1 className="App-title">Welcome to React</h1> */}
          <div className="row">
            <div className="col-4">
              <h1 className="App-title">React Clicker Game</h1>
            </div>
            <div className="col-4">
              <h1 className="App-title" hidden="true">Wrong Guess, You Lost!</h1>
            </div>
            <div className="col-4">
              <div className="row">
                <h1 className="App-title col-4">Current Score: </h1>
                <h1 className="App-title col-1" id="currentScore"> 0 </h1>
                <h1 className="App-title col-1"> | </h1>
                <h1 className="App-title col-3"> Top Score: </h1>
                <h1 className="App-title col-1" id="topScore"> 0 </h1>
              </div>
            </div>
          </div>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <br />
        <br />
        <div className="float-none mx-auto" id="play-area">
          <PlayArea>
          <div className="card-columns">
            <div className="card-deck play-area-row">
              <div className="card col-3 play-area-col" id="play-area-cell-01">
                {/* <img src="" alt="" id="img-Link-01"/> */}
                <Img00 />
              </div>
              <div className="card col-3 play-area-col" id="play-area-cell-02">
                {/* <img src="" alt="" id="img-Link-01"/> */}
                <Img01 />
              </div>
              <div className="card col-3 play-area-col" id="play-area-cell-03">
                {/* <img src="" alt="" id="img-Link-01"/> */}
                <Img02 />
              </div>
              <div className="card col-3 play-area-col" id="play-area-cell-04">
                {/* <img src="" alt="" id="img-Link-01"/> */}
                <Img03 />
              </div>
            </div>
          </div>
          <div className="card-columns">
            <div className=/*"row*/ /*"card-deck play-area-row">
              <div className="card"/*col-3 play-area-col"*/ /*id="play-area-cell-05">
                <img src="" alt="" id="img-Link-01"/>
              </div>
              <div className="card"/*col-3 play-area-col"*/ /*id="play-area-cell-06">
                <img src="" alt="" id="img-Link-01"/>
              </div>
              <div className="card"/*col-3 play-area-col"*/ /*id="play-area-cell-07">
                <img src="" alt="" id="img-Link-01"/>
              </div>
              <div className="card"/*col-3 play-area-col"*/ /*id="play-area-cell-08">
                <img src="" alt="" id="img-Link-01"/>
              </div>
            </div>
          </div>
          <div className="card-columns">
            <div className=/*"row*/ /*"card-deck play-area-row">
              <div className="card"/*col-3 play-area-col"*/ /*id="play-area-cell-09">
                <img src="" alt="" id="img-Link-01"/>
              </div>
              <div className="card"/*col-3 play-area-col"*/ /*id="play-area-cell-10">
                <img src="" alt="" id="img-Link-01"/>
              </div>
              <div className="card"/*col-3 play-area-col"*/ /*id="play-area-cell-11">
                <img src="" alt="" id="img-Link-01"/>
              </div>
              <div className="card"/*col-3 play-area-col"*/ /*id="play-area-cell-12">
                <img src="" alt="" id="img-Link-01"/>
              </div>
            </div>
          </div>
          <div className="card-columns">
            <div className=/*"row*/ /*"card-deck play-area-row">
              <div className="card"/*col-3 play-area-col"*/ /*id="play-area-cell-13">
                <img src="" alt="" id="img-Link-01"/>
              </div>
              <div className="card"/*col-3 play-area-col"*/ /*id="play-area-cell-14">
                <img src="" alt="" id="img-Link-01"/>
              </div>
              <div className="card"/*col-3 play-area-col"*/ /*id="play-area-cell-15">
                <img src="" alt="" id="img-Link-01"/>
              </div>
              <div className="card"/*col-3 play-area-col"*/ /*id="play-area-cell-16">
                <img src="" alt="" id="img-Link-01"/>
              </div>
            </div>
          </div> */}
          </PlayArea>
        </div>
      </div>
    );
  }
}

export default App;
