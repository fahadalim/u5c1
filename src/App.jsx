import { useState } from "react";
import "./App.css";

function App() {
  const [inv,setInv] = useState({
    score:76,
    wicket:2,
    over:50,
  })
  // let totalval= inv.score;
  const handleChange=(val,product)=>{
    if(inv.score<100){
      if(product==="addone"){
        setInv({score: inv.score+val,wicket:inv.wicket,over:inv.over})
      }
      else if(product==="addfour"){
        setInv({score: inv.score+val,wicket:inv.wicket,over:inv.over})
      }
      else if(product==="addsix"){
        setInv({score: inv.score+val,wicket:inv.wicket,over:inv.over})
      }
      else if(product==="addwicket"){
        if(inv.wicket<12)
        {
          setInv({score: inv.score,wicket:inv.wicket+val,over:inv.over})
        }
        
      }
      else if(product==="addball"){
        setInv({score: inv.score,wicket:inv.wicket,over:inv.over+val})
      }
    }
    
  }
  return (
    <div className="App">
      <h3>India:</h3>
      <div className="banner">
        <div>
          Score:{" "}
          <h1 className="scoreCount">
            {
              // show "score" here
              inv.score
            }
          </h1>
        </div>
        <div>
          Wicket:{" "}
          <h1 className="wicketCount">
            {
              // show wicket here
              inv.wicket
            }
          </h1>
        </div>

        <div>
          Over:{" "}
          <h1 className="overCount">
            {
              // Show Over here in the format: "over.ball" eg: 4.5 means 4th over and 5th ball
              // if 1 more ball is thrown then over is now 5.0
              // you have to write logic to form this string from current ball number.
              inv.over
            }
          </h1>
        </div>
      </div>

      <div className="addScore">
        Add Score
        {/* these buttons should add the respective amount in the score */}
        <button 
        onClick={()=>{
          handleChange(1,"addone")
        }}
        className="addScore1">Add 1</button>
        <button
                onClick={()=>{
                  handleChange(4,"addfour")
                }}
        className="addScore4">Add 4</button>
        <button 
                onClick={()=>{
                  handleChange(6,"addsix")
                }}
        className="addScore6">Add 6</button>
      </div>

      <div className="addWicket">
        Add Wicket
        {/* Increase the count of wicket */}
        <button
                onClick={()=>{
                  handleChange(1,"addwicket")
                }}
        >Add 1 wicket</button>
      </div>

      <div className="addBall">
        Add ball
        {/* Increase the total number of balls thrown here. */}
        <button
                onClick={()=>{
                  handleChange(0.1,"addball")
                }}
        >Add 1</button>
      </div>
                <h1 className="status">{inv.score>100 ? "India Won":""}</h1>
      {/* If score reaches greater than 100, show text "India Won" without quotes in h1 tag with class name 'status' */}
    </div>
  );
}

export default App;
