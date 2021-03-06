import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Pagination from "./Pagination";
import Details from "./Details";
import "./style.css";

let PageSize = 3;

const ApiCall = () => {
  const [data, dataSet] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [update, setUpdate] = useState(false);

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

  const history = useHistory();
  const handleClick = (props) => {
    setUpdate(!update);
    history.push("/person/1");
  };

  const renderHeader = () => {
    let headerElement = [
      "Name",
      "Enabled",
      "Valid",
      "Authorised",
      "Palindrome",
     /*  "Favourite Sports" */
    ];

    return headerElement.map((key, index) => {
      return <th key={index}>{key}</th>;
    });
  };

  const renderBody = () => {
    return data.map(
      ({
        firstName,
        lastName,
        isEnabled,
        isValid,
        isAuthorised,
        isPalindrome,
        /* favouriteSports */
      }) => {
        return (
          <tr>
            <td>{firstName} {lastName}</td>
            <td>{isEnabled ? "true" : "false"}</td>
            <td>{isValid ? "true" : "false"}</td>
            <td>{isAuthorised ? "true" : "false"}</td>
            <td>{isPalindrome ? "true" : "false"}</td>
            {/*  <td>{favouriteSports.name}</td> */}
          </tr>
        );
      }
    );
  };

  return (
    <>
      {update && <Details />}

      <table id="person" data-testid="Name">
        <thead>
          <tr>{renderHeader()}</tr>
        </thead>
        <tbody onClick={handleClick} Details={Details}>
          {renderBody()}
        </tbody>
      </table>
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={data.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </>
  );
};

export default ApiCall;
