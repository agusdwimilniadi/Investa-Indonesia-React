import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Main from "./components/beranda/Main";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const LoginContainer = () => <></>;
  const DefaultContainer = () => (
    <>
      <Navbar />
      <Route path="/" exact component={Main} />
    </>
  );
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/masuk" component={LoginContainer} />
          <Route component={DefaultContainer} />
        </Switch>
      </BrowserRouter>
      <div className="container-fluid">
        <Navbar />
        <Footer />
      </div>
    </>
  );
}

export default App;
