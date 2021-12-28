import React from "react";
import { useHistory } from "react-router";
import axios from "axios";

const SaveMeal = ({ meals, trip, days, totalCal }) => {
  const handleSave = () => {

    let send = {
      allMealInfo: meals,
      trip: trip,
      day: days,
      totalCal: totalCal,
    };

    axios
      .post("/dailyfood", send)
      .then((response) => {
        console.log("res", response);
      })
      .catch((error) => {
        console.log(error.response);
      });
    //location.reload();
  };

  return (
    <div>
      <button className="savebutton" type="button" onClick={handleSave}>
        Save Your Meal
      </button>
    </div>
  );
};

export default SaveMeal;