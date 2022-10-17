import "./App.css";
import emoji from "../../android-chrome-192x192.png";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<h1>
					<img src={emoji} height="60px" /> GraphQL Tutorial
				</h1>
			</header>
			<main>
				<p>
					Following the tutorial at{" "}
					<a
						href="https://www.freecodecamp.org/news/graphql-for-front-end-developers/"
						target="_blank"
						rel="noopener noreferrer">
						https://www.freecodecamp.org/news/graphql-for-front-end-developers/
					</a>
				</p>
			</main>
		</div>
	);
}

export default App;
