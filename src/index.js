import React, { useState, useEffect } from 'react';
import { StatusBar, Platform } from 'react-native';
import '~/config/ReactotronConfig';
import { Provider } from 'react-redux';
import createNavigator from '~/routes';
import store from './store';

export default function App() {
  const [userLogged, setUserLogged] = useState(false);
  // const [userChecked, setUserChecked] = useState(false);

  useEffect(() => {
    setUserLogged(false);
  }, []);

  const Routes = createNavigator(userLogged);

  return (
    <Provider store={store}>
      <StatusBar
        backgroundColor="#111"
        barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'}
      />
      <Routes />
    </Provider>
  );
}
