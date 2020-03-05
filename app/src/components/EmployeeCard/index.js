import React from "react";

function EmployeeCard(props) {
  console.log(props);
  return (
    <li className="list-group-item" style={{backgroundColor:"f1f1f1"}}>
      <div className="row">
        <div className="col-2">
          <img src={props.data.picture.large} alt={`Pictured:${props.data.name.first} ${props.data.name.last}`}></img>
          <h5>
            {props.data.name.first} {props.data.name.last}
          </h5>
            
        
        </div>
        <div className="col-5">
          <p><strong>Email:</strong> {props.data.email}</p>
          <p><strong>Cell:</strong>  {props.data.cell}</p>
          <p><strong>Employee ID:</strong>  {props.data.id.value}</p>
        </div>
        <div className="col-5">
          <p><strong>City:</strong> {props.data.location.city}</p>
          <p><strong>State:</strong>  {props.data.location.state}</p>
        </div>
      </div>
    </li>
  );
}

export default EmployeeCard;
