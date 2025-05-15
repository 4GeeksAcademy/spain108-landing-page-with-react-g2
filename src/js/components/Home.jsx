

//include images into your bundle

import Navbar from "./Navbar.jsx";
import Card from "./Card.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Footer from "./Footer.jsx";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar />
			<Jumbotron />
			<Card />
			<Footer />
		</div>
	);
};

export default Home;