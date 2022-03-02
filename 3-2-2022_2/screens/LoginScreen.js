import React, { useState,useEffect } from 'react';
import {StyleSheet, View, ActivityIndicator, FlatList} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Formik } from 'formik';

import axios from 'axios';

import * as Yup from 'yup';

import { Container, Header,Icon, Content,Form, Item, Input, Label, Button,Text } from 'native-base';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { userStoreContext } from '../context/UserContext';

const validateSchema = Yup.object().shape({
    email: Yup.string().email('รูปแบบอีเมลไม่ถูกต้อง').required('กรุณากรอกอีเมลใหม่'),
    password: Yup.string().min(3,'รหัสผ่านต้องมี 3 ตัวอักษรขึ้นไป').required('กรุณากรอกรหัสผ่านใหม่'),
});

const IoniconsHeaderButton = props => (
  <HeaderButton IconComponent={Ionicons} iconSize={23} {...props} />
);

const LoginScreen = ({navigation}) => {
  const userStore = React.useContext(userStoreContext);

  return (
    <Container>
      <Content padder>
        <Formik
          //กำหนดค่าเริ่มต้นของข้อมูล
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={validateSchema}
          //เมื่อคลิกปุ่ม Register ให้ทำงานส่วน
          onSubmit={async(values,{setSubmitting}) => {
            try {
                const url = 'https://api.codingthailand.com/api/login';
                const res = await axios.post(url,{
                  email : values.email,
                  password : values.password
                });
                //alert(JSON.stringify(res.data));
                await AsyncStorage.setItem('@token',JSON.stringify(res.data));
                //get profile
                const urlProfile = 'https://api.codingthailand.com/api/profile';
                const resProfile = await axios.get(urlProfile,{
                    headers:{
                        Authorization : 'Bearer '+res.data.access_token
                    }
                });
                //alert(JSON.stringify(resProfile.data.data.user));
                //เก็บข้อมูล Prfile ลง AsyncStorage
                await AsyncStorage.setItem('@profile',JSON.stringify(resProfile.data.data.user))

                //get&update profile by Context(Global State)
                const profile = await AsyncStorage.getItem('@profile');
                userStore.updateProfile(JSON.parse(profile));

                alert('เข้าระบบเรียบร้อยแล้ว');
                navigation.navigate('Home');

            } catch(error) {
                alert(error.response.data.message);
            } finally{ //ให้ปุ่มสามารถกลับมาคลิกได้อีก
                setSubmitting(false);
            }
          }}
        >
          {({ errors, touched, values, handleChange, handleBlur, handleSubmit, isSubmitting }) => ( 
          //errors ใช้สำหรับการตรวจสอบสถานะของ error ที่เกิดขึ้น
          //touched เมื่อผู้ใช้ไปกดที่ name และเลื่อนเมาส์ออกไปด้านนอกช่อง input โดยไม่กรอกข้อมูล
            <Form>

              <Item fixedLabel last>
                <Label>Email</Label>
                <Input 
                  value={values.email}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  keyboardType="email-address"
                />
                { errors.email && touched.email && <Icon name='close-circle' style={{color:'red'}}/> }
                </Item>
                {
                  errors.email && touched.email && (
                    <Item>
                      <Label style={{color:'red'}}>{errors.email}</Label>
                    </Item>
                  )
                }

              <Item fixedLabel last>
                <Label>Password</Label>
                <Input
                  value={values.password}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  keyboardType="numeric"
                />
                { errors.password && touched.password && <Icon name='close-circle' style={{color:'red'}}/> }
                </Item>
                {
                  errors.password && touched.password && (
                    <Item>
                      <Label style={{color:'red'}}>{errors.password}</Label>
                    </Item>
                  )
                }

              <Button block large 
                style={{
                  marginTop:30, 
                  backgroundColor: 'grey'
                }}
                onPress={handleSubmit}
                //ไว้เปิด / ปิด ปุ่มกาทำงาน
                disabled = {isSubmitting}
              >
                <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>Login</Text>
              </Button>
            </Form>
          )}
        </Formik>

      </Content>
    </Container>
  )
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});