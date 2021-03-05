import React, { useState } from "react";
import Header from "./components/Header";
import Mainboard from "./components/Mainboard";
import unsplash from "./api/unsplash";

const App = () => {
  const [pins, setNewPins] = useState([]);

  const GetImages = (term) => {
    return unsplash.get("https://api.unsplash.com/search/photos", {
      params: {
        query: term,
      },
    });
  };

  const onSearchSubmit = (term) => {
    console.log(GetImages(term));

    // GetImages(term).then((respone) => {
    //   let results = respone.date.results;

    //   let newPins = [...results, ...pins];

    //   newPins.sort((a, b) => {
    //     return 0.5 - Math.random();
    //   });
    //   setNewPins(newPins);
    // });
  };

  return (
    <div className="app">
      <Header onSubmit={onSearchSubmit} />
      <Mainboard />
    </div>
  );
};

export default App;
