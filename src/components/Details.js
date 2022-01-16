import React from "react";
import { useHistory } from "react-router-dom";
import "./style.css";

const Details = (props) => {
  const history = useHistory();

  const cancelButton = () => {
    history.push("/");
  };

  const saveButton = () => {
    alert("Person details Updated!");
  };

  return (
    <div>
      {props.match.params.id}
      <h1>Update person details</h1>
      <br />
      <label className="input">First name</label>{" "}
      <input type="text" defaultValue="Frank"></input>
      <p>
        <label className="input">Last name</label>{" "}
        <input defaultValue="Smith"></input>
      </p>
      <br />
      <p className="input">
        Enabled <input className="inputEnabled" type="checkbox"></input>
      </p>
      <p className="input">
        Valid <input className="inputValid" type="checkbox"></input>
      </p>
      <p className="input">
        Authorised <input className="inputAuthorised" type="checkbox"></input>
      </p>
      <br />
      <div className="inputSports">
        <p className="input">Favourite Sports:</p>
        <input className="inputFavorite" type="checkbox"></input>
        <label for="vehicle1">American Footbaal</label>
        <br></br>
        <input className="inputFavorite" type="checkbox"></input>
        <label for="vehicle1">Baseball</label>
        <br></br>
        <input className="inputFavorite" type="checkbox"></input>
        <label for="vehicle1">Basketball</label>
        <br></br>
      </div>
      <div className="buttonDiv">
        <button className="cancelBtn" onClick={cancelButton}>
          Cancel
        </button>
        <button className="saveBtn" onClick={saveButton}>
          Save
        </button>
      </div>
    </div>
  );
};

export default Details;
