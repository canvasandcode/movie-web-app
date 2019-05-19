import React from "react";
import Zoom from "react-reveal/Zoom";
import "./FourColGrid.css";

const FourColGrid = props => {
  const renderElements = () => {
    //create a new array of elements (each grid element)
    const gridElements = props.children.map((element, i) => {
      return (
        <Zoom>
          <div key={i} className="grid-element">
            {element}
          </div>
        </Zoom>
      );
    });
    return gridElements;
  };

  return (
    <div className="grid">
      {/* if props not empty then show header text */}
      {props.header && !props.loading ? <h1>{props.header}</h1> : null}
      <div className="grid-content">{renderElements()}</div>
    </div>
  );
};

export default FourColGrid;
