import React from "react";
import {
  View,
  Text,
  ImageBackground,
  Pressable,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function WalletScreen() {
  const router = useRouter();

  return (
    <ImageBackground source={require("@/asset/bg.png")} style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
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
          <Pressable onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color="white" />
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
          <View style={{ width: 24 }} />
        </View>

        {/* Wallet Info */}
        <View
          style={{
            margin: 15,
            padding: 20,
            backgroundColor: "#0D161F",
            borderRadius: 10,
            borderWidth: 1,
            borderColor: "#ffffff33",
          }}
        >
          <Text style={{ color: "white" }}>
            Hi <Text style={{ fontWeight: "bold" }}>William</Text>, your wallet balance is
          </Text>
          <Text style={{
            fontSize: 32,
            fontWeight: "bold",
            color: "white",
            marginVertical: 5,
          }}>
            ₹2,000.00
          </Text>
          <Text style={{ color: "#999" }}>
            Total Amount won so far = <Text style={{ color: "#4CAF50" }}>₹520.59</Text>
          </Text>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 20,
            }}
          >
            <Pressable
              style={{
                flex: 1,
                backgroundColor: "white",
                padding: 10,
                borderRadius: 5,
                alignItems: "center",
                marginRight: 10,
              }}
            >
              <Text style={{ color: "black" }}>Add to Wallet</Text>
            </Pressable>

            <Pressable
              style={{
                flex: 1,
                backgroundColor: "white",
                padding: 10,
                borderRadius: 5,
                alignItems: "center",
              }}
            >
              <Text style={{ color: "black" }}>Withdraw</Text>
            </Pressable>
          </View>
        </View>

        {/* Transaction History */}
        <ScrollView style={{ paddingHorizontal: 15 }}>
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: 16,
              marginBottom: 10,
            }}
          >
            Transaction history
          </Text>

          {[
            {
              date: "2 Jan, 2025",
              time: "11:41 AM",
              type: "Credit",
              amount: "+Rs. 200.00",
              color: "#4CAF50",
            },
            {
              date: "31 Dec, 2024",
              time: "12:00 AM",
              type: "Reward",
              amount: "+Rs. 250.00",
              color: "#B388FF",
            },
            {
              date: "25 Dec, 2024",
              time: "3:18 PM",
              type: "Credit",
              amount: "+Rs. 1,000.00",
              color: "#4CAF50",
            },
            {
              date: "24 Dec, 2024",
              time: "8:46 PM",
              type: "Debit",
              amount: "-Rs. 519.00",
              color: "#F44336",
            },
          ].map((item, index) => (
            <View
              key={index}
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 10,
                borderBottomWidth: 1,
                borderBottomColor: "#333",
                paddingBottom: 5,
              }}
            >
              <View>
                <Text style={{ color: "white" }}>{item.date}</Text>
                <Text style={{ color: "#aaa", fontSize: 12 }}>{item.time}</Text>
              </View>
              <Text style={{ color: "white" }}>{item.type}</Text>
              <Text style={{ color: item.color }}>{item.amount}</Text>
            </View>
          ))}
          <Text style={{ color: "#999", textAlign: "right", marginTop: 10 }}>see more...</Text>
        </ScrollView>
      </View>
    </ImageBackground>
  );
}
