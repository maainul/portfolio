import "./App.css";
import Layout from "./components/layout/Layout";
import About from "./pages/About/About";
import Project from "./pages/Project/Project";
import TechStack from "./pages/TechStack/TechStack";

function App() {
  return (
    <>
      <Layout />
      <div className="container">
        <About />
        <TechStack />
        <Project />
      </div>
    </>
  );
}

export default App;
