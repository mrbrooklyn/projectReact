//HomeScreen.js
import React, { useState,useEffect } from 'react';
import {StyleSheet, View, ActivityIndicator, FlatList} from 'react-native';

import axios from 'axios';

import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button, Badge } from 'native-base';


const DetailScreen = ({navigation, route}) => {

    const{id,title} = route.params;
    
    React.useLayoutEffect(()=> {
        navigation.setOptions({
            //title: 'รายละเอียดสินค้า' //set แบบ static 
            title: title //set แบบ Dynamic
        })
    },[navigation]) //จะเกิดขึ้นเมื่อมีการ navigation เข้ามาเท่านั้น

    const [detail,setDetail] = useState([]);
    const [loading, setLoading] = useState(false);

    const getData = async (id)=>{
        setLoading(true);
        const res = await axios.get('https://api.codingthailand.com/api/course/'+id)
        //alert(JSON.stringify(res.data.data))
        //console.log(res.data.data)
        setDetail(res.data.data);
        setLoading(false);
    } 

    useEffect (()=>{
        //getData() for get data from backend
        getData(id);
    }, [id])

    const _onRefresh = ()=>{
        getData(id);
    }

    return (
        <View>
            <FlatList
                //data ใช้สำหรับวนรอบเพื่อแสดงข้อมูลใน Backend
                data={detail}
                //keyExtractor คีย์หลัก
                keyExtractor = {(item,index)=> item.ch_id.toString()}
                //pull to refresh
                onRefresh={_onRefresh}
                refreshing={loading} //ถ้า refreshing เป็น true คือจะรอให้ refresh data จนจบ
                //renderItem สำหรับ render UI ที่จะให้ user มองเห็น
                renderItem = {({item,index})=> (
                <ListItem thumbnail>
                    <Left>
                    <Text>{index+1}</Text>
                    </Left>
                    <Body>
                        <Text>{item.ch_title}</Text>
                        <Text note numberOfLines={1}>{item.detail}</Text>
                    </Body>
                    <Right>
                        <Badge>
                        <Text>{item.ch_view}</Text>
                        </Badge>
                    </Right>
                    </ListItem>
                )}
            />
        </View>
    );
};

export default DetailScreen;