import "./App.css";
import Main from "./components/Main";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Glossary from "./components/Glossary";
import Contact from "./components/Contact";
import Profile from "./components/Profile";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={() => <Home />} />
        <Route exact path="/about" component={() => <About />} />
        <Route exact path="/profile" component={() => <Profile />} />
        <Route exact path="/main" component={() => <Main />} />
        <Route exact path="/glossary" component={() => <Glossary />} />
        <Route exact path="/contact" component={() => <Contact />} />
      </Switch>
    </div>
  );
}

export default App;
