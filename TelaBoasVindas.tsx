import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from './App'; // Ajuste o caminho conforme necessário

type BoasVindasScreenNavigationProp = StackNavigationProp<RootStackParamList, 'BoasVindas'>;
type BoasVindasScreenRouteProp = RouteProp<RootStackParamList, 'BoasVindas'>;

type Props = {
  navigation: BoasVindasScreenNavigationProp;
  route: BoasVindasScreenRouteProp;
};

const TelaBoasVindas: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/logo.png')} style={styles.logo} />
      <Text style={styles.welcomeText}>Ola! Bem vindo</Text>
      <Text style={styles.subtitleText}>Crie ou participe de leilões usando blockchain</Text>
      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Adicione sua Carteira Cripto</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={styles.skipText}>Pular</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 40,
  },
  welcomeText: {
    color: '#ffffff',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitleText: {
    color: '#888888',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 180,
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 40,
    width: '100%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#03DAC6',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#000000',
    fontSize: 18,
    textAlign: 'center',
  },
  skipText: {
    color: '#BB86FC',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default TelaBoasVindas;
