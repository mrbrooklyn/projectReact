import { StyleSheet, Text, View,  } from 'react-native'
import React from 'react'
import { Container, Header,Icon, Content,Form, Item, Input, Label, Button } from 'native-base';
import axios from 'axios';
import { Formik } from 'formik';
import * as Yup from 'yup';

const validateSchema = Yup.object().shape({
  name: Yup.string().required('กรุณากรอกชื่อใหม่'),
  email: Yup.string().email('รูปแบบอีเมลไม่ถูกต้อง').required('กรุณากรอกอีเมลใหม่'),
  password: Yup.string().min(3,'รหัสผ่านต้องมี 3 ตัวอักษรขึ้นไป').required('กรุณากรอกรหัสผ่านใหม่'),
});

const RegisterScreen = ({navigation}) => {
  return (
    <Container>
      <Content padder>
        <Formik
          //กำหนดค่าเริ่มต้นของข้อมูล
          initialValues={{
            name: '',
            email: '',
            password: '',
          }}
          validationSchema={validateSchema}
          //เมื่อคลิกปุ่ม Register ให้ทำงานส่วน
          onSubmit={async(values,{setSubmitting}) => {
            // same shape as initial values
            //alert(JSON.stringify(values));
            try {
              const url = 'https://api.codingthailand.com/api/register';
              const res = await axios.post(url,{
                name : values.name,
                email : values.email,
                password : values.password
              });
              alert(res.data.message)
              navigation.navigate('Home')
            } catch (error) { //ถ้าไม่สามารถบันทึกข้อมูลลง server ได้ เช่น เช็ค e-mail ซ้ำ
              alert(error.response.data.errors.email[0]);
            }finally{ //ให้ปุ่มสามารถกลับมาคลิกได้อีก
              setSubmitting(false);
            }
          }}
        >
          {({ errors, touched, values, handleChange, handleBlur, handleSubmit, isSubmitting }) => ( 
          //errors ใช้สำหรับการตรวจสอบสถานะของ error ที่เกิดขึ้น
          //touched เมื่อผู้ใช้ไปกดที่ name และเลื่อนเมาส์ออกไปด้านนอกช่อง input โดยไม่กรอกข้อมูล
            <Form>
              {/* กำหนดให้มีเส้นสีแดง ถ้าผู้ใช้ไม่กรอกข้อมูลชื่อ */}
              <Item fixedLabel error={errors.name && touched.name?true:false}>
                <Label>Name</Label>
                <Input
                  value={values.name}
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                />
                { errors.name && touched.name && <Icon name='close-circle'/> }
                </Item>
                {
                  errors.name && touched.name && (
                    <Item>
                      <Label style={{color:'red'}}>{errors.name}</Label>
                    </Item>
                  )
                }

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
                <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>Register</Text>
              </Button>
            </Form>
          )}
        </Formik>

        
      </Content>
    </Container>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({})