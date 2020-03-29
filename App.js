import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {StyleSheet} from 'react-native';
import {
  ApplicationProvider,
  IconRegistry,
  Layout,
  Text,
} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {mapping, light as theme} from '@eva-design/eva';

// components
import TopNavigation from './src/mainComponents/TopNavigation';

// helper component
import MediaHlper from './src/helperComponents/Media';

// reducers
import reducers from './src/redux/reducers';

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default function App() {
  return (
    <Provider store={store}>
      <MediaHlper />
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider mapping={mapping} theme={theme}>
        <TopNavigation />
        <Layout style={styles.container}>
          <Text style={styles.text} category="h1">
            Welcome to UI Kitten 😻
          </Text>
        </Layout>
      </ApplicationProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
  },
  likeButton: {
    marginVertical: 16,
  },
});
