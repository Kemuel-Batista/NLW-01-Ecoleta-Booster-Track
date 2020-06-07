import React, { useEffect, useState } from 'react';
import { View, ImageBackground, Image, Text, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import { Feather } from '@expo/vector-icons'
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

import styles from './styles';

const Home = () => {
  const [uf, setUf] = useState('');
  const [city, setCity] = useState('');

  const navigation = useNavigation();
 
  function handleNavigateToPoints(){
    navigation.navigate('Points', { uf, city });
  }

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ImageBackground 
        source={require('../../assets/home-background.png')} 
        style={styles.container}
        imageStyle={{ width: 274, height: 368 }}
      >
        <View style={styles.main}>
          <Image source={require('../../assets/logo.png')} />
          <View>
            <Text style={styles.title}>Seu marketplace de coleta de resíduos</Text>
            <Text style={styles.description}>
              Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.
            </Text>
          </View>
        </View>

        <View style={styles.footer}>
          <TextInput 
            placeholder="Digite uma UF"
            style={styles.input}
            value={uf}
            onChangeText={setUf}
            autoCorrect={false}   
            maxLength={2}
            autoCapitalize="characters"  
          />

          <TextInput 
            placeholder="Digite uma Cidade"
            style={styles.input}
            value={city}
            onChangeText={setCity}
            autoCorrect={false}     
          />

          <TextInput />
          <RectButton style={styles.button} onPress={handleNavigateToPoints}>
            <View style={styles.buttonIcon}>
              <Feather name="arrow-right" size={24} color="#FFF"/>
            </View>
            <Text style={styles.buttonText}>Entrar</Text>
          </RectButton>
        </View>

      </ImageBackground>
    </KeyboardAvoidingView>
  );
}

export default Home;