import { BigSidebar, Hero } from "../components";
import { useState, createContext, useContext } from "react";
import { About, TheJourney, YourJourney, Contact } from "../pages";
import "../css/Landing.css";

const LandingContext = createContext();

const Landing = () => {
	const [showSidebar, setShowSidebar] = useState(false);

	const toggleSidebar = () => {
		setShowSidebar(!showSidebar);
	};

	return (
		<LandingContext.Provider
			value={{
				showSidebar,
				toggleSidebar,
			}}
		>
			<div className='page'>
				<BigSidebar />

				<div className='dashboard-page'>
					<Hero />
					<About />
					<TheJourney />
					<YourJourney />
					<Contact />
				</div>
			</div>
		</LandingContext.Provider>
	);
};

export const useLandingContext = () => useContext(LandingContext);

export default Landing;
