import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, KeyboardAvoidingView} from 'react-native';
import { Button, Icon, Input, Image } from 'react-native-elements';
import styles from '../style/MainStyle';

export default function Cadastro({navigation}) {

  const [razaosocial, setRazaosocial] = useState(null)
  const [nomefantasia, setNomefantasia] = useState(null)
  const [inscricaoestadual, setInscricaoestadual] = useState(null)
  const [cnpj, setCnpj] = useState(null)
  const [endereco, setEndereco] = useState(null)
  
  const salvar = () => {
    console.log("Salvou")
  }

    return (
    <KeyboardAvoidingView
    behavior={Platform.OS == 'ios' ? "padding" : "height"} 
    style={styles.container}>

      <StatusBar style="auto" />
      <Image style ={{width:120, height:120}} source={require('../assets/telainicio2.png')} />
      <Input
        placeholder="Razão Social"
        leftIcon={{type: 'font-awesome', name: 'user-plus'}}
        onChangeText={value => setRazaosocial (value)} 
        returnKeyType="done"/>

      <Input
        placeholder="Nome Fantasia"
        leftIcon={{type: 'font-awesome', name: 'user-plus'}}
        onChangeText={value => setNomefantasia (value)} 
        returnKeyType="done"/> 
        
    <Input
        placeholder="Endereço"
        leftIcon={{type: 'font-awesome', name: 'user-plus'}}
        onChangeText={value => setEndereco (value)} 
        returnKeyType="done"/>
    <Input
        placeholder="Inscrição Estadual"
        leftIcon={{type: 'font-awesome', name: 'user-plus'}}
        onChangeText={value => setInscricaoestadual (value)}
        keyboardType="number-pad" 
        returnKeyType="done"/>

    <Input
        placeholder="CNPJ"
        leftIcon={{type: 'font-awesome', name: 'user-plus'}}
        onChangeText={value => setCnpj (value)}
        keyboardType="number-pad"  
        returnKeyType="done"/>

    
      <Button
      icon={
        <Icon
        name="check"
        size={20}
        color="#DCDCDC" />
      }
      
      title="Salvar"
      buttonStyle={specificStyle.button}
      onPress={() => salvar()} />
    </KeyboardAvoidingView>
  );
}

const specificStyle = StyleSheet.create({
  specificContainer: {
    backgroundColor: "#fff"
  },
  button: {
    width:"100%",
    marginTop:1
  }
});