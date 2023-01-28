/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import Icon2 from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/Entypo';
import User from 'react-native-vector-icons/FontAwesome';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";

const sifreGizleme = {

}

function App(): JSX.Element {
  const [text, setText] = useState("")
  const [passwordVisible, setPasswordVisible] = useState(true)
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.item}>
        <User
          style={styles.password}
          name="user"
          size={25}
          color="black"
        />
        <TextInput
          style={styles.user_input}
          placeholder= "Kullanıcı Adı/E-posta"
        />
      </View>
      <View style={styles.item}>
        <Icon2
          style={styles.password}
          name="key"
          size={25}
          color="black"
        />
        <TextInput
          style={styles.password_input}
          secureTextEntry={passwordVisible}
          placeholder= "Şifre"
          value={text}
          onChangeText={setText}
        />
        <Icon.Button
          style={styles.icon}
          name={passwordVisible ? "eye-with-line": "eye"}
          size={30}
          color="#000000"
          onPress={()=> setPasswordVisible(!passwordVisible)}
        />
      </View>
      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.button}
        onPress={()=> console.log("giriş yapıldı")}>
        <Text style={styles.text}>GİRİŞ</Text>
      </TouchableOpacity>
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
    flexDirection: "row"
  },
  password_input: {
    fontSize: 20,
    padding: 15,
    paddingLeft: 15,
    width: "75%"
  },
  button: {
    backgroundColor: "#08a6db",
    marginTop: 10,
    marginLeft: "10%",
    marginRight: "10%",
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    height: 40

  },
  icon: {
    backgroundColor: "lightgray",
    paddingRight: 0,
    width: "100%",
  },
  password: {
    paddingLeft: 15,
  },
  user_input: {
    fontSize: 20,
    padding: 15,
    width: "90%"
  },
  text: {
    fontSize: 22,
    fontWeight: "bold"
  }

});

export default App;
