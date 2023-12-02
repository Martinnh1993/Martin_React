import { createDrawerNavigator } from 'react-navigation-drawer'
import { createAppContainer } from 'react-navigation'
import RecipesScreen from '../RecipesScreen'

const RootDrawerNavigator = createDrawerNavigator ({
    Recipe: {
        screen: RecipesScreen
    },
    
})