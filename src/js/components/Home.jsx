

//include images into your bundle

import Navbar from "./Navbar.jsx";
import Card from "./Card.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Footer from "./Footer.jsx";

//create your first component
const Home = () => {
	return (
		<div className="d-flex flex-column min-vh-100 my-4">
			<Navbar />
			<Jumbotron />
			<div class="container mb-5">
				<div class="row">
					<Card />
					<Card title="Arturo" imageSource="7" buttonUrl="alvillalta" />
					<Card title="Valentina" imageSource="1" buttonUrl="Vaalengogu" />
					<Card title="Alberto" imageSource="8" buttonUrl="Halber1" />
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;