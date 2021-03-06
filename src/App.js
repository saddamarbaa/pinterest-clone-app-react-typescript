import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Mainboard from "./components/Mainboard";
import unsplash from "./api/unsplash";
import db from "./firebase";

const App = () => {
  // Create state variables
  const [pins, setNewPins] = useState([]);

  // fetches data(get Image from unsplash)
  const makeApiCall = (term) => {
    return unsplash.get("https://api.unsplash.com/search/photos", {
      params: {
        query: term,
      },
    });
  };

  // fetches data
  const onSearchSubmit = (term) => {
    makeApiCall(term)
      .then((respone) => {
        const searchResult = respone.data.results;
        const newPins = [...searchResult, ...pins];

        newPins.sort((a, b) => {
          return 0.5 - Math.random();
        });
        setNewPins(newPins);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // const getNewPins = () => {
  //   let promises = [];
  //   let pinData = [];

  //   db.collection("terms").onSnapshot((snapshot) => {
  //     let snapshotData = snapshot.docs;

  //     if (snapshot.leght >= 10) {
  //       snapshotData = snapshotData.slice(
  //         snapshotData.length - 5,
  //         snapshotData.length
  //       );
  //     }

  //     snapshotData.map((doc) => {
  //       promises.push(makeApiCall(doc.data).term).then((respone) => {
  //         console.log(respone);
  //       });
  //     });
  //   });
  // };

  const getNewPins = () => {
    let promises = [];
    let pinData = [];
    let pins = ["coding", "computer", "pairs", "bali", "familt"];

    pins.forEach((pinTerm) => {
      promises.push(
        makeApiCall(pinTerm).then((respone) => {
          const searchResult = respone.data.results;
          pinData = [...searchResult, ...pinData];

          pinData.sort((a, b) => {
            return 0.5 - Math.random();
          });

          // console.log("pinData is ", pinData);
          setNewPins(pinData);
        })
      );
    });

    Promise.all(promises).then(() => {
      setNewPins(pinData);
    });
  };

  useEffect(() => {
    getNewPins();
  }, []);

  return (
    <div className="app">
      <Header onSubmit={onSearchSubmit} />
      <Mainboard pins={pins} />
    </div>
  );
};

export default App;
