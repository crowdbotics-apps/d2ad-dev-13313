import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen212294Navigator from '../features/BlankScreen212294/navigator';
import BlankScreen112293Navigator from '../features/BlankScreen112293/navigator';
import BlankScreen012292Navigator from '../features/BlankScreen012292/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen212294: { screen: BlankScreen212294Navigator },
BlankScreen112293: { screen: BlankScreen112293Navigator },
BlankScreen012292: { screen: BlankScreen012292Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
