import React from 'react';

import { Text, StyleSheet, Dimensions, ImageBackground } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 20,
  },
  fileName: {
    fontWeight: 'bold',
    marginTop: 5,
  },
  instructions: {
    color: '#DDD',
    fontSize: 14,
    marginTop: 20,
    textAlign: 'center',
  },
  logo: {
    height: Dimensions.get('window').height * 0.11,
    marginVertical: Dimensions.get('window').height * 0.11,
    width: Dimensions.get('window').height * 0.11 * (1950 / 662),
  },
  welcome: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

const Main = () => (
  <ImageBackground
    source={{
      uri:
        'https://i.pinimg.com/564x/ae/46/ea/ae46ea4952fe1e707e25bdaa9bcded79.jpg',
    }}
    style={styles.container}
    resizeMode="cover"
  >
    <Text style={styles.welcome}>Gitub.com/Manogel</Text>
    <Text style={styles.welcome}>Welcome to the advanced model!</Text>
    <Text style={styles.instructions}>Favorite this repository</Text>
    <Text style={styles.instructions}>You can start by editing the file:</Text>
    <Text style={[styles.instructions, styles.fileName]}>
      src/pages/Main/index.js
    </Text>
  </ImageBackground>
);

export default Main;
