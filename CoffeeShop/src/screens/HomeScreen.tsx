import React, { useState } from "react";
import { View, Text, Button, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";

// @ts-ignore
export default function HomeScreen({navigation}) {
  //const navigation = useNavigation();
  const [name, setName] = useState("");
  return (
    <View style={{ flex: 1, backgroundColor: "gray", alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <TextInput
        style={{
          width: 200,
          height: 50,
          borderWidth: 1,
          borderColor: "white",
          padding: 7
        }}
        placeholder={"what is your name?"}
        value={name}
        onChangeText={setName}
      />

      <Button title="go to details" onPress={() => navigation.navigate("DetailsScreen", {gonderi: name})} />
    </View>
  );
};


