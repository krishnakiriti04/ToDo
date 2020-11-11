import React from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';

const Card = (props)=>{
    return (
        <div className="card carddiv mb-2">
            <div className="card-body d-flex justify-content-between">
                <label><input type="checkbox" className="check"/> <i className="pl-2">{props.text}</i> </label>
               <i className="fa fa-times text-secondary icon" onClick={()=>{props.del()}}></i> 
            </div>
        </div>
    )
}

export default Card