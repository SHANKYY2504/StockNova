import { View, Image, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";

const HomeIcon = require("@/asset/Home.png"); 
const TradeIcon = require("@/asset/Trade.png"); 
const ReferralIcon = require("@/asset/Referral.png"); 

const layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#0D161F",
          borderTopWidth: 0,
          height: 70,
          marginHorizontal: 20,
          marginBottom: 20,
          borderRadius: 35, 
          paddingHorizontal: 15,
          position: "absolute", 
          elevation: 5, 
          shadowColor: "#000", 
          shadowOpacity: 0.2,
          shadowOffset: { width: 0, height: 5 },
          shadowRadius: 10,
        },
        tabBarActiveTintColor: "#FFFFFF",
        tabBarInactiveTintColor: "#666A72",
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "bold",
        },
      }}
    >
      <Tabs.Screen
        name="trade"
        options={{
          title: "My Trade",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={TradeIcon}
              style={{
                width: 20,
                height: 20,
                tintColor: focused ? "#FFFFFF" : "#666A72",
              }}
            />
          ),
        }}
      />

   

<Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={HomeIcon}
              style={{
                width: 20,
                height: 20,
                tintColor: focused ? "#FFFFFF" : "#666A72",
              }}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="referral"
        options={{
          title: "Referral",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={ReferralIcon}
              style={{
                width: 20,
                height: 20,
                tintColor: focused ? "#FFFFFF" : "#666A72",
              }}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default layout;
