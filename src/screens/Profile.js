import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Button from "../components/Button";
import FloatingLabelInput from "../components/FloatingLabelInput";

const Profile = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogout = async () => {
    try {
      // Implement Firebase authentication logic here
      // You can use Firebase's signInWithEmailAndPassword method
      // Example:
      // await firebase.auth().signInWithEmailAndPassword(email, password);
      // If successful, navigate to the main app screen
      // You can use React Navigation for navigation
      navigation.navigate("SignIn");
    } catch (error) {
      Alert.alert("Error", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My App</Text>
      <View style={styles.form}>
        <View style={styles.InputContainer}>
          <FloatingLabelInput
            style={styles.input}
            label="Name"
            value={email||"Example Application"}
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View style={styles.InputContainer}>
        <FloatingLabelInput
            style={styles.input}
            label="Email"
            value={email||"example@app.com"}
            onChangeText={(text) => setEmail(text)}
          />
        </View>
      </View>
      <View
        style={{
          position: "absolute",
          bottom: 20,
          marginHorizontal: 12,
          width: "93%",
        }}
      >
        <Button title="Log out" onPress={handleLogout} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#2A2A2A",
    display: "flex",
    flexDirection: "column",
  },
  title: {
    marginVertical: 110,
    textAlign: "center",
    fontSize: 30,
    color: "white",
  },
  form: {
    marginHorizontal: 12,
  },
  InputContainer: {
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 15,
    backgroundColor: "#3D3D3D",
    alignContent: "center",
  },
  inputHint: {
    color: "#C0C0C0",
  },
  input: {
    marginLeft: 5,
  },
  forgotPassword: {
    textAlign: "right",
    marginBottom: 40,
    color: "white",
  },
  signinContainer: {
    top: 250,
    justifyContent: "center",
    display: "flex",
    flexDirection: "row",
  },
  signinWhite: {
    color: "white",
    fontWeight: "bold",
  },
  signin: {
    fontWeight: "bold",
    color: "#FFD482",
    borderBottomWidth: 1,
    borderColor: "#FFD482",
  },
});

export default Profile;
