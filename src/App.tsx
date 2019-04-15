// Core
import React, { Component, Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

// Ionic Components
import { IonApp, IonPage } from '@ionic/react';

// Routing
import AppRouter from './routers/AppRouter';

// Store
import store from './store/store';

// Components
import Menu from './components/menu/Menu';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div id="app">
            <IonApp>
              <Menu />
              <IonPage id="main">
                <Fragment>
                  <AppRouter />
                </Fragment>
              </IonPage>
            </IonApp>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
