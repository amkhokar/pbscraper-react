import React, { useState, useEffect } from "react";
import axios from "axios";
function useEndpoint(req) {
  const [res, setRes] = useState({
    data: null,
    complete: false,
    pending: false,
    error: false
  });
  useEffect(() => {
    setRes({
      data: null,
      pending: true,
      error: false,
      complete: false
    });
    axios(req)
      .then(res =>
        setRes({
          data: res.data,
          pending: false,
          error: false,
          complete: true
        })
      )
      .catch(() =>
        setRes({
          data: null,
          pending: false,
          error: true,
          complete: true
        })
      );
  }, [req.url]);
  return res;
}
export default function App() {
  const scrapeAPI = "https://localhost:5001/api/pbscrape";
  const allScrapes = useEndpoint({
    method: "GET",
    url: scrapeAPI
  });
  const getAllKeys = async () => {
    let data = await allScrapes.data;
    console.log(data);
  };

  return (
    <div>
      <h1>Napster API Songs</h1>
      {allScrapes.data}
      {console.log(allScrapes.data)}
      <button onClick={getAllKeys}>Get Keys</button>
    </div>
  );
}
