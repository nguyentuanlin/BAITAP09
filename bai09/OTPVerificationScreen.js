import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage
import Icon from 'react-native-vector-icons/Ionicons'; // Thêm thư viện biểu tượng

const OTPVerificationScreen = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState(''); // Trạng thái để lưu số điện thoại
  const [otp, setOtp] = useState(['', '', '', '']); // Trạng thái để lưu mã OTP

  // Kiểm tra xem số điện thoại có đúng định dạng không
  const isValidPhoneNumber = (number) => {
    const phoneRegex = /^[0-9]{10,11}$/; // Định dạng cho số điện thoại (10 hoặc 11 số)
    return phoneRegex.test(number);
  };

  const handlePhoneNumberSubmit = async () => {
    if (isValidPhoneNumber(phoneNumber)) {
      try {
        // Lưu số điện thoại vào AsyncStorage
        await AsyncStorage.setItem('userPhoneNumber', phoneNumber);
        // Chuyển sang màn hình HomeScreen
        navigation.navigate('HomeScreen');
      } catch (error) {
        console.error('Error storing phone number:', error);
      }
    } else {
      Alert.alert('Invalid Phone Number', 'Please enter a valid phone number.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>OTP Verification</Text>
      <Text style={styles.instruction}>Enter your phone number to receive an OTP</Text>

      {/* Input số điện thoại */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter phone number"
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          maxLength={11} // Giới hạn số ký tự
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handlePhoneNumberSubmit}>
        <Icon name="arrow-forward-outline" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  instruction: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 8,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#333',
    padding: 10,
    alignItems: 'center',
    borderRadius: 8,
  },
});

export default OTPVerificationScreen;
