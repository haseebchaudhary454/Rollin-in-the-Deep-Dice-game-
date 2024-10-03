
import styled from "styled-components";
import NumberSelector from "./NumberSelector";
import TotalScore from "./TotalScore";
import Roledie from "./Roledie";
import { useState } from "react";
import { Button } from "../styled/Button";
import Rule from "./Rule";



const GamePlay = () => {
  const[score, setscore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice]=useState(1);
  const [error, setError] = useState("");
  const[showrules, setShowRules] = useState(false);

  const generateRandomNumber = (min, max) => {
    console.log(Math.floor(Math.random() * (max - min) + min));
    return Math.floor(Math.random() * (max - min) + min);

  };


const roledice =()=>{
  if (!selectedNumber) {

    setError("Please Select Number First then Roledice😊");
    return;
  }

  const randomNumber = generateRandomNumber(1, 7); 
  setCurrentDice((prev) => randomNumber);

 

if(selectedNumber === randomNumber){
  setscore((prev) => prev + randomNumber);

}else{
  setscore ((prev) => prev -2);
}

setSelectedNumber(undefined);



};  

const resetScore =()=>{

   setscore(0);
}

  return (
        <Maincontainer>
        <div className="topsection">
        <TotalScore score={score}/>
        <NumberSelector
        error={error}
        setError={setError}
        selectedNumber={selectedNumber}
        setSelectedNumber={setSelectedNumber}
        />
        </div>

        <Roledie currentDice={currentDice} roledice={roledice}  />

        <div className="btns">
          <Button onClick={resetScore}>Reset</Button>
          <Button
          onClick={()=> setShowRules(prev => !prev)}
          
          >  {showrules ? "Hide" : "Show"} Game Rules</Button>
        </div>
        {showrules && <Rule/>}
    </Maincontainer>
  );
};

export default GamePlay;


const Maincontainer = styled.main`

padding-top: 70px;



.topsection{
  display:flex;
  justify-content: space-around;
  align-item:end; 
}

.btns{

margin-top:40px;
display:flex;
align-items:center;
flex-direction: column;
justify-content:center;
gap:10px;

}`;

