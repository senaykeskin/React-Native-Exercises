/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  Text,
  RefreshControl,
  Image,
  View
} from "react-native";

const movieName = [
  {
    id: 1,
    name: "Esaretin Bedeli",
    image: require('./assets/esaretin_bedeli2.jpg')
    },
    {
      id: 2,
      name: "Baba",
      image: require('./assets/baba.png')
    },
    {
      id: 3,
      name: "Kara Şövalye",
      image: require('./assets/kara_sovalye.jpg')
    },
    {
      id: 4,
      name: "Schindler'in Listesi",
      image: require('./assets/schindler_in_listesi.jpg')
    },
    {
      id: 5,
      name: "Yüzüklerin Efendisi: \nKralın Dönüşü",
      image: require('./assets/yuzuklerin_efendisi_kralin_donusu.jpg')
    },
    { id: 6,
      name: "Baba 2",
      image: require('./assets/baba_2.jpg')
    },
    {
      id: 7,
      name: "12 Öfkeli Adam",
      image: require('./assets/on_12_kızgın_adam.jpg')
    },
    {
      id: 8,
      name: "Ucuz Roman",
      image: require('./assets/ucuz_roman.jpg')
    },
    {
      id: 9,
      name: "Dövüş Kulübü",
      image: require('./assets/dovus_kulubu.jpg')
    },
    {
      id: 10,
      name: "Başlangıç",
      image: require('./assets/baslangic.jpg')
    },
]

const movies = ({item}) => (
  <View style={styles.item}>
    <View style={styles.avatarContainer}>
      <Image source={item.image} style={styles.avatar} />
    </View>
    <Text style={styles.name}>{item.name}</Text>
  </View>
)

const App = () => {
  const [refreshing, setRefreshing] = useState(false)
  const _onRefresh = () => {
    setRefreshing(true)
    setTimeout(() => {
      setRefreshing(false)
    }, 2000);
}

  return (
    <SafeAreaView style={styles.background}>
      <FlatList
        data={movieName}
        renderItem={movies}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={_onRefresh}/>}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'lightgray',
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  item: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    padding: "5%",
    //paddingRight: 30,
    //paddingTop: 25,
    //paddingBottom: 25,
    borderWidth: 3,
    borderColor: "black",
    margin: 10,
    borderRadius: 20
  },
  avatarContainer: {
    backgroundColor: "#D9D9D9",
    height: 180,
    width: 120,
    justifyContent: "center",
    alignItems: "center",

  },
  avatar: {
    height: "100%",
    width: "100%"
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: "5%"
  }
});

export default App;
