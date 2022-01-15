import React, { useState, useEffect } from "react";

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
        {console.log(data)}
          {data.map((data, i) => (
              <div key={i}>
                <p>FristName: {data.firstName} {data.lastName}</p>
                <p>Enabled: {data.isEnabled ? "true" : "false"}</p>
                <p>Valid: {data.isValid ? "true" : "false"}</p>
                <p>Authorised: {data.isAuthorised ? "true" : "false"}</p>
                <p>Palindorme: {data.isPalindorme ? "true" : "false"}</p>
                {/* <p>Favorite Sports:{data.favouriteSports}</p> */}
              </div>
          ))}
    </React.Fragment>
  );
};

export default ApiCall;
