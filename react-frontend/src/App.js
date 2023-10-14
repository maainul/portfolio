import "./App.css";
import Layout from "./components/layout/Layout";
import About from "./pages/About/About";

function App() {
  return (
    <>
      <Layout />
      <div className="container">
        <About />
      </div>
    </>
  );
}

export default App;
