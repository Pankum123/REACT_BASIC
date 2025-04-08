import React from 'react'

const ChildComponent = React.memo(
  (props) => {
    console.log("Child Componenet go re-rendered again");
    return (
      <div>
        <button onClick={props.handleClick}>
          {props.buttonName}
        </button>
      </div>
    )
  }
);

export default ChildComponent
//React.memo -> wrap-> component re-render tabhi hoga jab props change hoga nahi to re-render nahi hoga

//if u r sending a function ,then memo want be able to save you from re-rendering

