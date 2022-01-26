import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';
import { styles } from '../components/styles';
import { SafeAreaView } from 'react-native-safe-area-context';

const ThirdPage = ({navigation}) => {
  return (
    <SafeAreaView style = {{flex: 1}}>
        <View style = {{flex: 1, padding: 15}}>
            <View style = {styles.container}>  
                <Text style={styles.textTopStyle}>This is the Third Page</Text>
                <View>
                    <Button
                        title="Go to First Page"
                        onPress={() => navigation.navigate('FirstPage')}
                    />
                    <Button
                        title="Go to Second Page"
                        onPress={() => navigation.navigate('SecondPage')}
                    />
                </View>
                <View style={{bottom: 10, position: 'absolute'}}>
                    <Text style={styles.textBottomStyle}>Thai-Nichi Institute of Technology</Text>
                </View>
            </View>
        </View>
    </SafeAreaView>
  );
};

export default ThirdPage;
