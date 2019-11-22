import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {TopView} from '../design/index'

import AppContainer from './router'

const App = () => {
  return (
      <Fragment>
            <AppContainer></AppContainer>
            <TopView></TopView>
      </Fragment>
  );
};

const styles = StyleSheet.create({
});

export default App;
