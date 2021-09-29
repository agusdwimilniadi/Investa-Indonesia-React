import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Main from "./components/beranda/Main";
import DetailProyek from "./components/detailProyek/detailProyek";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Proyek from "./components/proyek/Proyek";

function App() {
  const LoginContainer = () => <></>;
  const DefaultContainer = () => (
    <>
      <Navbar />
      <Route path="/" exact component={Main} />
      <Route path="/proyek" exact component={Proyek} />
      <Route path="/proyek/:id" exact component={DetailProyek} />

      <Footer />
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
    </>
  );
}

export default App;
