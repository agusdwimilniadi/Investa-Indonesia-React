import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Main from "./components/beranda/Main";
import DetailProyek from "./components/detailProyek/detailProyek";
import Footer from "./components/Footer/Footer";
import Investasi from "./components/investasi/Investasi";
import EditMitra from "./components/mitra/EditMitra";
import Mitra from "./components/mitra/Mitra";
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
      <Route path="/investasi/:id" exact component={Investasi} />
      <Route path="/mitra" exact component={Mitra} />
      <Route path="/edit/:id" exact component={EditMitra} />

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
