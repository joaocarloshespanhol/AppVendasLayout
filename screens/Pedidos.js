import React, { useState } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView} from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { CheckBox, Button, Icon, Input} from 'react-native-elements';
import AntDesign from 'react-native-vector-icons/AntDesign';

const data = [
  { label: 'Supermercado Moreira Ltda', value: '1' },
  { label: 'Supermercado Avistão', value: '2' },
  { label: 'Merecearia do Le ME', value: '3' },
  { label: 'MiniBox Santa Clara', value: '4' },
  { label: 'Mercearia Pague Menos', value: '5' },
  { label: 'Varejão Irmãos Cristalenses', value: '6' },
  { label: 'Varejão Coisa Nossa', value: '7' },
  { label: 'Varejão Souza Lima 3', value: '8' },
];

const Pedidos = () => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [isSelected, setSelected] = useState(false);
  const [produtos, setProdutos] = useState(null)

  const salvar = () => {
    console.log("Salvou")
  }

  
  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: 'blue' }]}>
        </Text>
      );
    }
    return null;
  };

  return (
    <View style={styles.container}>
      {renderLabel()}
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? 'Selecione o cliente' : '...'}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.value);
          setIsFocus(false);
        }}
        renderLeftIcon={() => (
          <AntDesign
            style={styles.icon}
            color={isFocus ? 'blue' : 'black'}
            name="adduser"
            size={20}
          />
          )}
          />
        <Text>Forma de pagamento:</Text>
        <CheckBox
        title="Boleto"
        center
        checked={isSelected}
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        checkedColor='green'
        onPress={() => setSelected(!isSelected)}
        
        />

        <CheckBox
        title="Cheque"
        center
        checked={isSelected}
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        checkedColor='green'
        onPress={() => setSelected(!isSelected)}
        
        />

        <CheckBox
        title="A vista"
        center
        checked={isSelected}
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        checkedColor='green'
        onPress={() => setSelected(!isSelected)}
        
        />   

        <Text>Prazo para pagamento:</Text>
        <CheckBox
        title="7 DIAS"
        center
        checked={isSelected}
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        checkedColor='green'
        onPress={() => setSelected(!isSelected)}
        
        />

      <CheckBox
        title="15 DIAS"
        center
        checked={isSelected}
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        checkedColor='green'
        onPress={() => setSelected(!isSelected)}
        
        />
      <CheckBox
        title="30 DIAS"
        center
        checked={isSelected}
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        checkedColor='green'
        onPress={() => setSelected(!isSelected)}
        
        />

        <Text>Produtos Qtde:</Text>
        <Input
        placeholder="Arroz Maná 6x5"
        leftIcon={{type: 'font-awesome', name: ''}}
        onChangeText={value => setProdutos (value)}
        keyboardType="number-pad" 
        returnKeyType="done" />

       
      <Button
      icon={
        <Icon
        name="check"
        size={20}
        color="#DCDCDC" />
      }
      
      title="Concluir pedido"
      buttonStyle={specificStyle.button}
      onPress={() => salvar()} />

    </View>
  );
};

export default Pedidos;

  const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'white',
    padding: 16,
    justifyContent:'center',
    alignContent:'center'


  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom:20
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});

const specificStyle = StyleSheet.create({
  specificContainer: {
    backgroundColor: "#fff"
  },
  button: {
    width:"100%",
    marginTop:1
  }
});