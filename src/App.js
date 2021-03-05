import React, { useState } from "react";
import Header from "./components/Header";
import Mainboard from "./components/Mainboard";
import unsplash from "./api/unsplash";

const App = () => {
  // Create state variables
  const [pins, setNewPins] = useState([]);

  // fetches data
  const GetImages = (term) => {
    return unsplash.get("https://api.unsplash.com/search/photos", {
      params: {
        query: term,
      },
    });
  };

  // fetches data
  const onSearchSubmit = (term) => {
    GetImages(term)
      .then((respone) => {
        let results = respone.data.results;
        let newPins = [...results, ...pins];

        newPins.sort((a, b) => {
          return 0.5 - Math.random();
        });
        setNewPins(newPins);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="app">
      <Header onSubmit={onSearchSubmit} />
      <Mainboard pins={pins} />
    </div>
  );
};

export default App;
