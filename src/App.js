import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Mainpage from "./components/Mainpage";
import { DataProvider } from "./DataContext";
import Favorite from "./components/Favorite";
import Detail from "./components/Detail";
import Home from "./components/Home";

function App() {
  return (
    <DataProvider>
      <Router>
        <div className="App">
          
          <Navbar />
          <Switch>
            <Route exact path="/" component={Mainpage} />
            <Route path="/favorite" component={Favorite} />
            <Route path="/details" component={Detail} />
            <Route path="/trend" component={Home} />
          </Switch>
        </div>
      </Router>
    </DataProvider>
  );
}

export default App;