import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import HomeScreen from '../demo/home'
import ButtonScreen from '../demo/button'
import AdvancedListScreen from '../demo/advancedList'

const AppNavigator = createStackNavigator({
    HomeScreen: {
        screen: HomeScreen
    },
    ButtonScreen: {
        screen: ButtonScreen
    },
    AdvancedListScreen: {
        screen: AdvancedListScreen
    }
},{
    initialRouteName: 'HomeScreen'
});

export default createAppContainer(AppNavigator);