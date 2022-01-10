import React from "react";
import {
  BrowserRouter as Router,
  HashRouter,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from "./router/Navbar";
import Advisers from "./view/Advisers";
import styled from "styled-components";
import Investigators from "./view/Investigators";
import Administrators from "./view/Administrators";
import Documents from "./view/Documents";
import Prueba from "./view/Prueba";

const ContainerAdmin = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 15% 85%;
`;

const App = () => {
  return (
    <ContainerAdmin>
      <HashRouter>
        <Navbar />
        <Switch>
          <Route exact path="/documentos" component={Documents} />
          <Route exact path="/asesores" component={Advisers} />
          <Route exact path="/investigadores" component={Investigators} />
          <Route exact path="/administradores" component={Administrators} />
          <Route  path="/" component={Prueba}/>
        </Switch>
      </HashRouter>
    </ContainerAdmin>
  );
};

export default App;
