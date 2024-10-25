import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const Item = ({item, onPress, backgroundColor, textColor}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
    <Text style={[styles.title, {color: textColor}]}>{item.title}</Text>
  </TouchableOpacity>
);

export default function App() {
  const [selectedId, setSelectedId] = useState();
  const [isRefreshing, setRefreshing] = useState(false);
  const refresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1000);
  }
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];

  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
    const color = item.id === selectedId ? 'white' : 'black';
  
    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  return (
    <View style={styles.containerColl}>
      {/* <View style={styles.containerList}> */}
      <SafeAreaProvider>
      <SafeAreaView style={styles.containerList}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          extraData={selectedId}
          refreshing={isRefreshing}
          onRefresh={refresh}
        />
            </SafeAreaView>
  </SafeAreaProvider>
      {/* </View> */}
      <View style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.header}>JavaScript</Text>
          <Text style={styles.text}>Изучал JS на Хекслет - курс фронтенд разработчик. После были написаны 3 проекта на чистом JS. Проект "Игра разума", "Вычислитель отличий" и "RSS агрегатор".</Text>
        </View>
        <View style={styles.row}>
          <Image
            style={styles.logo}
            source={require('./assets/js.png')}
          />
          <StatusBar style="auto" />
        </View>
      </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightslategray',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    textColor: 'white',
  },
  logo: {
    width: '46%',
    height: 120,
  },
  header: {
    fontSize: 30,
    color: 'white',
  },
  text: {
    fontSize: 15,
    color: 'white',
  },
  row: {
    alignItems: 'center',
    width:'46%',
  },
  containerColl: {
    flex: 1,
    backgroundColor: 'lightslategray',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    textColor: 'white',
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  containerList: {
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'lightslategray',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    textColor: 'white',
  }
});
