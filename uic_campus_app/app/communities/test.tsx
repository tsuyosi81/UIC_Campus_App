import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function Test(){
    const params = useLocalSearchParams<{id: string}>();
    return (
        <View>
            <Text>This is Community Home</Text>
        </View>
    )
}