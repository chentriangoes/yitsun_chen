import React from 'react'
import "./ShadeButton.css";

//first curley break is for you to run javascripts codes
//the second is where you find your style
export default function ShadeButton(props) {

  return (
    //why the space removed after ShadeButton can change the style???
    <button className={"ShadeButton " + (props.isActive && "ShadeButton-active")}>
        {props.children}

    </button>
  )
}
