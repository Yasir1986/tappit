import React, { useState, useEffect } from "react";
import "./style.css";

const ApiCall = () => {
  const [data, dataSet] = useState([]);

  useEffect(() => {
    async function fetchMyAPI() {
      let response = await fetch(
        "https://run.mocky.io/v3/ceb09528-8228-4a95-b7d9-c1f945023c92"
      );
      response = await response.json();
      dataSet(response);
    }

    fetchMyAPI();
  }, []);

  const renderHeader = () => {
    let headerElement = [
      "Name",
      "Enabled",
      "Valid",
      "Authorised",
      "Palindrome",
    ];

    return headerElement.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  };

  const renderBody = () => {
    return data.map(
      ({ firstName, isEnabled, isValid, isAuthorised, isPalindrome }) => {
        {
          console.log(data);
        }
        return (
          <tr>
            <td>{firstName}</td>
            <td>{isEnabled ? "true" : "false"}</td>
            <td>{isValid ? "true" : "false"}</td>
            <td>{isAuthorised ? "true" : "false"}</td>
            <td>{isPalindrome ? "true" : "false"}</td>
          </tr>
        );
      }
    );
  };

  return (
    <>
      <h1 id="title">React Table</h1>
      <table id="employee">
        <thead>
          <tr>{renderHeader()}</tr>
        </thead>
        <tbody>{renderBody()}</tbody>
      </table>
    </>
  );
};

export default ApiCall;
