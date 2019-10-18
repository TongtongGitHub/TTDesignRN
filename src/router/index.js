import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import HomeScreen from '../demo/home'
import ButtonScreen from '../demo/button'
import AdvancedListScreen from '../demo/advancedList'
import StorageScreen from '../demo/storage'
import FileManagerScreen from '../demo/fileManager'

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
    FileManagerScreen: {
        screen: FileManagerScreen
    }
},{
    initialRouteName: 'HomeScreen'
});

export default createAppContainer(AppNavigator);