import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, KeyboardAvoidingView} from 'react-native';
import { Button, Icon, Input, Image } from 'react-native-elements';
import styles from '../style/MainStyle';

export default function Login({navigation}) {

  const [user, setUser] = useState(null)
  const [password, setPassword] = useState(null)



  const cadastrar = () => {
    navigation.navigate("Cadastro")
  }

  const pedidos = () => {
    navigation.navigate("Pedidos")
  }

  return (
    <KeyboardAvoidingView
    behavior={Platform.OS == 'ios' ? "padding" : "height"} 
    style={styles.container}>

      <StatusBar style="auto" />
      <Image style ={{width:180, height:180}} source={require('../assets/telainicio2.png')} />
      <Input
        placeholder="Usuario"
        leftIcon={{type: 'font-awesome', name: 'user'}}
        onChangeText={value => setUser (value)} 
        returnKeyType="done"/>

      <Input
        placeholder="Senha"
        leftIcon={{type: 'font-awesome', name: 'lock'}}
        onChangeText={value => setPassword (value)}
        secureTextEntry={true}
        returnKeyType="done"/>
      
      <Button
      icon={
        <Icon
        name="check"
        size={20}
        color="#DCDCDC" />
      }
      
      title="Entrar"
      buttonStyle={specificStyle.button}
      onPress={() => pedidos()} /> 
    
    <Button
      icon={
        <Icon
        name="check"
        size={20}
        color="#DCDCDC" />
      }
      
      title="Cadastrar Cliente"
      buttonStyle={specificStyle.button}
      onPress={() => cadastrar()} />

    </KeyboardAvoidingView>
  );
}

const specificStyle = StyleSheet.create({
  specificContainer: {
    backgroundColor: "#fff"
  },
  button: {
    width:"100%",
    marginTop: 10
  }
})