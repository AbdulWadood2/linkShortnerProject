import "./App.css";
import "./logic.js";

function App() {
  return (
    <div className="App">
      <div className="larger">Link Shortener</div>
      <div className="A">
        <div className="input">
          <input id="input" placeholder="ENTER LONG LINK"></input>
        </div>
        <div id="ENTER" className="enter">
          Enter
        </div>
      </div>
      <div id="b" className="B">
        <div className="description"></div>
        <div id="ANSWER" className="answer"></div>
        <div className="copy">
          
        </div>
      </div>
    </div>
  );
}

export default App;
