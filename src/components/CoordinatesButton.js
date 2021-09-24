// Code CoordinatesButton Component Here
import React, {Component} from "react";

export default class CoordinatesButton extends React.Component{
    
      render() {
        let callback = (e) => this.props.onReceiveCoordinates([e.clientX, e.clientY])
        return (
            <button onClick={callback} value="Coordinate" />
        )
      }
}