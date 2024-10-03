import styled from "styled-components";


const Roledie = ({currentDice, roledice}) => {
  
  
  
  return ( 
    <Dicecontainer>
          <div  className="dice" onClick={roledice}>
      <img src={`/images/dice/dice_${currentDice}.jpg`} alt="dice1 image" />
    </div>

    <p>Click on Dice to roll</p>

    </Dicecontainer>

  );
};

export default Roledie;

const Dicecontainer = styled.div`
margin-top:48px;
display:flex;
flex-direction:column;
align-items:center;


p{
font-size:24px;
}


.dice{


cursor:pointer;

}
`;
