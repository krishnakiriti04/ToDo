import React from 'react';
import Card from './card';
import './App.css';

const App =()=>{

  //immuatable
  const [card,setCard] = React.useState([]);
  const [check,setCheck] = React.useState([]);

  //mutable
  const [display,setDisplay] = React.useState([]);
  const [dispCheck,setDisplayChecked] = React.useState([]);


  const addNew = (event)=>{
    if(event.key === 'Enter'){
      let text = event.target.value;
      const newCard = card.concat([text]);
      const newCheck = check.concat([0]);
      setCard(newCard);
      setCheck(newCheck);
      setDisplay(newCard);    //displays the cards
      setDisplayChecked(newCheck);
      event.target.value = '';
    }
    
  }

  const del = (currInd)=>{
    const newCard = card.filter((val,ind)=>ind!==currInd);
    const newCheck = check.filter((val,ind)=>ind!==currInd);
    setCard(newCard);
    setCheck(newCheck);
    setDisplay(newCard); //displays updated cards
    setDisplayChecked(newCheck);
  }

  const display_all = ()=>{
    setDisplay(card);
    setDisplayChecked(check);
  }

  const display_checked = ()=>{
    let tempCard = [];
    let newCheck = check.filter((val,ind)=>{
      if(val===1){
        tempCard.push(card[ind]);
        return true;
      }
      return false;
    })
    setDisplay(tempCard);
    setDisplayChecked(newCheck);
    // console.log(tempCard);
    // console.log(newCheck);
  }

  const display_unchecked = ()=>{
    let tempCard = [];
    let newCheck = check.filter((val,ind)=>{
      if(val===0){
        tempCard.push(card[ind]);
        return true;
      }
      return false;
    })
    setDisplay(tempCard);
    setDisplayChecked(newCheck);
    // console.log(tempCard);
    // console.log(newCheck);
  }

  const checked_func = (currInd)=>{
    //console.log("checked func");
    let temp = check.map((val,ind)=>ind===currInd?val=1:val)
    setCheck(temp)
    setDisplayChecked(temp);
  }

  const unchecked_func = (currInd)=>{
    //console.log("unchecked func")
    let temp = check.map((val,ind)=>ind===currInd?val=0:val)
    setCheck(temp);
    setDisplayChecked(temp);
  }

  //0 = unchecked
  //1 = checked

  const checkAll = ()=>{
    const checksome = check.some((val)=>val===0); // if any one is unchecked returns true and 
    const checkall = check.map((val,ind)=>{
     return checksome ? val = 1 : val=0;
    });
    setCheck(checkall);
    setDisplayChecked(checkall);
  }

  // console.log("card::",card);
  // console.log("check::",check);
  // console.log("display::",display);
  // console.log("displaycheck::",dispCheck);

  let checkedNumber = check.filter((val)=>val===1).length;
  let uncheckedNumber = check.filter((val)=>val===0).length;

  return (
    <div className="offset-3 col-6 p-1" id="div">
      <h1 className="text-center" id="head">ToDo App</h1>
      <div className="mb-3 border border-light input-group">
        <div className="input-group-prepend p-2">
          <h4><i className="fa fa-check text-info" onClick={checkAll}></i></h4>
        </div>
        <input type="text" id="todo" onKeyDown={addNew} className="form-control col-12" placeholder="Add Notes" autoComplete="off" />
      </div>
      {display.map((val,ind)=>{
          if(dispCheck[ind]){
            return <Card 
            key={ind} 
            text={val} 
            del={()=>del(ind)} 
            checked_func={()=>checked_func(ind)}
            unchecked_func={()=>unchecked_func(ind)}
            ischecked = "true"
            />
          }else{
             return <Card 
              key={ind} 
              text={val} 
              del={()=>del(ind)} 
              checked_func={()=>checked_func(ind)}
              unchecked_func={()=>unchecked_func(ind)}
              ischecked = "false"
              />
          }
      }
      
      )}
      <div>
        <hr />
        <div className="d-flex justify-content-between">
          
          <button className="px-4" onClick = {display_all}><h6> All <span className="badge badge-pill badge-dark">{card.length}</span></h6>
          </button>
          <button className="px-4" onClick={display_checked}><h6> Done <span className="badge badge-pill badge-success">{checkedNumber}</span></h6>
          </button>
          <button className="px-4" onClick={display_unchecked}> <h6> Active <span className="badge badge-pill badge-info">{uncheckedNumber}</span></h6>
          </button>
        </div>
      </div>
    </div>
  )
}


export default App;