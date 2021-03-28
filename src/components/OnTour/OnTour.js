import React from "react";
import { addToVan, deleteFromVan } from "../../redux/actions";
import { connect } from "react-redux";
import GearProvider, { GearContext } from "../../shared/GearContext";
import "./OnTour.css";
import GearDisplay from "../Gear/GearDisplay";

const OnTour = (props) => {
  return (
    <>
      <h1>On Tour</h1>
      <img
        src="https://cdn.hswstatic.com/gif/how-to-draw-cars-31.jpg"
        alt="Van"
      />
      {props.onTour.map((g) => (
        <GearDisplay
          key={g.id}
          gear={g}
          onTour={true}
          deleteFromVan={props.deleteFromVan}
        />
      ))}
    </>
  );
};

const mapDispatchToProps = {
  addToVan,
  deleteFromVan,
};

function mapStateToProps(state) {
  return {
    onTour: state.onTour,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(OnTour);
