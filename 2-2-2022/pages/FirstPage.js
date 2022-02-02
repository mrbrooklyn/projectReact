import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';
import { styles } from '../components/styles';
import { SafeAreaView } from 'react-native-safe-area-context';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Logo from './Logo';

const FirstPage = ({navigation}) => {

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: () => <Logo/>,
            headerRight: () => (
                <Button onPress={() => alert('Test')} title="Register" />
            ),
        });
      }, [navigation]);
    
    return (
        <SafeAreaView style = {{flex: 1}}>
            <View style = {{flex: 1, padding: 15}}>
                <View style = {styles.container}>  
                    <Ionicons name='home' size={30} color='skyblue' />
                    <Text style={styles.textTopStyle}>This is the First Page</Text>
                    <View>
                        <Button
                            title="Go to Second Page"
                            onPress={() => navigation.navigate('SecondPage')}
                        />
                        <Button
                            title="Go to Third Page"
                            onPress={() => navigation.navigate('ThirdPage')}
                        />
                    </View>
                </View>
                <Text style={styles.textBottomStyle}>Thai-Nichi Institute of Technology</Text>
            </View>
        </SafeAreaView>
    );
};

export default FirstPage;
