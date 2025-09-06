import React from "react";
import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from "react-native";

export default function AccountSidebar() {
  return (
    <ImageBackground source={require("@/asset/bg.png")} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Profile */}
        <View style={styles.profileContainer}>
          <Image
            source={require("@/asset/winner1.png")} 
            style={styles.profileImage}
          />
          <View style={styles.textContainer}>
            <Text style={styles.name}>William Conor</Text>
            <Text style={styles.email}>williamconor10@gmail.com</Text>
          </View>
        </View>

        {/* Menu Options */}
        <View style={styles.menuContainer}>
          {["My Info", "Settings", "Help & Support", "How to play", "Terms of service", "Logout"].map((item, index) => (
            <Pressable key={index} style={styles.menuItem}>
              <Text style={styles.menuText}>{item}</Text>
            </Pressable>
          ))}
        </View>

        {/* Logo */}
        <View style={styles.logoContainer}>
          <Text style={styles.logo}>
            <Text style={{ color: "red", fontStyle: "italic" }}>e</Text>
            <Text style={{ fontStyle: "italic" }}>dart</Text>
          </Text>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D161F",
  },
  scrollContainer: {
    flexGrow: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    justifyContent: "space-between",
  },
  profileContainer: {
    alignItems: "center",
    marginBottom: 30,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 10,
  },
  textContainer: {
    alignItems: "center",
  },
  name: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
  email: {
    color: "#aaa",
    fontSize: 12,
  },
  menuContainer: {
    marginTop: 20,
  },
  menuItem: {
    paddingVertical: 15,
  },
  menuText: {
    color: "white",
    fontSize: 16,
  },
  logoContainer: {
    marginTop: 40,
    alignItems: "center",
  },
  logo: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
  },
});
