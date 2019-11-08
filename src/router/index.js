import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import HomeScreen from '../demo/home'
import ButtonScreen from '../demo/button'
import AdvancedListScreen from '../demo/advancedList'
import StorageScreen from '../demo/storage'
import FileManagerScreen from '../demo/fileManager'
import FormScreen from '../demo/form'
import TipScreen from '../demo/tip'
import ImageScreen from '../demo/image'
import ListItem from '../demo/listItem'
import Tab from '../demo/tab'

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
    },
    ImageScreen: {
        screen: ImageScreen
    },
    ListItem: {
        screen: ListItem
    },
    Tab: {
        screen: Tab
    }
},{
    initialRouteName: 'HomeScreen'
});

export default createAppContainer(AppNavigator);