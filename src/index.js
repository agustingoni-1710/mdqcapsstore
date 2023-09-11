import { ActivityIndicator, SafeAreaView, StyleSheet,View } from 'react-native';

import { FONTS, COLORS } from './themes';
import { useFonts } from 'expo-font';
import RootNavigator from './navigations';
import { Provider } from 'react-redux';
import { store } from './store ';


/* const catergoyDefault = {
  categoryId: null,
  color: COLORS.primary,
} */

export default function App() {
  const [loaded, error] = useFonts({
    [FONTS.regular]: require('../assets/fonts/Inter-Regular.ttf'),
    [FONTS.bold] : require('../assets/fonts/Inter-Bold.ttf'),
    [FONTS.light] : require('../assets/fonts/Inter-Light.ttf'),
    [FONTS.medium] : require('../assets/fonts/Inter-Medium.ttf'),
  })

  /* const [isCategorySelected, setIsCategorySelected] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(catergoyDefault);

  const headerTitle = isCategorySelected ? 'Products' : 'Categories';
  
  const onHandleSelectCategory = ({categoryId, color}) =>{
    setSelectedCategory({categoryId, color});
    setIsCategorySelected(!isCategorySelected);
  };
  const onHandleNavigate = () =>{
    setIsCategorySelected(!isCategorySelected);
    setSelectedCategory(catergoyDefault); 
  } */
  
  if(!loaded){
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator color={COLORS.primary} size= "large"/>
      </View>
    )
  }

  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}> 
        <RootNavigator/>
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
