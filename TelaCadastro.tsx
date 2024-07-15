import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView, Image, Alert, GestureResponderEvent } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from './App';
import { ethers } from 'ethers';
//import WalletConnectProvider from "@walletconnect/web3-provider";
import { StackNavigationProp } from '@react-navigation/stack';

type CadastroScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Cadastro'>;

const TelaCadastro: React.FC = () => {
  const [rememberMe, setRememberMe] = useState(false);
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const navigation = useNavigation<CadastroScreenNavigationProp>();
  function connectWallet(event: GestureResponderEvent): void {
    throw new Error('Function not implemented.');
  }

/*
  const connectWallet = async () => {
    try {
      const provider = new WalletConnectProvider({
        rpc: {
          1: "https://mainnet.infura.io/v3/4db3cd7e919344b5a2b6bc8440fce1af"
        },
        bridge: "https://bridge.walletconnect.org",
        qrcode: true,
      });

      await provider.enable();

      const web3Provider = new ethers.providers.Web3Provider(provider);
      const accounts = await web3Provider.listAccounts();
      setWalletAddress(accounts[0]);
    } catch (error) {
      console.error("Erro ao conectar com a carteira", error);
      Alert.alert("Erro", "Não foi possível conectar com a carteira. Por favor, tente novamente.");
    }
  };
*/
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Image
          source={require('./assets/logo.png')}
          style={styles.logo}
        />
        <TextInput 
          placeholder="Nome completo" 
          placeholderTextColor="#888" 
          style={styles.input} 
        />
        <TextInput 
          placeholder="Endereço de email" 
          placeholderTextColor="#888" 
          style={styles.input} 
          keyboardType="email-address" 
        />
        <TextInput 
          placeholder="Telefone Celular" 
          placeholderTextColor="#888" 
          style={styles.input} 
          keyboardType="phone-pad" 
        />
        <TextInput 
          placeholder="CPF" 
          placeholderTextColor="#888" 
          style={styles.input} 
          keyboardType="numeric" 
        />
        <TextInput 
          placeholder="Senha" 
          placeholderTextColor="#888" 
          style={styles.input} 
          secureTextEntry 
        />
        <TextInput 
          placeholder="Confirme sua senha" 
          placeholderTextColor="#888" 
          style={styles.input} 
          secureTextEntry 
        />
        <TouchableOpacity 
          style={styles.checkboxContainer} 
          onPress={() => setRememberMe(!rememberMe)}
        >
          <View style={[styles.checkbox, rememberMe && styles.checkboxChecked]} />
          <Text style={styles.checkboxLabel}>Lembrar-me</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={connectWallet}>
          <Text style={styles.buttonText}>Adicione sua Carteira Cripto</Text>
        </TouchableOpacity>
        {walletAddress && <Text style={styles.address}>Endereço da Carteira: {walletAddress}</Text>}
        <TouchableOpacity style={styles.skipButton} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.skipButtonText}>Pular</Text>
        </TouchableOpacity>
        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>Já tem uma conta? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.loginLink}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#000',
  },
  container: {
    width: '100%',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 30,
  },
  input: {
    backgroundColor: '#222',
    color: '#fff',
    padding: 15,
    marginVertical: 10,
    borderRadius: 5,
    width: '100%',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  checkbox: {
    width: 20,
    height: 20,
    backgroundColor: '#222',
    borderColor: '#888',
    borderWidth: 1,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxChecked: {
    backgroundColor: '#03DAC6',
  },
  checkboxLabel: {
    color: '#fff',
  },
  button: {
    backgroundColor: '#03DAC6',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 20,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  address: {
    color: '#fff',
    marginTop: 20,
  },
  skipButton: {
    marginTop: 20,
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  skipButtonText: {
    color: '#BB86FC',
    fontSize: 18,
  },
  loginContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  loginText: {
    color: '#fff',
    textAlign: 'center',
  },
  loginLink: {
    color: '#BB86FC',
    textAlign: 'center',
  },
});

export default TelaCadastro;
