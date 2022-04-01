import { Routes, Route, Navigate, useLocation } from 'react-router-dom';

import { AnimatePresence } from 'framer-motion';
import './index.css';
import './App.css';

// Components import
import Header from './Components/Header';
import Home from './Components/Home/Home';
import About from './Components/AboutMe/About';
import Projects from './Components/Projects/Projects';
import Technologies from './Components/Home/Technologies/Technologies';

const App = () => {
	const location = useLocation();

	return (
		<div className='App'>
			<Header />
			<div className='content'>
				<AnimatePresence exitBeforeEnter>
					<Routes location={location} key={location.pathname}>
						<Route path='/' element={<Home />} />
						<Route path='/about' element={<About />} />
						<Route path='/projects' element={<Projects />} />
						<Route path='/tech' element={<Technologies />} />
						<Route render={() => <Navigate to='/' />} />
					</Routes>
				</AnimatePresence>
			</div>
		</div>
	);
};

export default App;
