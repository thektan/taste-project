import JSXComponent from 'metal-jsx';
import Router from 'metal-router';

import About from '../pages/About';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Navbar from './Navbar';
import SignUp from '../pages/SignUp';

import '../css/App.scss';

class App extends JSXComponent {
  attached() {
    Router.router().dispatch();
  }

  render() {
    return (
      <div id="app">
        <Navbar />

        <Router component={About} path="/about" />

        <Router component={Login} path="/login" />

        <Router component={SignUp} path="/signup" />

        <Router component={Home} path="/" />
      </div>
    );
  }
}

new App({element: '#root'});