import {
    createStackNavigator,
    createAppContainer
  } from 'react-navigation';
  import Home from '../home'
  import Dashboard from '../dashboard'
  const AppNavigator = createStackNavigator({
    home:Home,
    dashboard:Dashboard
  });
  export default createAppContainer(AppNavigator);