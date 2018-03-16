import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  ImageBackground
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class forget extends Component<Props> {
  render() {
    return (
      
        <ImageBackground
          source={require('../img/register.jpg')} style={styles.container}
      >

            <Image
            style={{width: 300, height: 150,  marginTop: 30}}
            source={{uri: 'https://firebasestorage.googleapis.com/v0/b/jevi-9acff.appspot.com/o/logo%2Fjevi%20recortado.png?alt=media&token=71eb125b-ba71-4bdc-af9d-c876bca2d742'}}
            />
            <TextInput
            style={{height: 40, width: 300,  color: '#B1181A', marginTop: 30}}
            placeholderTextColor='#B1181A'
             underlineColorAndroid='#B1181A'
             placeholder="Correo"
            
            />
            

                <TouchableOpacity   style={styles.button}>
                    <Text style={{  color: 'white'}}>Enviar correo</Text>
                </TouchableOpacity>
                <View style={{flex: 1, flexDirection: 'row', marginTop: 30}}>
                
                <Text style={{color:'#B1181A'}}>Reenviar el correo </Text>
                
                <Text style={{color:'#B1181A'}}>|| Intentar otro metodo</Text>
                
            </View>
            <View style={{ flex: 6, flexDirection: 'row', marginTop: 30}}>
                    
                <TouchableOpacity   style={{justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 1,
                 elevation: 3,
                  height: 40,
                   width: 150, 
                    marginTop: -10,
                    backgroundColor: 'white',}}>
                    <Text style={{  color: '#B1181A'}}>Necesitas ayuda?</Text>
                </TouchableOpacity>            
            
            </View>
      
            
        </ImageBackground>
            
            
           
     
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
   
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 1,
     elevation: 3,
      height: 40,
       width: 150, 
        marginTop: 40,
        backgroundColor: '#B1181A',
        
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
