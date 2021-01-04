import './App.css';
import React, { useState} from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Navigbar from './components/navigbar';
import Menu from './pages/menu';
import Order from './pages/order';
import Home from './pages/home';
import Newproduct from './pages/newproduct';
import Register from './pages/register';
import 'bootstrap/dist/css/bootstrap.min.css';

const userInitialFormData = Object.freeze({
  email: "",
  password: ""
});


function App() {

  const [userFormData, updateUserFormData] = useState(userInitialFormData);

  return (
    <div className="App">
      <BrowserRouter>
        <Navigbar userFormData={userFormData} updateUserFormData={updateUserFormData} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/menu" component={Menu} />
          <Route path="/order" component={Order} />
          <Route path="/newproduct" component={Newproduct} />
          <Route path="/register" component={Register} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
