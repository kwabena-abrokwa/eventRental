import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/Guest/HomePage";
import ProductView from "./Pages/Guest/ProductView";

function App() {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/product/:id" element={<ProductView />} />
		</Routes>
	);
}

export default App;
