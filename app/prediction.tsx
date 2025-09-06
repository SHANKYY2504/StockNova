import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, ImageBackground, StatusBar } from 'react-native';
import { Stack } from 'expo-router';

const PredictionScreen = () => {
  return (
    <>
      <StatusBar translucent backgroundColor="transparent" />
      <Stack.Screen options={{ headerShown: false }} />
      <ImageBackground 
        source={require('@/asset/bg.png')} 
        style={styles.background}
        imageStyle={styles.backgroundImage}
      >
        <View style={styles.contentContainer}>
          {/* Added top padding to shift content down */}
          <View style={styles.topPadding}></View>
          
          {/* Header Section */}
          <View style={styles.header}>
            <Image source={require('@/asset/nifty50.png')} style={styles.niftyLogo} />
            <View style={styles.headerTextContainer}>
              <Text style={styles.niftyText}>NIFTY 50</Text>
              <Text style={styles.nseText}>NSE</Text>
            </View>
            <View style={styles.timerContainer}>
              <Text style={styles.timer}>2h 23m</Text>
              <Text style={styles.timeLabel}>Today 9:00 am</Text>
            </View>
          </View>

          {/* Prize Pool Section */}
          <View style={styles.prizeSection}>
            <Text style={styles.prizeText}>Prize Pool</Text>
            <Text style={styles.prizeAmount}>₹10,000</Text>
            <Text style={styles.entryFee}>Entry ₹5</Text>
            <View style={styles.progressBarContainer}>
              <View style={styles.progressBar} />
            </View>
            <Text style={styles.spotsLeft}>327 spots left</Text>
          </View>

          {/* Input Sections */}
          <View style={styles.inputContainer}>
            <View style={styles.inputBox}>
              <Text style={styles.inputLabel}>DAY OPEN</Text>
              <TextInput 
                style={styles.input} 
                placeholder='Enter Value' 
                placeholderTextColor="#AAA" 
                keyboardType="numeric"
              />
            </View>
            <View style={styles.inputBox}>
              <Text style={styles.inputLabel}>DAY LOW</Text>
              <TextInput 
                style={styles.input} 
                placeholder='Enter Value' 
                placeholderTextColor="#AAA" 
                keyboardType="numeric"
              />
            </View>
          </View>
          
          <View style={styles.inputContainer}>
            <View style={styles.inputBox}>
              <Text style={styles.inputLabel}>DAY CLOSE</Text>
              <TextInput 
                style={styles.input} 
                placeholder='Enter Value' 
                placeholderTextColor="#AAA" 
                keyboardType="numeric"
              />
            </View>
            <View style={styles.inputBox}>
              <Text style={styles.inputLabel}>DAY HIGH</Text>
              <TextInput 
                style={styles.input} 
                placeholder='Enter Value' 
                placeholderTextColor="#AAA" 
                keyboardType="numeric"
              />
            </View>
          </View>

          {/* Proceed Button */}
          <TouchableOpacity style={styles.proceedButton}>
            <Text style={styles.proceedText}>PROCEED TO PAY</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  contentContainer: {
    flex: 1,
    padding: 20,
  },
  topPadding: {
    height: 20, // Adjust this value to control how much content is shifted down
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  niftyLogo: {
    width: 40,
    height: 40,
  },
  headerTextContainer: {
    flex: 1,
    marginLeft: 10,
  },
  niftyText: {
    fontSize: 20,
    color: '#FFF',
    fontWeight: 'bold',
  },
  nseText: {
    color: '#AAA',
    fontSize: 12,
  },
  timerContainer: {
    alignItems: 'flex-end',
  },
  timer: {
    color: '#FF3B30',
    fontSize: 18,
    fontWeight: 'bold',
  },
  timeLabel: {
    color: '#AAA',
    fontSize: 12,
  },
  prizeSection: {
    backgroundColor: '#121821',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  prizeText: {
    color: '#8E8E8E',
    fontSize: 12,
  },
  prizeAmount: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  entryFee: {
    color: '#FFF',
    fontSize: 14,
  },
  progressBarContainer: {
    width: '100%',
    height: 4,
    backgroundColor: '#2A3A4A',
    borderRadius: 2,
    marginVertical: 10,
    overflow: 'hidden',
  },
  progressBar: {
    width: '90%',
    height: '100%',
    backgroundColor: '#FF3B30',
  },
  spotsLeft: {
    color: '#FF3B30',
    fontSize: 12,
    fontWeight: '500',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  inputBox: {
    width: '48%',
    backgroundColor: '#121821',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  inputLabel: {
    color: '#FFF',
    fontSize: 12,
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#1E2833',
    color: '#FFF',
    width: '100%',
    height: 40,
    textAlign: 'center',
    borderRadius: 5,
    padding: 0,
  },
  proceedButton: {
    backgroundColor: '#32CD32',
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  proceedText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PredictionScreen;