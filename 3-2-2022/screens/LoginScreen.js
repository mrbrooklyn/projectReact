import React, { useState,useEffect } from 'react';
import {StyleSheet, View, ActivityIndicator, FlatList} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Formik } from 'formik';

import axios from 'axios';

import { Container, Header,Icon, Content,Form, Item, Input, Label, Button,Text } from 'native-base';

const IoniconsHeaderButton = props => (
  <HeaderButton IconComponent={Ionicons} iconSize={23} {...props} />
);

const LoginScreen = () => {
  
  return (
    <Container>
      <Content padder>
        <Formik
          //กำหนดค่าเริ่มต้นของข้อมูล
          initialValues={{
            email: '',
            password: '',
          }}
          //validationSchema={validateSchema}
          //เมื่อคลิกปุ่ม Register ให้ทำงานส่วน
          onSubmit={async(values,{setSubmitting}) => {
            // same shape as initial values
            alert(JSON.stringify(values));
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