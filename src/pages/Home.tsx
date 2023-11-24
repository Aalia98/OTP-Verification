import { Button, StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Feather";

export default function Home() {
  // button to create schedule meetings
  function ButtonCreate(props) {
    const onPress = props;
    return (
      <Pressable style={styles.createBtn} onPress={onPress}>
        <Text style={styles.btnText}>
          <Icon name="plus" size={50} />
        </Text>
      </Pressable>
    );
  }

  // return
  return (
    // body
    <View>
      {/* Navbar */}
      <View style={styles.nav}>
        {/* filter icon */}
        <Icon name="filter" size={25} color="black" />
        {/* text */}
        <Text style={styles.textHeading}>Home</Text>
        {/* notifications and history icons */}
        <View style={styles.icons}>
          <Icon name="bell" size={25} color="black" />
          <Icon name="server" size={25} color="black" />
        </View>
      </View>
      {/* body */}
      <View style={styles.horizontal} />
      {/* show upcoming meetings */}
      <View style={styles.body}>
        <View style={{ flexDirection: "row" }}>
          <View style={{ width: 3, height: 40, backgroundColor: "blue" }} />
          <Text style={styles.upcomingText}>Upcoming</Text>
        </View>
        {/* button to create meeting schedule */}
        <View
          style={{ alignItems: "flex-end", marginRight: 20, marginBottom: 20 }}
        >
          <ButtonCreate />
        </View>
      </View>
    </View>
  );
}

// styling home page
const styles = StyleSheet.create({
  nav: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    backgroundColor: "#FFFFFF",
  },
  textHeading: {
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
  },
  icons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 60,
  },
  horizontal: {
    width: 400,
    backgroundColor: "gray",
    height: 3,
    borderRadius: 2,
  },
  body: {
    justifyContent: "space-between",
    backgroundColor: "lavender",
    height: 680,
    padding: 10,
  },
  upcomingText: {
    color: "black",
    fontSize: 35,
    marginLeft: 10,
  },
  createBtn: {
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    height: 60,
    borderRadius: 50,
    elevation: 3,
    backgroundColor: "blue",
  },
  btnText: {
    color: "white",
  },
});
