import React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./style.css";

const Details = (props) => {
  const [details, setDetails] = useState([]);
  const history = useHistory();

  useEffect(() => {
    fetch(
      "https://run.mocky.io/v3/45928af0-9bd1-4eb0-a9a1-55845a009e8d/1" +
        props.match.params.id
    )
      .then((res) => res.json(details))
      .then((result) => {
        setDetails(result);
      });
  });

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
        <label>American Footbaal</label>
        <br></br>
        <input className="inputFavorite" type="checkbox"></input>
        <label>Baseball</label>
        <br></br>
        <input className="inputFavorite" type="checkbox"></input>
        <label>Basketball</label>
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
