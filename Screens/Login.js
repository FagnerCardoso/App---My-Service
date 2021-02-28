
import React, { useState } from 'react';
import {  View } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../style/MainStyle';

export default function Login({navigation}) {

  const[email, setEmail] = useState(null)
  const[password, setPassword] = useState(null)

  const entrar = () =>{
    navigation.reset({
        index: 0,
        routes: [{name: "Home"}]
    })
  
  }

  return (
    <View style={styles.container} >
    <Text h1>My Service</Text>
    <Input
   placeholder="E-mail:"
   leftIcon={{ type: 'font-awesome', name: 'envelope' }}
   onChangeText={value => setEmail(value)}
   keyboardType="email-address"
  />
   <Input
   placeholder="Senha:"
   leftIcon={{ type: 'font-awesome', name: 'key' }}
   onChangeText={value => setPassword(value)}
   secureTextEntry={true}
/>
<Button
  icon={
    <Icon
      name="check"
      size={15}
      color="white"
    />
  }
  title="Login"
  onPress={() => entrar()}
/>
    </View>
  );
}


