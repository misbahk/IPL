import React from 'react';
import { BrowserRouter , Route, Switch } from "react-router-dom";
import Ipl from './components/Ipl'
function App() {
  return (
    <>
    <BrowserRouter>
   <Switch>
   <Route exact path="/" component={Ipl}/>
   </Switch>
   </BrowserRouter>
   </>
  );
}

export default App;
