import { FlatList, SafeAreaView, View} from 'react-native';
import {CategoryItem} from '../../components';

import { styles } from './styles';
import useOrientation from '../../hooks/useOrientation';
import { ORIENTATION } from '../../constants/orientation';
import { useSelector } from 'react-redux';



function Categories({ navigation }) {
  const categories = useSelector((state) => state.categories.data)  
  const orientation = useOrientation();

  const onSelectCategory = ({ categoryId, color, name }) => {
    navigation.navigate('Products', {categoryId, color, name})
  };

  return (
    <SafeAreaView style={styles.container}> 
      <View style={styles.container}>
        <FlatList
          data={categories}
          style={styles.categoryContainer}
          contentContainerStyle={styles.listCategory}
          
          renderItem={({ item }) => (
            <CategoryItem 
              { ...item }  
              onSelectCategory={() => 
                onSelectCategory({ 
                  categoryId: item.id,
                  color: item.backgroundColor,
                  name: item.name,
                })
              }
              style={
                orientation == ORIENTATION.LANDSCAPE ? styles.categoryItemLandscape : {}
              }  
            />
          )}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};


export default Categories;
