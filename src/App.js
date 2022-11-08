import React, { useMemo, useState } from "react";
import "./App.css";
import { NavBar, ContentSection, Footer } from "./components";
import { TranslatorProvider } from "react-translate";
import { LanguageContext } from "./context/langagueContext";

function App() {
	const [language, setLanguage] = useState("es");

	const languageProvider = useMemo(
		() => ({ language, setLanguage }),
		[language, setLanguage]
	);

	return (
		<LanguageContext.Provider value={languageProvider}>
			<TranslatorProvider
				translations={require(`./assets/languages/${language}.json`)}
			>
				<React.Fragment>
					<NavBar />
					<ContentSection />
					<Footer />
				</React.Fragment>
			</TranslatorProvider>
		</LanguageContext.Provider>
	);
}

export default App;
