import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {TextInput, Button, Card, Text} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import Routes from '../../navigation/Routes';
import {styles} from './Style';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add your login logic here
    if (email === 'test@gmail.com' && password === '123456') {
      // alert('Login Successful');
      navigation.navigate(Routes.FINANCEINFO_SCREEN);
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <View style={styles.container}>
      <View style={{marginBottom: 20, alignItems: 'center'}}>
        <Text style={{fontSize: 23, fontWeight: 'light'}}>Welcome to</Text>
        <Text style={{fontSize: 29, fontWeight: 'bold'}}>Finance Tracker</Text>
      </View>

      <Card style={styles.card}>
        <Card.Title title="Login" />
        <Card.Content>
          <TextInput
            label="Email"
            value={email}
            onChangeText={text => setEmail(text)}
            keyboardType="email-address"
            autoCapitalize="none"
            style={styles.input}
          />
          <TextInput
            label="Password"
            value={password}
            onChangeText={text => setPassword(text)}
            secureTextEntry
            style={styles.input}
          />
          <TouchableOpacity
            onPress={() => {
              handleLogin();
            }}>
            <View style={styles.buttonLogin}>
              <Text style={{color: 'white', fontWeight: 'bold'}}>Login</Text>
            </View>
          </TouchableOpacity>
          {/* <Button
            mode="contained"
            onPress={handleLogin}
            style={styles.button}
          >
            Login
          </Button> */}
        </Card.Content>
      </Card>

      <Text
        style={{
          fontSize: 12,
          fontWeight: 'light',
          marginTop: 20,
          alignSelf: 'center',
        }}>
        V 1.1
      </Text>
    </View>
  );
};

export default LoginScreen;
