import React,{ useState } from 'react';
import Icon from './components/Icon'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {Card, CardBody, Container, Row ,Col, Button} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css';

import './App.css';


let itemsArr = new Array(9).fill("empty")

const App = ()=> {

  const [winMsg,setWinMsg] = useState("");
  const [isCross,setIsCross] = useState(false);

  let reloadGame = ()=>{
    setWinMsg("")
    setIsCross(false)
    itemsArr.fill("empty")
  }

  let checkWinnerUtil = (toCheck) => 
    (       (itemsArr[0] === toCheck && itemsArr[1] === toCheck && itemsArr[2] === toCheck) ||
            (itemsArr[3] === toCheck && itemsArr[4] === toCheck && itemsArr[5] === toCheck) ||
            (itemsArr[6] === toCheck && itemsArr[7] === toCheck && itemsArr[8] === toCheck) ||
            (itemsArr[0] === toCheck && itemsArr[3] === toCheck && itemsArr[6] === toCheck) ||
            (itemsArr[1] === toCheck && itemsArr[4] === toCheck && itemsArr[7] === toCheck) ||
            (itemsArr[2] === toCheck && itemsArr[5] === toCheck && itemsArr[8] === toCheck) ||
            (itemsArr[0] === toCheck && itemsArr[4] === toCheck && itemsArr[8] === toCheck) ||
            (itemsArr[6] === toCheck && itemsArr[4] === toCheck && itemsArr[2] === toCheck)
      ) ? true : false;

  let checkBoardFilled = (toCheck="empty") => 
    (       (itemsArr[0] === toCheck || itemsArr[1] === toCheck || itemsArr[2] === toCheck) ||
            (itemsArr[3] === toCheck || itemsArr[4] === toCheck || itemsArr[5] === toCheck) ||
            (itemsArr[6] === toCheck || itemsArr[7] === toCheck || itemsArr[8] === toCheck) ||
            (itemsArr[0] === toCheck || itemsArr[3] === toCheck || itemsArr[6] === toCheck) ||
            (itemsArr[1] === toCheck || itemsArr[4] === toCheck || itemsArr[7] === toCheck) ||
            (itemsArr[2] === toCheck || itemsArr[5] === toCheck || itemsArr[8] === toCheck)
      ) ? false : true;  

  let checkWinner = () => {
      //check cross winner
      // let toCheck = "cross"

      if(checkBoardFilled()) {
        setWinMsg("GAME DRAWN");
        return toast("Game Drawn",{type : "primary"})
      }

      if(checkWinnerUtil("cross")){
          setWinMsg("cross is the Winner");
          return toast("Cross Wins the match",{type : "success"})
        }

        if(checkWinnerUtil("circle"))
        {
            setWinMsg(" Circle is the Winner");
            return toast("Circle Wins the match",{type : "success"})
          }
  }

  let changeItem = (itemNumber) => {
    // console.log("CHANGED")
    if(winMsg){
      return toast(winMsg , {type : "success"})
    }

    if(itemsArr[itemNumber] === "empty"){
        itemsArr[itemNumber] = isCross ? "cross" : "circle";

        // ! flip the symbol for next turn
        setIsCross(!isCross)

        checkWinner();
    }
    else{
      return toast("Already filled",{type : "error"})
    }
  }

  return (
    <div>

      <Container className="p-5">
        <ToastContainer position="bottom-center" />
            <Row>
              <Col md={6} className="offset-md-3">
                {winMsg ? 
                  (
                    <div className= "mb-2 mt-2">
                      <h1 className= "text-center text-success text-uppercase"> {winMsg} </h1>
                      <Button color="success" block onClick={() => reloadGame()}>
                        Reload
                      </Button>
                    </div>
                  ) 
                  :
                  (
                  <div className= "mb-2 mt-2">
                    <h1 className= "text-center text-warning text-uppercase">
                      {isCross ? "Cross" : "circle" } turn
                    </h1>
                  </div>)
                }
                
                  <div className="grid">
                      {
                        itemsArr.map((item,index) => (
                          <Card onClick={() => changeItem(index)}> 
                            <CardBody className="box">
                              <Icon name={item}/>
                            </CardBody>
                          </Card>
                        ))
                      }
                  </div>
              </Col>
            </Row>
      </Container>
    </div>
  )
}

export default App;
