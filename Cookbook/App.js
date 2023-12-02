import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import RecipesScreen from './screens/RecipesScreen'
import RecipeDetailScreen from './screens/RecipeDetailScreen'
import UploadMediaFile from './screens/Upload'
import ShoppingListScreen from './screens/ShoppingListScreen'

const stack = createNativeStackNavigator()

export default function App() {
  return (
    
        <NavigationContainer>
          <stack.Navigator screenOptions={{headerShown: false}}>
            <stack.Screen name='Recipes' component={RecipesScreen}/>
            <stack.Screen name='RecipeDetails' component={RecipeDetailScreen}/>
            <stack.Screen name='ShoppingList' component={ShoppingListScreen}/>
            {/* for the examen project i'll expand on this project and add an image to the recipes 
            <stack.Screen name='Upload' component={UploadMediaFile}/> */}
          </stack.Navigator>
        </NavigationContainer>

  );
}

const styles = StyleSheet.create({

});

// This is for later use 
  /* const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      console.log('user', user)
      setUser(user)
    })
  }, []) */