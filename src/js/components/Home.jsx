import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Jumbotron from "./Jumbotron.jsx";
import Footer from "./Footer.jsx";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Jumbotron />
			<Footer />
		</div>
	);
};

export default Home;