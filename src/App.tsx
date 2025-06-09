import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ExampleComponent from "./pages/ExampleComponets";

const App: React.FC = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/example" element={<ExampleComponent />} />
			</Routes>
		</Router>
	);
};

export default App;
