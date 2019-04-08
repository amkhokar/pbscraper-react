import React from "react";
import { useEndpoint } from "./useEndpoint";
export default function App() {
  const scrapeAPI = "https://localhost:5001/api/pbscrape";
  const allScrapes = useEndpoint({
    method: "GET",
    url: scrapeAPI
  });
  const getAllKeys = async () => {
    let data = await allScrapes.data;
    console.log(JSON.stringify(data));
  };

  return (
    <div>
      <h1>Napster API Songs</h1>
      {allScrapes.pending && "Loading"}
      {allScrapes.complete && allScrapes.data.map((e, i) => <p key={i}>{e}</p>)}
      <button onClick={getAllKeys}>Get Keys</button>
    </div>
  );
}
