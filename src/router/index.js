import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import HomeScreen from '../demo/home'
import ButtonScreen from '../demo/button'
import AdvancedListScreen from '../demo/advancedList'
import StorageScreen from '../demo/storage'
import FileManagerScreen from '../demo/fileManager'
import FormScreen from '../demo/form'
import TipScreen from '../demo/tip'

const AppNavigator = createStackNavigator({
    HomeScreen: {
        screen: HomeScreen
    },
    ButtonScreen: {
        screen: ButtonScreen
    },
    AdvancedListScreen: {
        screen: AdvancedListScreen
    },
    StorageScreen: {
        screen: StorageScreen
    },
    FileManagerScreen: {
        screen: FileManagerScreen
    },
    FormScreen: {
        screen: FormScreen
    },
    TipScreen: {
        screen: TipScreen
    }
},{
    initialRouteName: 'HomeScreen'
});

export default createAppContainer(AppNavigator);