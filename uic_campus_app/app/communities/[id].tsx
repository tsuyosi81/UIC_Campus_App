import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function CommunityHome(){
    const params = useLocalSearchParams<{id: string}>();
    return (
        <View>
            <Text>{`This is ${params.id}`}</Text>
        </View>
    )
}