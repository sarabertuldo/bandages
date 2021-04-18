import React from "react";
import "./OnTour.css";
import GearDisplay from "../Gear/GearDisplay";
import { addTour, deleteTour } from "../../redux/actions";
import { connect } from "react-redux";

const OnTour = (props) => {
  console.log(props);
  return (
    <>
      <h1>On Tour</h1>

      <img
        src="https://cdn.hswstatic.com/gif/how-to-draw-cars-31.jpg"
        alt="Vrooooom"
      />
      <div>
        {props.onTour.map((gear) => (
          <GearDisplay
            key={gear.id}
            gear={gear}
            isOnTour={true}
            deleteTour={props.deleteTour}
          />
        ))}
      </div>
    </>
  );
};

const mapDispatchToProps = {
  deleteTour,
};

function mapStateToProps(state) {
  return {
    onTour: state.onTour,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(OnTour);

// import React, { useContext } from "react";
// import "./OnTour.css";
// import GearDisplay from "../Gear/GearDisplay";
// import { GearContext } from "../../shared/GearContext";

// const OnTour = () => {
//   const gear = useContext(GearContext);
//   const tourGear = gear.value.filter((gear) => gear.onTour);
//   return (
//     <>
//       <h1>On Tour</h1>

//       <img
//         src="https://cdn.hswstatic.com/gif/how-to-draw-cars-31.jpg"
//         alt="Vrooooom"
//       />
//       <div>
//         {tourGear.map((gear) => (
//           <GearDisplay gear={gear} />
//         ))}
//       </div>
//     </>
//   );
// };

// export default OnTour;
