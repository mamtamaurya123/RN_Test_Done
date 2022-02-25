import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

function Home({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen My Screen</Text>
      <Button
        title='Product Details'
        onPress={() => navigation.navigate("ProductDetails")}
      />

      <Button title='Profile' onPress={() => navigation.navigate("Profile")} />
    </View>
  );
}
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});