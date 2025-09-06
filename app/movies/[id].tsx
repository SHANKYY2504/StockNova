import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, ImageBackground, Image } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const ContestScreen = () => {
  const router = useRouter();
  const params = useLocalSearchParams();

  // Parse the contests data from navigation
  const navContests = params.contests ? JSON.parse(params.contests as string) : [];

  // Additional other contests
  const otherContests = [
    {
      type: 'other',
      prize: '₹700',
      entryFee: '₹199',
      spotsLeft: '3 spots left',
      totalSpots: '5 spots',
      progress: 0.4,
      details: [
        { icon: 'trophy', value: '₹700' },
        { icon: 'percent', value: '20%' },
        { icon: 'person', value: 'Single winner' }
      ]
    },
    {
      type: 'other',
      prize: '₹840',
      entryFee: '₹399',
      spotsLeft: '1 spot left',
      totalSpots: '3 spots',
      progress: 0.66,
      details: [
        { icon: 'trophy', value: '₹840' },
        { icon: 'percent', value: '33%' },
        { icon: 'person', value: 'Single winner' }
      ]
    },
    // Add more contests as needed...
  ];

  // Combine both contest arrays
  const allContests = [...navContests, ...otherContests];

  const handleContestPress = (contest: any) => {
    router.push({
      pathname: '/prediction',
      params: {
        ...params,
        contest: JSON.stringify(contest)
      }
    });
  };

  return (
    <ImageBackground source={require('@/asset/bg.png')} style={styles.background}>
      <ScrollView style={styles.container}>
        {/* Header with dynamic data */}
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Image 
              source={{ uri: params.logo as string }} 
              style={styles.logo} 
            />
            <View>
              <Text style={styles.headerTitle}>{params.name}</Text>
              <Text style={styles.headerSubtitle}>{params.exchange}</Text>
            </View>
          </View>
          <View style={styles.timerContainer}>
            <Text style={styles.timer}>2h 23m</Text>
            <Text style={styles.timerSubtext}>Today 9:00 am</Text>
          </View>
        </View>

        {/* Price Information */}
        <View style={styles.priceContainer}>
          <Text style={styles.priceText}>{params.price}</Text>
          <Text style={[styles.changeText, { color: params.color as string }]}>
            {params.change}
          </Text>
          <Text style={styles.descriptionText}>
            {params.description}
          </Text>
        </View>

        {/* Mega Contest - Show only if exists */}
        {navContests.length > 0 && navContests[0].type === 'mega' && (
          <>
            <Text style={styles.sectionTitle}>Mega Contest</Text>
            <Pressable onPress={() => handleContestPress(navContests[0])}>
              <View style={styles.contestCard}>
                <View style={styles.contestHeader}>
                  <View>
                    <Text style={styles.labelText}>Prize Pool</Text>
                    <Text style={styles.prizeText}>{navContests[0].prize}</Text>
                  </View>
                  <View style={styles.entryContainer}>
                    <Text style={styles.labelText}>Entry</Text>
                    <View style={styles.entryButton}>
                      <Text style={styles.entryFeeText}>{navContests[0].entryFee}</Text>
                    </View>
                  </View>
                </View>
                
                <View style={styles.progressContainer}>
                  <View style={styles.progressBar}>
                    <View style={[styles.progressFill, { width: `${navContests[0].progress * 100}%` }]} />
                  </View>
                  <View style={styles.spotsContainer}>
                    <Text style={styles.spotsLeftText}>{navContests[0].spotsLeft}</Text>
                    <Text style={styles.totalSpotsText}>{navContests[0].totalSpots}</Text>
                  </View>
                </View>
                
                <View style={styles.detailsContainer}>
                  {navContests[0].details.map((detail: any, idx: number) => (
                    <View key={idx} style={styles.detailItem}>
                      <Ionicons name={detail.icon as any} size={16} color="#8E8E8E" style={styles.detailIcon} />
                      <Text style={styles.detailText}>{detail.value}</Text>
                    </View>
                  ))}
                </View>
              </View>
            </Pressable>
          </>
        )}

        {/* Other Contests - Show all remaining contests */}
        <Text style={styles.sectionTitle}>Other Contests</Text>
        {allContests
          .filter(contest => contest.type !== 'mega')
          .map((contest: any, index: number) => (
            <Pressable key={index} onPress={() => handleContestPress(contest)}>
              <View style={styles.contestCard}>
                <View style={styles.contestHeader}>
                  <View>
                    <Text style={styles.labelText}>Prize Pool</Text>
                    <Text style={styles.prizeText}>{contest.prize}</Text>
                  </View>
                  <View style={styles.entryContainer}>
                    <Text style={styles.labelText}>Entry</Text>
                    <View style={styles.entryButton}>
                      <Text style={styles.entryFeeText}>{contest.entryFee}</Text>
                    </View>
                  </View>
                </View>
                
                <View style={styles.progressContainer}>
                  <View style={styles.progressBar}>
                    <View style={[styles.progressFill, { width: `${contest.progress * 100}%` }]} />
                  </View>
                  <View style={styles.spotsContainer}>
                    <Text style={styles.spotsLeftText}>{contest.spotsLeft}</Text>
                    <Text style={styles.totalSpotsText}>{contest.totalSpots}</Text>
                  </View>
                </View>
                
                <View style={styles.detailsContainer}>
                  {contest.details.map((detail: any, idx: number) => (
                    <View key={idx} style={styles.detailItem}>
                      <Ionicons name={detail.icon as any} size={16} color="#8E8E8E" style={styles.detailIcon} />
                      <Text style={styles.detailText}>{detail.value}</Text>
                    </View>
                  ))}
                </View>
              </View>
            </Pressable>
          ))}
      </ScrollView>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#0A0A14',
  },
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 12,
    borderRadius: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#8E8E8E',
  },
  timerContainer: {
    alignItems: 'flex-end',
  },
  timer: {
    fontSize: 18,
    color: '#FF3B30',
    fontWeight: 'bold',
  },
  timerSubtext: {
    fontSize: 12,
    color: '#8E8E8E',
  },
  priceContainer: {
    backgroundColor: '#19222B',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    alignItems: 'center',
  },
  priceText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
  },
  changeText: {
    fontSize: 16,
    fontWeight: '500',
    marginVertical: 4,
  },
  descriptionText: {
    fontSize: 14,
    color: '#8E8E8E',
    textAlign: 'center',
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginVertical: 16,
  },
  contestCard: {
    backgroundColor: '#121821',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  contestHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  labelText: {
    fontSize: 12,
    color: '#8E8E8E',
    marginBottom: 4,
  },
  prizeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  entryContainer: {
    alignItems: 'flex-end',
  },
  entryButton: {
    backgroundColor: '#32CD32',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  entryFeeText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  progressContainer: {
    marginBottom: 12,
  },
  progressBar: {
    height: 4,
    backgroundColor: '#2A3A4A',
    borderRadius: 2,
    overflow: 'hidden',
    marginBottom: 4,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#FF3B30',
  },
  spotsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  spotsLeftText: {
    fontSize: 12,
    color: '#FF3B30',
    fontWeight: '500',
  },
  totalSpotsText: {
    fontSize: 12,
    color: '#8E8E8E',
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
    marginVertical: 4,
  },
  detailIcon: {
    marginRight: 4,
  },
  detailText: {
    fontSize: 12,
    color: '#8E8E8E',
  },
});

export default ContestScreen;