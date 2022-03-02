//HomeScreen.js
import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  HeaderButtons,
  HeaderButton,
  Item,
} from 'react-navigation-header-buttons';

import { userStoreContext } from '../context/UserContext';


const IoniconsHeaderButton = props => (
  <HeaderButton IconComponent={Ionicons} iconSize={23} {...props} />
);

const HomeScreen = ({navigation}) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
          <Item
            title="menu"
            iconName="menu"
            onPress={() => navigation.openDrawer()}
          />
        </HeaderButtons>
      ),
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
          <Item
            title="register"
            iconName="person-add"
            onPress={() => navigation.navigate('Register')}
          />
        </HeaderButtons>
      ),  
    });
  }, [navigation]);

  //ประกาศตัวแปร userStore เพื่อรับข้อมูล
  const userStore = React.useContext(userStoreContext);

  return (
    <View style={styles.container}>
      <Ionicons name="home-outline" size={30} color="#5a80d1" />
        {
          userStore.profile && 
          <>
            <Text>ยินดีต้อนรับ: {userStore.profile.name}</Text>
            <Text>อีเมล: {userStore.profile.email}</Text>
          </>
        }
      <Text>หน้าหลัก</Text>
      <Button
        title="Go to About"
        onPress={() =>
          navigation.navigate('About', {email: 'ch.damrongdech_st@tni.ac.th'})
        }  
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});