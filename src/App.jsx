import { useState } from "react";
import Startgame from "./compoents/Startgame";
import GamePlay from "./compoents/GamePlay";

const App = () => {


 const [isGameStarted, setIsGameStarted] = useState();

 const toggleGamePlay = () =>{
  setIsGameStarted((prev) => !prev);


 };

  return (
    <>
   {isGameStarted ? <GamePlay/> : <Startgame toggle ={toggleGamePlay}/>}
   
    </>
  );
};

export default App;




