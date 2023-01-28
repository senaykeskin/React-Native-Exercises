/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
//import { Icon } from "@rneui/themed";
import Icon from 'native-base';
//import { Icon } from "@react-native-material/core";
//import { Icon } from 'react-native-elements';
import type {PropsWithChildren} from 'react';
import {
  Button,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";




function App(): JSX.Element {
  const [text, setText] = useState("")
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.item}>
        <TextInput
          style={styles.input}
          placeholder= "Kullanıcı Adı/E-posta"
        />
      </View>
      <View style={styles.item}>
        <TextInput
          style={styles.input}
          placeholder= "Şifre"
          value={text}
          onChangeText={setText}
          secureTextEntry={true}
        />
        <Button
          title={"a"}
          color = "#f194ff"
        />
      </View>
      <View style={styles.button}>
        <Button
          onPress={() => console.log("giris basarili")}
          title={"Giriş"}
        />
      </View>
      <Icon name="md-beer" type="ionicon" color="#887700"/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightgray",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  item: {
    borderWidth:3,
    borderRadius: 20,
    borderColor: "black",
    width: "80%",
    marginTop: 10,
    paddingRight: 20,
    alignItems: "center",
    marginHorizontal: "10%",
    justifyContent: "space-between",
    flexDirection: "row"
  },
  input: {
    fontSize: 20,
    padding: 15,
  },
  button: {
    marginTop: 20,
    marginLeft: "30%",
    marginRight: "30%",
    justifyContent: "center",
    width: "40%",
  },

});

export default App;
