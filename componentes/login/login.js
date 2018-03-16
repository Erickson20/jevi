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
export default class login extends Component<Props> {
  render() {
    return (
      
      <ImageBackground
          source={require('../img/fondo.jpg')} style={styles.container}
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
            <TextInput
            style={{height: 40, width: 300,  color: '#B1181A', marginTop: 30}}
            placeholderTextColor='#B1181A'
             underlineColorAndroid='#B1181A'
             placeholder="Contraseña"
             secureTextEntry={true}
            />
             
            <View style={{flex: 1, flexDirection: 'row'}}>
                <TouchableOpacity   style={styles.button}>
                    <Text style={{  color: 'white'}}>Entra</Text>
                </TouchableOpacity>
                <TouchableOpacity    style={{ alignItems: 'center', justifyContent: 'center', borderRadius: 1, elevation: 3, height: 40, width: 150, marginTop: 40, backgroundColor: 'white',}}>
                    <Text style={{   color: '#B1181A'}}>Registrarte</Text>
                </TouchableOpacity>
                
            </View>

            <View style={{flex: 1, flexDirection: 'row', marginTop: 30}}>
                    <TouchableHighlight style={{ marginTop: 20, }} onPress={() => this.Restauracion()}>
                <Text style={{color:'#B1181A'}}>Se me olvido la clave </Text>
                </TouchableHighlight>

                
            </View>
            <View style={{ flex: 2, flexDirection: 'row', marginTop: 20}}>
                    <TouchableOpacity    style={{alignItems: 'center', justifyContent: 'center', borderRadius: 1, elevation: 3, height: 40, width: 130, marginTop: 40, backgroundColor: 'white'}}>
                    <Icon name="facebook" color="#B1181A" size={30}  />
                    </TouchableOpacity>
                    <TouchableOpacity    >
                    <Text>- o -</Text>
                    </TouchableOpacity>
                    <TouchableOpacity    style={{ alignItems: 'center', justifyContent: 'center', borderRadius: 1, elevation: 3, height: 40, width: 130, marginTop: 40, backgroundColor: 'white'}}>
                    <Icon name="google" color="#B1181A" size={30}  />
                    </TouchableOpacity>
                    
            </View>
            <View style={{flex: 1, flexDirection: 'row', marginTop: 30}}>
                
                <Text style={{color:'white'}}>By Domcam Technology</Text>
                
            </View>
            </ImageBackground>
     
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
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
