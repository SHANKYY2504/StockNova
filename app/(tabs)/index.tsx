import React from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  ScrollView,
  ImageBackground,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Link,useRouter } from "expo-router";

const Index = [
  {
    id: "1",
    logo: require("@/asset/nifty50.png"),
    name: "NIFTY 50",
    exchange: "NSE",
    price: "23,742.90",
    change: "+981.0 (0.41%)",
    color: "#4CAF50",
    description: "India's benchmark stock index representing 50 large companies",
    contests: [
      {
        type: "mega",
        prize: "₹10,000",
        entryFee: "₹5",
        spotsLeft: "327 spots left",
        totalSpots: "3000 spots",
        progress: 0.3,
        details: [
          { icon: "trophy", value: "₹5000" },
          { icon: "percent", value: "70%" },
          { icon: "people", value: "Upto 10 winners" },
        ],
      },
    ],
  },
  {
    id: "2",
    logo: require("@/asset/sensex.png"),
    name: "SENSEX",
    exchange: "BSE",
    price: "78,507.41",
    change: "+368.40 (0.47%)",
    color: "#4CAF50",
    description: "Bombay Stock Exchange's benchmark index of 30 stocks",
    contests: [
      {
        type: "mega",
        prize: "₹8,000",
        entryFee: "₹4",
        spotsLeft: "250 spots left",
        totalSpots: "2000 spots",
        progress: 0.4,
        details: [
          { icon: "trophy", value: "₹4000" },
          { icon: "percent", value: "60%" },
          { icon: "people", value: "Upto 8 winners" },
        ],
      },
    ],
  },
  {
    id: "3",
    logo: require("@/asset/banknifty.png"),
    name: "BANK-NIFTY",
    exchange: "NSE",
    price: "51,060.60",
    change: "+200.40 (0.39%)",
    color: "#4CAF50",
    description: "Index representing the performance of banking sector",
    contests: [
      {
        type: "mega",
        prize: "₹12,000",
        entryFee: "₹6",
        spotsLeft: "400 spots left",
        totalSpots: "2500 spots",
        progress: 0.25,
        details: [
          { icon: "trophy", value: "₹6000" },
          { icon: "percent", value: "75%" },
          { icon: "people", value: "Upto 12 winners" },
        ],
      },
    ],
  },
  {
    id: "4",
    logo: require("@/asset/midcap.png"),
    name: "MIDCAP-NIFTY",
    exchange: "NSE",
    price: "12,934.75",
    change: "+27.45 (0.21%)",
    color: "#4CAF50",
    description: "Index representing mid-cap companies in India",
    contests: [
      {
        type: "mega",
        prize: "₹6,000",
        entryFee: "₹3",
        spotsLeft: "200 spots left",
        totalSpots: "1500 spots",
        progress: 0.5,
        details: [
          { icon: "trophy", value: "₹3000" },
          { icon: "percent", value: "50%" },
          { icon: "people", value: "Upto 6 winners" },
        ],
      },
    ],
  },
];

const winnersData = [
  {
    id: "1",
    name: "M. Ziyad U",
    prize: "Rs. 10,000",
    image: require("@/asset/winner1.png"),
  },
  {
    id: "2",
    name: "M. Ziyad U",
    prize: "Rs. 8,000",
    image: require("@/asset/winner1.png"),
  },
  {
    id: "3",
    name: "M. Ziyad U",
    prize: "Rs. 6,000",
    image: require("@/asset/winner1.png"),
  },
  {
    id: "4",
    name: "M. Ziyad U",
    prize: "Rs. 10,000",
    image: require("@/asset/winner1.png"),
  },
  {
    id: "5",
    name: "M. Ziyad U",
    prize: "Rs. 8,000",
    image: require("@/asset/winner1.png"),
  },
  {
    id: "6",
    name: "M. Ziyad U",
    prize: "Rs. 6,000",
    image: require("@/asset/winner1.png"),
  },
];

export default function App() {

  const router = useRouter();
  return (
    <ImageBackground source={require("@/asset/bg.png")} style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        {/* Header */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 15,
            backgroundColor: "#0D161F",
          }}
        >
          <Pressable onPress={()=> router.push ("/sidenav")}>

          <Ionicons name="person-outline" size={24} color="white" />
          </Pressable>
          
          <Text
            style={{
              fontSize: 22,
              fontWeight: "bold",
              color: "white",
              fontStyle: "italic",
            }}
          >
            <Text style={{ color: "red" }}>e</Text>dart
          </Text>
          <Pressable onPress={() => router.push("/menu")}>
            <Ionicons name="menu-outline" size={24} color="white" />
          </Pressable>
        </View>

        {/* Greeting */}
        <View style={{ padding: 20 }}>
          <Text style={{ fontSize: 18, color: "white" }}>
            Hello <Text style={{ fontWeight: "bold" }}>William</Text>,
          </Text>
          <Text style={{ fontSize: 16, color: "gray" }}>
            Predict your Index
          </Text>
        </View>

        {/* Index Cards with Navigation */}
        {Index.map((item) => (
          <Link
            key={item.id}
            href={{
              pathname: "/movies/[id]",
              params: { 
                ...item,
                logo: item.logo.toString(), // Convert image to string
                contests: JSON.stringify(item.contests) // Stringify array
              },
            }}
            asChild
          >
            <Pressable>
              <View
                style={{
                  backgroundColor: "#19222B",
                  margin: 10,
                  borderRadius: 10,
                  padding: 15,
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image
                    source={item.logo}
                    style={{ width: 30, height: 30, marginRight: 10 }}
                  />
                  <View>
                    <Text style={{ color: "white", fontSize: 16 }}>
                      {item.name}
                    </Text>
                    <Text style={{ color: "gray", fontSize: 14 }}>
                      {item.exchange}
                    </Text>
                  </View>
                  <View style={{ marginLeft: "auto", alignItems: "flex-end" }}>
                    <Text style={{ color: "white", fontSize: 16 }}>
                      {item.price}
                    </Text>
                    <Text style={{ color: item.color, fontSize: 14 }}>
                      {item.change}
                    </Text>
                  </View>
                </View>
              </View>
            </Pressable>
          </Link>
        ))}

        {/* Winners Section */}
        <Text
          style={{
            fontSize: 18,
            color: "white",
            textAlign: "center",
            marginTop: 20,
          }}
        >
          Our Winners
        </Text>
        <FlatList
          data={winnersData}
          horizontal
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 10, paddingVertical: 15 }}
          renderItem={({ item }) => (
            <View style={{ alignItems: "center", marginHorizontal: 15 }}>
              <Image
                source={item.image}
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 40,
                  borderWidth: 3,
                  borderColor: "white",
                }}
              />
              <Text style={{ color: "white", fontSize: 14, marginTop: 5 }}>
                {item.name}
              </Text>
              <Text style={{ color: "yellow", fontSize: 14 }}>
                {item.prize}
              </Text>
            </View>
          )}
        />
      </ScrollView>
    </ImageBackground>
  );
}