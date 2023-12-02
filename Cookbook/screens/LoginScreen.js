
//This is also for later use
/* import React, { useState } from 'react'
import { Text, StyleSheet, View, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth"
import { firebaseAuth } from '../firebase'

    const LoginScreen = () => {
        const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')
        const [loading, setLoading] = useState(false)
        const auth = firebaseAuth

        const signIn = async () => {
            setLoading(true)
            try {
                const response = await signInWithEmailAndPassword(auth, email, password)
                console.log(response)
            } catch (error) {
                console.log(error);
                alert('Sign in failed: ' + error.message)
            } finally {
                setLoading(false)
            }
        }

        const signUp = async () => {
            setLoading(true)
            try {
                const response = await createUserWithEmailAndPassword(auth, email, password)
                console.log(response)
                alert('Check your email!')
            } catch (error) {
                console.log(error);
                alert('Registration failed: ' + error.message)
            } finally {
                setLoading(false)
            }
        }

        return (
        <KeyboardAvoidingView
        style={styles.container}
        behavior='padding'>
            <View style={styles.inputContainer}>
                <TextInput
                placeholder='Email'
                value = {email}
                onChangeText={text => setEmail(text)}
                style={styles.input}
                />
                <TextInput
                placeholder='Password'
                value = {password}
                onChangeText={text => setPassword(text)}
                secureTextEntry={true}
                style={styles.input}
                />
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={signIn}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={signUp}
                    style={[styles.button, styles.buttonOutline]}
                >
                    <Text style={styles.buttonOutlineText}>Register</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
        )
    }
    
    export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputContainer: {
        width: '80%',

    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5
    },
    buttonContainer:{
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40
    },
    button: {
        backgroundColor: 'blue',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center'
    },
    buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5, 
        borderColor: 'blue',
        borderWidth: 2
    },
    buttonText:{
        color: 'white',
        fontWeight: 700,
        fontSize: 16
    },
    buttonOutlineText: {
        color: 'blue',
        fontWeight: 700,
        fontSize: 16
    }
})

 */