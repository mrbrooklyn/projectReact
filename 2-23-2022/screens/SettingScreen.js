import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';
import { styles } from '../components/styles';
import { SafeAreaView } from 'react-native-safe-area-context';

const SettingScreen = ({navigation}) => {

    return (
        <SafeAreaView style = {{flex: 1}}>
            <View style = {{flex: 1, padding: 15}}>
                <View style = {styles.container}>  
                    <Text style={styles.textTopStyle}>Setting Screen</Text>
                    <View style={{width: '80%'}}>
                        <View style={{margin: 5}}>
                            <Button
                                title="Go to Home Tab"
                                onPress={() => navigation.goBack()}
                            />
                        </View>
                        <View style={{margin: 5}}>
                            <Button
                                title="Open News Screen"
                                onPress={() => alert('waiting for the next week')}
                            />
                        </View>
                        <View style={{margin: 5}}>
                            <Button
                                title="Open Profile Screen"
                                onPress={() => navigation.navigate('ProfileScreen')}
                            />
                        </View>
                    </View>
                </View>
                <Text style={styles.textBottomStyle}>www.tni.ac.th</Text>
            </View>
        </SafeAreaView>
    );
};

export default SettingScreen;
