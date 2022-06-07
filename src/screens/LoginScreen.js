import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-web'
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView'

const LoginScreen = () => {
    return(
       <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
        >
            <View style={styles.inputContainer}>
                <TextInput
                  placeholder="Login"
                  //value={ }
                  //onChangeText={text => }
                  style={styles.input}
                  secureTextEntry
                />
            </View>
            <View style ={ style.buttonContainer}>
                <TouchableOpacity 
                    onPress={() => { }}
                    style={styles.input}
                    secureTextEntry
                    >
                    
                    <Text style={styles.button}>Entrar</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    onPress={() => { }}
                    style={[styles.button, styles.buttonOutline]}
                    secureTextEntry>
                        <Text style={styles.button}>NÃO TENHO LOGIN</Text>

                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center',

    }
})