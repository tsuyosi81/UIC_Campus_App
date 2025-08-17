import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useAuth } from '../contexts/AuthContext';
import { router } from 'expo-router';

const logInSignIn: React.FC = () => {
    const { signUp } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSignUp = async () => {
        setError("");
        setLoading(true);

        // Validation
        if (!email || !password || !confirmPassword) {
            setError("Please fill in all fields");
            setLoading(false);
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            setLoading(false);
            return;
        }

        if (password.length < 6) {
            setError("Password must be at least 6 characters");
            setLoading(false);
            return;
        }

        const emailRegex = /^[-A-Za-z0-9!#$%&'*+/=?^_`{|}~]+(?:\.[-A-Za-z0-9!#$%&'*+/=?^_`{|}~]+)*@(?:[A-Za-z0-9](?:[-A-Za-z0-9]*[A-Za-z0-9])?\.)+[A-Za-z0-9](?:[-A-Za-z0-9]*[A-Za-z0-9])?$/;
        if (!emailRegex.test(email)) {
            setError("Please enter a valid email address");
            setLoading(false);
            return;
        }

        try {
            await signUp(email, password);
            router.push('/signInCheck');
        } catch (error: any) {
            setError(error.message || "Sign up failed. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Create Account</Text>
            
            <TextInput 
                value={email}
                onChangeText={setEmail}
                placeholder="Email"
                style={styles.input}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            
            <TextInput 
                value={password}
                onChangeText={setPassword}
                placeholder="Password"
                style={styles.input}
                secureTextEntry
            />
            
            <TextInput 
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                placeholder="Confirm Password"
                style={styles.input}
                secureTextEntry
            />

            <Text style={styles.tosPrompt}>
            By creating an account, you agree to the
            </Text>
            <Text style={styles.tosPrompt}>
            <Text style={styles.link}> Terms of Service </Text> 
            and 
            <Text style={styles.link}> Privacy Policy</Text>
            </Text>
            

            {error ? <Text style={styles.errorText}>{error}</Text> : null}

            <View style={styles.buttonContainer}>
                <Button 
                    title={loading ? "Creating Account..." : "Sign Up"} 
                    onPress={handleSignUp}
                    disabled={loading}
                />
            </View>

            <View style={styles.buttonContainer}>
                <Button 
                    title="Already have an account? Log In" 
                    onPress={() => router.push('/authentication')}
                />
            </View>
        </View>
    );

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: '#ffffff',
    },
    title: {
        fontSize: 24,
        fontWeight: '600',
        textAlign: 'center',
        marginBottom: 32,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 14,
        marginVertical: 8,
        borderRadius: 8,
        fontSize: 16,
    },
    tosPrompt: {
    textAlign: 'center',
    fontSize: 14,
    color: '#777',
    },
    link: {
    color: '#007bff',
    fontWeight: '500',
    },
    errorText: {
        color: '#ff0000',
        fontSize: 14,
        textAlign: 'center',
        marginVertical: 8,
    },
    buttonContainer: {
        marginVertical: 8,
    },
});

export default logInSignIn;
