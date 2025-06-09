import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ExampleComponents from "./pages/ExampleComponets";

const App: React.FC = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/example-components" element={<ExampleComponents />} />
			</Routes>
		</Router>
	);
};

export default App;
