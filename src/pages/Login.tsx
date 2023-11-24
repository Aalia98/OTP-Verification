import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useState } from "react";
import Icon from "react-native-vector-icons/Feather";
import { firebase } from "@react-native-firebase/auth";
import Home from "./Home";

export default function Login(props) {
  const [confirm, setConfirm] = useState(null);
  const [code, setCode] = useState("");

  // login button
  function ButtonLogin(props) {
    return (
      <Pressable
        style={styles.button}
        onPress={() => confirmCode(props.confirm)}
      >
        <Text style={styles.text}>Login</Text>
      </Pressable>
    );
  }

  // OTP send button
  function ButtonOtp() {
    return (
      <Pressable
        style={styles.buttonOtp}
        onPress={() => signInWithPhoneNumber("+1 650-555-3434")}
      >
        <Text style={styles.textOtp}>Send OTP</Text>
      </Pressable>
    );
  }

  // signin with phone number
  async function signInWithPhoneNumber(phoneNumber) {
    const confirmation = await firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber);
    setConfirm(confirmation);
  }

  // confirmation
  async function confirmCode(confirm) {
    try {
      let confirmation = await confirm.confirm(code);
      if (confirmation) {
        console.log("achaa");
        //save data authenticated
       await AsyncStorage.setItem('is_logged_in', 'yes');
      }
      return <Home />;
    } catch (error) {
      console.log("Invalid code.");
    }
  }

  // return
  return (
    // login page
    <View style={[styles.container, { flexDirection: "column" }]}>
      {/* logo */}
      <Text style={styles.logoText}>
        U<Text style={{ color: "blue" }}>D</Text>
      </Text>
      {/* image */}
      <View style={styles.imageContainer}>
        <Image
          source={require("../../android/assets/otp.jpg")}
          style={styles.image}
        />
      </View>
      {/* input mobile no */}
      <View style={styles.mobile}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: 100,
          }}
        >
          <Icon name="users" size={25} color="gray" />
          <TextInput
            placeholder="Mobile No."
            placeholderTextColor="gray"
            style={{ color: "black" }}
          />
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={styles.horizontal} />
          {confirm ? <ButtonLogin confirm={confirm} /> : <ButtonOtp />}
        </View>
      </View>
      {/* input otp */}
      <View style={styles.otpInput}>
        <Icon name="key" size={25} color="gray" />
        <TextInput
          style={styles.input}
          placeholder="Enter OTP"
          placeholderTextColor="gray"
          onChangeText={(text) => setCode(text)}
        />
      </View>
      {/* login button */}
      <ButtonLogin />
    </View>
  );
}

// styling login page
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    height: 750,
    alignItems: "center",
    justifyContent: "space-around",
    padding: 8,
  },
  logoText: {
    fontSize: 100,
    color: "black",
    textAlign: "center",
    fontWeight: "bold",
  },
  imageContainer: {
    width: 300,
    height: 300,
    backgroundColor: "black",
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: "cover",
  },
  horizontal: {
    width: 1,
    backgroundColor: "gray",
    height: 40,
  },
  mobile: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "lavender",
    height: 60,
    width: 250,
    borderRadius: 12,
    padding: 12,
  },
  otpInput: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "lavender",
    height: 60,
    width: 250,
    borderRadius: 12,
    padding: 12,
  },
  input: {
    marginLeft: 25,
    color: "black",
  },
  btn: {
    borderTopWidth: 0,
    elevation: 0,
  },
  button: {
    height: 60,
    width: 250,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 12,
    elevation: 3,
    backgroundColor: "blue",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  buttonOtp: {
    alignItems: "center",
    justifyContent: "center",
    padding: 6,
    borderRadius: 4,
    elevation: 0,
    backgroundColor: "lavender",
  },
  textOtp: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "gray",
  },
});
