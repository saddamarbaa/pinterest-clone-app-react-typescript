/** @format */

import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Mainboard from "./components/Mainboard";
import unsplash from "./api/unsplash";
import db from "./firebase";
import styled from "styled-components";
import Login from "./components/Login";
import { useStateValue } from "./StateProvider";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// const BearerToken = localStorage.getItem("token");

const App = () => {
	const [{ user }, dispatch] = useStateValue();
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
				// console.log(error);
			});
	};

	useEffect(() => {
		let unsubscribe;
		let promises = [];
		let pinData = [];

		unsubscribe = db
			.collection("terms")
			.orderBy("timestamp", "asc")
			.limit(10)
			.onSnapshot((snapshot) => {
				let snapshotData = snapshot.docs;
				snapshotData.map((doc) => {
					const existingTermInFirebase = doc.data()?.term;
					promises.push(
						makeApiCall(existingTermInFirebase).then((response) => {
							const searchResult = response.data.results;
							pinData = [...searchResult, ...pinData];

							pinData.sort((a, b) => {
								return 0.5 - Math.random();
							});

							setNewPins(pinData);
						}),
					);
				});
			});

		return () => {
			unsubscribe();
		};
	}, []);

	return (
		<AppWrapper>
			{!user ? (
				<Login />
			) : (
				<>
					<Header onSubmit={onSearchSubmit} />
					<Mainboard pins={pins} />
				</>
			)}
		</AppWrapper>
	);
};

const AppWrapper = styled.div`
	min-height: 100vh;
	width: 100%;
`;

export default App;
