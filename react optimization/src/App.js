// React has Virtual DOM
// <h2> Tag Only Now <h2> & <p>
// In Real DOM We Only Inserting the <p> . 
// Not Re-rendering the Real DOM


// If Parent(App) Re-evaluated 
//Then Children Component(DemoOutput, Button) Also Re-evaluated
// React.memo() Stops That


// When state Changes the value Immediately Not Changes
// It Schedules to Change
// When Multiple Schedules React Ensures the Order is Right
//  prevShowParagraph => !prevShowParagraph : This Required



// useState, useCallback : React Hooks
// Only Considered Once and Memorize: Update when necessary
import React,{ useState, useCallback } from 'react';
import './App.css';

import Button from './components/UI/Button/Button';
import DemoOutput from './components/Demo/DemoOutput';






function App() {


  console.log('App Running');



  //By useState React Re-Evaluate:By default false Not Visible
  const  [showParagraph, setShowParagraph] = useState(false);

  // Button Controlling Another Button
  const  [allowToggle, setAllowToggle] = useState(false);





  const toggleParagraphHandler = useCallback ( () =>{
    // !prevShowParagraph : Opposite if true then false & reverse

    // If allowToggle true then Only
    if(allowToggle){
      setShowParagraph(prevShowParagraph => !prevShowParagraph);
    }

  }, [setShowParagraph, allowToggle] );
  // useCallback Stores (allowToggle changes)
  // So in Dependancy we have to define allowToggle

  // useCallback
  // obj1 = {}; obj2 = {}; obj1 === obj2 (false);
  //obj2 = obj1; obj1 === obj2 (true);




  const allowToggleHandler = () =>{
    setAllowToggle(true);
  }





  return (


    <div className="app">

      <h1>Hi there!</h1>

      {/* Check If True Then Execute / Expects show prop*/}
      <DemoOutput show={showParagraph}/>

      <Button onClick={toggleParagraphHandler}>Toggle Paragraph</Button>
      {/* Even Tough Not Using When useState It Considered New: Running */}

      <Button onClick={allowToggleHandler}>Allow Toggle</Button>

    </div>


  );

}



export default App;


