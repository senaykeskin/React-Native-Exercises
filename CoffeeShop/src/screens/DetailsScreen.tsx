import React from "react";
import { View, Text, Button } from "react-native";

// @ts-ignore
export default function DetailsScreen({navigation}) {
  return (
    <View style={{ flex: 1, backgroundColor: "blue", alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      <Button title="go back" onPress={navigation.goBack} />
    </View>
  );
};


