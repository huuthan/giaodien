import React, { Component } from 'react';
import { Text, View,FlatList,Dimensions ,TouchableOpacity,Image} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
import {Actions, Router, Scene, Stack} from 'react-native-router-flux'
const  {height: HEIGHT,width:WIDTH} = Dimensions.get('window')

export default class Home extends Component {

    constructor(props){
        super(props);
        this.state={
            data:[
                {key:'1',name:'Thông tin',uriImage:require('../images/user-4.png'),color:'#F9A620'},
                {key:'2',name:'Sức khỏe',uriImage:require('../images/icons8-health-calendar-80.png'),color:'#8DC34D'},
                {key:'3',name:'Khẩu phần ăn',uriImage:require('../images/icons8-meal-80.png'),color:'#ED6360'},
                {key:'4',name:'Album ảnh',uriImage:require('../images/icons8-photo-gallery-80.png'),color:'#C49FC7'},
                {key:'5',name:'Hoạt động',uriImage:require('../images/icons8-running-50.png'),color:'#2ecc71'},
                {key:'6',name:'Liên hệ',uriImage:require('../images/icons8-phone-64.png'),color:'#39AFD5'},
            ]
        }
    }
    clickIcon=(id)=>{
        if (id==='3'){
            Actions.Meal();
        }else if (id==='4'){
            Actions.Album();
        }
    };
    _renderItem = ({item}) => (
        <TouchableOpacity onPress={()=>{this.clickIcon(item.key)}}>
            <View style={{width:WIDTH/2-10,height:WIDTH/2-10,backgroundColor:'#fff',marginLeft: 5,marginTop: 5,alignItems:'center',justifyContent: 'center'}}>
                <View style={{backgroundColor:'#fff',width:WIDTH/4,height:WIDTH/4,borderRadius:100,borderColor:item.color,borderWidth: 3,justifyContent:'center',alignItems:'center'}}>
                    <Image style={{width:WIDTH/5-15,height:WIDTH/5-15}} source={item.uriImage}/>
                </View>
                <Text style={{fontWeight: 'bold',color:item.color,fontSize: 16}}>{item.name}</Text>
            </View>

        </TouchableOpacity>

    );
    render() {
        return (
            <View style={{width:WIDTH,height:HEIGHT,backgroundColor:'#fff'}}>

                <TouchableOpacity style={{height:HEIGHT/15,justifyContent: 'center',alignItems:'center',backgroundColor: '#F38946'}}>
                    <Text style={{fontWeight: 'bold',color:'white',fontSize:20}}>Trang chủ</Text>
                </TouchableOpacity>
                <View style={{alignItems: 'center'}}>
                    <FlatList
                        numColumns={2}
                        horizontal={false}
                        data={this.state.data}
                        renderItem={this._renderItem}
                    />
                </View>

            </View>
        );
    }
}
