import React from "react";
import { View, Text, StyleSheet, ScrollView, Image, ImageBackground } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const data = [
  {
    id: "1",
    type: "Active",
    pricePool: "₹ 5000",
    do: "23,470",
    dl: "23,400",
    dc: "23,820",
    dh: "23,970",
  },
  {
    id: "2",
    type: "Previous",
    pricePool: "₹ 5000",
    do: "23,155",
    dl: "23,005",
    dc: "23,310",
    dh: "23,500",
  },
  {
    id: "3",
    type: "Previous",
    pricePool: "₹ 2000",
    do: "23,155",
    dl: "23,005",
    dc: "23,310",
    dh: "23,500",
  },
];

const EntryCard = ({ entry, isActive }) => (
  <LinearGradient
    colors={["#19222B", "#19222B"]}
    style={[styles.card, isActive && styles.activeCard]}
  >
    <View style={styles.cardContent}>
      <Image source={require("@/asset/nifty50.png")} style={styles.image} />
      <View style={styles.textContent}>
        <Text style={styles.title}>NIFTY 50</Text>
        <Text style={styles.pricePool}>Prize Pool: {entry.pricePool}</Text>
        <View style={styles.row}>
          <Text style={styles.label}>DO: {entry.do}</Text>
          <Text style={styles.label}>DL: {entry.dl}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>DC: {entry.dc}</Text>
          <Text style={styles.label}>DH: {entry.dh}</Text>
        </View>
      </View>
    </View>
  </LinearGradient>
);

export default function App() {
  return (
    <ImageBackground source={require("@/asset/bg.png")} style={styles.background}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Header */}
        <View style={styles.header}>
          <Ionicons name="person-outline" size={24} color="white" />
          <Text style={styles.headerTitle}>
            <Text style={{ color: "red" }}>e</Text>dart
          </Text>
          <Ionicons name="menu-outline" size={24} color="white" />
        </View>
        <View style={styles.container}>
          <Text style={styles.heading}>Active Entries</Text>
          {data.filter((item) => item.type === "Active").map((item) => (
            <EntryCard key={item.id} entry={item} isActive={true} />
          ))}
          <Text style={styles.heading}>Previous Entries</Text>
          {data.filter((item) => item.type === "Previous").map((item) => (
            <EntryCard key={item.id} entry={item} isActive={false} />
          ))}
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  scrollContainer: {
    paddingHorizontal: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#0D161F",
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
    fontStyle: "italic",
  },
  container: {
    flex: 1,
  },
  heading: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    paddingLeft: 10,
  },
  card: {
    padding: 15,
    borderRadius: 15,
    marginBottom: 15,
    width: "100%",
    backgroundColor: "#19222B",
  },
  activeCard: {
    borderColor: "#007AFF",
    borderWidth: 2,
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  textContent: {
    flex: 1,
  },
  title: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  pricePool: {
    color: "#ff5555",
    fontSize: 14,
    marginBottom: 5,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  label: {
    color: "#ccc",
    fontSize: 14,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
});
