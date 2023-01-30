/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import Password from 'react-native-vector-icons/Ionicons';
import Eye from 'react-native-vector-icons/Entypo';
import User from 'react-native-vector-icons/FontAwesome';
import NextIcon from 'react-native-vector-icons/AntDesign';
import LockIcon from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';

import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from "react-native";

function App(): JSX.Element {
  const [text, setText] = useState("")
  const [passwordVisible, setPasswordVisible] = useState(true)
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        style={styles.linearGradient}
        colors={['#FFA17F','#636FA4']}>
        <View style={styles.lock}>
          <LockIcon
            name={"lock"}
            size={40}
            color="black"
          />
        </View>
        <Text style={styles.text}>{"Sign In"}</Text>
        <View style={styles.white_area}>
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
            <Password
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
            <TouchableHighlight>
              <Eye
                name={passwordVisible ? "eye-with-line": "eye"}
                size={25}
                color="black"
                onPress={()=> setPasswordVisible(!passwordVisible)}
              />
            </TouchableHighlight>
          </View>
          <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="transparent"
            onPress={()=> console.log("giriş başarılı")}>
            <NextIcon
              name="rightcircleo"
              style={styles.nextIcon}
              size={70}
              color={"black"}
            />
          </TouchableHighlight>
        </View>

      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    marginTop: 10,
    fontSize: 40,
    fontWeight: "bold",
    color: "#8b658b"
  },
  lock: {
    borderWidth: 5,
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25
  },
  white_area: {
    backgroundColor: "#FFC0B4", //white
    marginTop: "10%",
    width: "90%",
    height: "50%",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center"
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  item: {
    borderWidth:3,
    backgroundColor: "white", //burasııııııı
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
    width: "79%"
  },
  password: {
    paddingLeft: 15,
  },
  user_input: {
    fontSize: 20,
    padding: 15,
    width: "90%"
  },
  nextIcon: {
    paddingTop: 40,
  },



});

export default App;
