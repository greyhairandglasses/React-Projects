import React from 'react';

import NavBar from './components/NavBar';
import TitleContainer from './components/TitleContainer';
import CardContainer from './components/CardContainer';
import News from './components/News';
import AboutUs from './components/AboutUs';
import Testimonies from './components/Testimonies';
import StatsBanner from './components/StatsBanner';
import Footer from './components/Footer';

import './App.css';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<NavBar />
				<TitleContainer />
			</header>
			<main>
				<AboutUs />
				<CardContainer />
				<News />
				<StatsBanner />
				<Testimonies />
			</main>
			<footer>
				<Footer />
			</footer>
		</div>
	);
}

export default App;
