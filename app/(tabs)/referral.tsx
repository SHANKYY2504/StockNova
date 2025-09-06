import React from 'react';
import { View, Text, ScrollView, ImageBackground, StyleSheet, Image, TouchableOpacity, Share } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

const SavedScreen = () => {
  const handleInvite = async () => {
    try {
      await Share.share({
        message: 'Join this amazing contest and earn rewards! Use my referral link: https://example.com/referral',
      });
    } catch (error) {
      console.log('Error sharing:', error);
    }
  };

  return (
    <ImageBackground source={require("@/asset/bg.png")} style={styles.background}>
      <ScrollView style={styles.container}>
        
        {/* Header */}
        <View style={styles.header}>
          <Ionicons name="person-outline" size={24} color="white" />
          <Text style={styles.brand}>
            <Text style={{ color: "red" }}>e</Text>dart
          </Text>
          <Ionicons name="menu-outline" size={24} color="white" />
        </View>

        {/* Referral Card */}
        <View style={styles.card}>
          <Image source={require('@/asset/refer1.png')} style={styles.image} />
          <TouchableOpacity style={styles.inviteButton} onPress={handleInvite}>
            <Text style={styles.inviteText}>Send Invite Link</Text>
          </TouchableOpacity>
        </View>

        {/* How It Works */}
        <Text style={styles.heading}>How does it work?</Text>
        <Text style={styles.description}>
          Invite your friends through any social media platform and become their parent referrer. 
          Whenever they win a contest, you will earn a share of 5% of the total prize pool, 
          proportional to the winner’s prize amount. The more users you refer, the higher 
          your chances of earning referral rewards.
        </Text>

      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#0D161F",
  },
  brand: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
    fontStyle: "italic",
  },
  card: {
    backgroundColor: '#0D161F',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    margin: 20,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  inviteButton: {
    backgroundColor: '#55C586',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  inviteText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  heading: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  description: {
    color: '#B0B0B0',
    textAlign: 'center',
    marginHorizontal: 20,
    marginTop: 10,
  },
});

export default SavedScreen;

