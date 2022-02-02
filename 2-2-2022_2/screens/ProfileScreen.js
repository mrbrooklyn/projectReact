import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';
import { styles } from '../components/styles';
import { SafeAreaView } from 'react-native-safe-area-context';

const ProfileScreen = ({navigation}) => {
    
    return (
        <SafeAreaView style = {{flex: 1}}>
            <View style = {{flex: 1, padding: 15}}>
                <View style = {styles.container}>  
                    <Text style={styles.textTopStyle}>You are on Profile Screen</Text>
                </View>
                <Text style={styles.textBottomStyle}>www.tni.ac.th</Text>
            </View>
        </SafeAreaView>
    );
};

export default ProfileScreen;
