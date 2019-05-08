import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux';
import thunk from "redux-thunk";
import {createStore, applyMiddleware} from 'redux';
import Header from './components/Header/Header';
import rootReducer from './reducers';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import Home from './pages/Home/Home'

export const  store = createStore(rootReducer, applyMiddleware(thunk));
function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <BrowserRouter>
        <React.Fragment>
          <Header/>
          <Switch>
              <Route exact path={'/'} render={() => {
                  return <Redirect to={'/products'}/>
              }}/>
              <Route exact path={'/products'} component={Home}/>
              {/* <Route exact path={'/products/:id'} component={ProductDetail}/>
              <Route exact patr={'/cart'} component={ShoppingCart}/> */}
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    </div>
    </Provider>
  );
}

export default App;
