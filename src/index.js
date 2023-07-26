import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import {  Header } from './components';
import { Categories } from './screens';
import { useState } from 'react';

export default function App() {
  const [isCategorySelected, setIsCategorySelected] = useState(false);
  
  const onSelectCategory = ( categoryId ) =>{
    setIsCategorySelected(true)
    console.warn({categoryId});
  };
  
  return (
    <SafeAreaView style={styles.container}> 
      <View style={styles.container}>
        <Header title='Categories'/>
        {isCategorySelected ? (
          <Text>Category Selected</Text>
        ) : (
          <Categories onSelectCategory={onSelectCategory}/>
        )

        }
        
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
