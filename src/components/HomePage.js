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

  // return <div>{JSON.stringify(data)}</div>;

  return (
    <React.Fragment>
      <div className="wrapper">
        {console.log(data)}
        {data.map((data, i) => (
          <div key={i} className="container">
            <table>
              <tr>
                <th className="table-heading">Name:</th>
                <td>
                  {data.firstName} {data.lastName}
                </td>

                <th className="table-heading">Enabled:</th>
                <td>{data.isEnabled ? "true" : "false"}</td>

                <th className="table-heading">Valid:</th>
                <td>{data.isValid ? "true" : "false"}</td>

                <th className="table-heading">Authorised:</th>
                <td>{data.isAuthorised ? "true" : "false"}</td>

                <th className="table-heading">Palindorme:</th>
                <td>{data.isPalindorme ? "true" : "false"}</td>

                {data.favouriteSports.map((data, i) => (
                  <th className="table-heading">
                    Favorite Sports:
                    <td>{data.name}</td>
                  </th>
                ))}
              </tr>
            </table>
          </div>
        ))}
        ;
      </div>
    </React.Fragment>
  );
};

export default ApiCall;
