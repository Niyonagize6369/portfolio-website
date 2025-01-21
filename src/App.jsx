import Main from "./components/Main";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
function App() {
  return (
    <div className="bg-gray-600">
      <Nav />
      <Main />
      <AboutMe />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
