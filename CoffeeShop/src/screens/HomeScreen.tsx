import React, { useState } from "react";
import { View, Text, Button, TextInput } from "react-native";

// @ts-ignore
export default function HomeScreen({navigation}) {
  const [name, setName] = useState("");
  return (
    <View style={{ flex: 1, backgroundColor: "gray", alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button title="go to details" onPress={() => navigation.navigate("DetailsScreen", {gonderi: name})} />
    </View>
  );
};


