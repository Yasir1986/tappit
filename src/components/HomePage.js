import React, { useState, useEffect, useMemo } from "react";
import Pagination  from "./Pagination";
import "./style.css";

let PageSize = 3;

const ApiCall = () => {
  const [data, dataSet] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

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
      "Favourite Sports",
    ];

    return headerElement.map((key, index) => {
      return <th key={index}>{key}</th>;
    });
  };

  const renderBody = () => {
    return data.map(
      ({
        firstName,
        isEnabled,
        isValid,
        isAuthorised,
        isPalindrome,
        favouriteSports,
      }) => {
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
            {/* <td>{favouriteSports.name}</td> */}
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
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={data.length}
        pageSize={PageSize}
        onPageChange={page => setCurrentPage(page)}
      />
    </>
  );
};

export default ApiCall;
