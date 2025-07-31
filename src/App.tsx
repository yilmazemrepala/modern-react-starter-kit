import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ExampleComponents from "./pages/ExampleComponets";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App: React.FC = () => {
	return (
		<Router>
			<div className="flex flex-col">
				<Header />
				<main className="flex-1">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/example-components" element={<ExampleComponents />} />
					</Routes>
				</main>
				<Footer />
			</div>
		</Router>
	);
};

export default App;
