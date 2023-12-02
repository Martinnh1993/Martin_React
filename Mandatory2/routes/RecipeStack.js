import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import RecipesScreen from '../../Cookbook/screens/RecipesScreen'
import RecipeDetailsScreen from '../../Cookbook/screens/RecipeDetailScreen'

const screens = {
  Recipes: {
    screen: RecipesScreen
  },
  RecipeDetails: {
    screen: RecipeDetailsScreen
  }
}
const RecipeStack = createStackNavigator(screens)

export default createAppContainer(RecipeStack)