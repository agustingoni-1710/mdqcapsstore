import { ActivityIndicator, SafeAreaView, StyleSheet,View } from 'react-native';

import { FONTS, COLORS } from './themes';
import { useFonts } from 'expo-font';
import RootNavigator from './navigations';
import { Provider } from 'react-redux';
import { store } from './store ';



export default function App() {
  const [loaded, error] = useFonts({
    [FONTS.regular]: require('../assets/fonts/Inter-Regular.ttf'),
    [FONTS.bold] : require('../assets/fonts/Inter-Bold.ttf'),
    [FONTS.light] : require('../assets/fonts/Inter-Light.ttf'),
    [FONTS.medium] : require('../assets/fonts/Inter-Medium.ttf'),
  })

  
  if(!loaded){
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator color={COLORS.primary} size= "large"/>
      </View>
    )
  }

  return (
    <Provider store={store}>
      <View style={styles.container}> 
        <RootNavigator/>
      </View>
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
