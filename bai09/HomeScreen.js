import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage

const HomeScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState(''); // Trạng thái để lưu số điện thoại đã đăng nhập

  useEffect(() => {
    // Lấy số điện thoại từ AsyncStorage khi màn hình được hiển thị
    const loadPhoneNumber = async () => {
      try {
        const storedPhoneNumber = await AsyncStorage.getItem('userPhoneNumber');
        if (storedPhoneNumber) {
          setPhoneNumber(storedPhoneNumber);
        }
      } catch (error) {
        console.error('Error loading phone number:', error);
      }
    };

    loadPhoneNumber();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to HomeScreen</Text>
      <Text style={styles.phoneNumber}>Logged in with: {phoneNumber}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  phoneNumber: {
    fontSize: 18,
    color: '#333',
  },
});

export default HomeScreen;
