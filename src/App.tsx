import { Header } from "./components/Header";
import "./styles/global.css";
import { Footer } from "./components/Footer";
import { Widget } from "./components/Widget";
import FirstSection from "./components/FirstSection";
import SecondSection from "./components/SecondSection";
import ThirdSection from "./components/ThirdSection";
import FourthSection from "./components/FourthSection";

function App() {
  return (
    <>
      <Header />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <Footer />
      <Widget />
    </>
  );
}

export default App;
