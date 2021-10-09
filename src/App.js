import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar
        title="Raytheon"
        first="About"
        second="Contact Us"
        third="Products"
        fourth="Buy"
      />
      <div className="container mt-5">
        <TextForm />
      </div>
    </>
  );
}

export default App;
