import React from "react";
import { addToVan, deleteFromVan } from "../../redux/actions";
import { connect } from "react-redux";
import "./OnTour.css";
import GearDisplay from "../Gear/GearDisplay";

const OnTour = (props) => {
  return (
    <>
      <h1>On Tour</h1>
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
