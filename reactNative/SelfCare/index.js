/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import MainScreen from './src/screens/Main';

// AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName,()=>MainScreen)