import "./App.css";
import Animes from "../Animes/Animes.js";
import emoji from "../../android-chrome-192x192.png";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<h1>
					<img src={emoji} height="60px" alt="" /> GraphQL Tutorial
				</h1>
			</header>
			<main>
				<p>
					A very quick first look at GraphQL. I followed the tutorial
					at{" "}
					<a
						href="https://www.freecodecamp.org/news/graphql-for-front-end-developers/"
						target="_blank"
						rel="noopener noreferrer">
						freeCodeCamp
					</a>
					. Using this tutorial I learned:
				</p>
				<ul>
					<li>GraphQL is a query language and runtime</li>
					<li>
						GraphQL helps solve problems of under- and over-fetching
					</li>
					<li>Using ApolloClient to set up a client</li>
					<li>
						Wrapping your root render in ApolloProvider to pass the
						client as context to your whole app
					</li>
					<li>
						Setting up a query to give back the data structure you
						want
					</li>
					<li>Adding variables to a query</li>
				</ul>
				<Animes />
			</main>
		</div>
	);
}

export default App;
