import "./App.css";
import Layout from "./components/layout/Layout";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Project from "./pages/Project/Project";
import TechStack from "./pages/TechStack/TechStack";
import WorkExp from "./pages/WorkExp/WorkExp";



function App() {
  return (
    <>
      <Layout />
      <div className="container">
        <About />
        <TechStack />
        <Project />
        <WorkExp />
        <Contact />
      </div>
      <div className="footer mb-3 ms-3">
        <h4 className="text-center">Made With 😎 Md Mainul Hasan 2023</h4>
      </div>
    </>
  );
}

export default App;
