import "./App.css";
import MobileNav from "./components/MobileNav/MobileNav";
import Layout from "./components/layout/Layout";
import { useTheme } from "./context/ThemeContext";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Project from "./pages/Project/Project";
import TechStack from "./pages/TechStack/TechStack";
import ScrollToTop from "react-scroll-to-top";

function App() {
  const [theme] = useTheme();
  return (
    <>
    <div id={theme}>
      <MobileNav />
      <Layout />
      <div className="container">
        <About />
        <TechStack />
        <Project />
        {/* <WorkExp /> */}
        <Contact />
      </div>
      <div className="footer mb-3 ms-3">
        <h4 className="text-center">Made With 😎 Md Mainul Hasan 2023</h4>
      </div>
      </div>
      <ScrollToTop
        smooth
        color="#f29f67"
        style={{ backgroundColor: "#1e1e2c", borderRadius: "80px" }}
      />
    </>
  );
}

export default App;
