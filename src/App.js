import React from "react";
import Header from './Components/Header/Header';
import FirstSection from './Components/FirstSection/FirstSection';
import SecondSection from './Components/SecondSection/SecondSection';
import ThirdSection from './Components/ThirdSection/ThirdSection';
import FourthSection from './Components/FourthSection/FourthSection';
import FifthSection from './Components/FifthSection/FifthSection';
import SixSection from './Components/SixSection/SixSection';
import Footer from './Components/FooterSection/Footer';

function App() {
  return (
  <React.Fragment>
    <Header/>
    <FirstSection/>
    <SecondSection/>
    <ThirdSection/>
    <FourthSection/>
    <FifthSection/>
    <SixSection/>
    <Footer />
  </React.Fragment>
);
}

export default App;
