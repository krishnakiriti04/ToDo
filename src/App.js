import React from 'react'
import './App.css';
import Card from './card'



const App =()=>{

  const [card,setCard] = React.useState([]);

  const addNew = (event)=>{
    if(event.key === 'Enter'){
      let text = event.target.value;
      console.log(text);
      const newCard = card.concat([text]);
      setCard(newCard);
      event.target.value = '';
    }
    
  }

  const del = (currInd)=>{
    const newCard = card.filter((val,ind)=>ind!==currInd);
    setCard(newCard);
  }

  return (
    <div className="offset-3 col-6 p-1" id="div">
      <h1 className="text-center" id="head">ToDo App</h1>
      <div className="mb-3 border border-light input-group">
        <div className="input-group-prepend p-2">
          <i className="fa fa-check p-1 text-info"></i>
        </div>
        <input type="text" id="todo" onKeyDown={addNew} className="form-control col-12" placeholder="Add Notes" autoComplete="off" />
      </div>
      {card.map((val,ind)=><Card key={ind} text={val} del={()=>del(ind)}/>)}
      <div>
        <hr />
          <p><span className="badge badge-pill badge-dark">{card.length}</span> items</p>
      </div>
    </div>
  )
}


export default App;