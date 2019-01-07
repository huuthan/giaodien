import React, { Component } from 'react';
import { Text, View,FlatList,Dimensions ,TouchableOpacity,Image,ScrollView} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
import Triangle from 'react-native-triangle';
import {Actions, Router, Scene, Stack} from 'react-native-router-flux'
import VideoList from "./video-list";
const  {height: HEIGHT,width:WIDTH} = Dimensions.get('window')

export default class Album extends Component {

    constructor(props){
        super(props);
        this.state={
            data:[
                {key:'1',name:'Thông tin',uriImage:require('../images/user-4.png')},
                {key:'2',name:'Sức khỏe',uriImage:require('../images/icons8-health-calendar-80.png')},
                {key:'3',name:'Khẩu phần ăn',uriImage:require('../images/icons8-meal-80.png')},
                {key:'4',name:'Album ảnh',uriImage:require('../images/icons8-photo-gallery-80.png')},
                {key:'5',name:'Hoạt động',uriImage:require('../images/icons8-running-50.png')},
                {key:'6',name:'Liên hệ',uriImage:require('../images/icons8-phone-64.png')},
            ]
        }
    }
    _renderItem = ({item}) => (
        <TouchableOpacity>
            <View style={{width:WIDTH/2-10,height:WIDTH/2-10,backgroundColor:'#DCE1E6',marginLeft: 5,marginTop: 5,alignItems:'center',justifyContent: 'center'}}>
                <View style={{width:WIDTH/4,height:WIDTH/4,borderRadius:100,borderWidth: 4,justifyContent:'center',alignItems:'center'}}>
                    <Image style={{width:WIDTH/5-10,height:WIDTH/5-10}} source={item.uriImage}/>
                </View>
                <Text>{item.name}</Text>
            </View>

        </TouchableOpacity>

    );
    playVideo=()=>{
        Actions.VideoDetail()
    }
    playPicture=()=>{
        Actions.PictureDetail()
    }
    clickBack=()=>{
        Actions.pop();
    }
    pictureList=()=>{
        Actions.PictureList();
    }
    videoList=()=>{
        Actions.VideoList();
    }
    render() {
        return (
            <View style={{width:WIDTH,height:HEIGHT,backgroundColor:'#fff'}}>
                <ScrollView>
                    <View style={{height:HEIGHT/15,justifyContent: 'center',alignItems:'center',backgroundColor: '#F38946',flexDirection: 'row'}}>
                        <TouchableOpacity onPress={this.clickBack}>
                            <Image  style={{width:HEIGHT/15,height:HEIGHT/15}} source={require('../images/icons8-left-filled-96.png')}/>
                        </TouchableOpacity>
                        <Text style={{fontWeight: 'bold',color:'white',fontSize:20,width:WIDTH-HEIGHT/15,textAlign: 'center'}}>Album ảnh</Text>
                    </View>
                    <View style={{alignItems: 'center',marginTop:20}}>
                        <View style={{width:WIDTH,height:HEIGHT/16,backgroundColor:'#fff',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                            <TouchableOpacity style={{width:WIDTH/10,height:HEIGHT/16,backgroundColor:'#fff'}}>
                                <Icon name="chevron-left" size={HEIGHT/16} color="#53B948" />
                            </TouchableOpacity>
                            <TouchableOpacity style={{width:WIDTH/5,height:HEIGHT/16,justifyContent:'center',alignItems:'center',borderWidth: 1,borderColor:'#53B948',backgroundColor:'#53B948'}}>
                                <Text style={{color:'#fff',fontWeight:'bold'}}>Tất cả</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{width:WIDTH/5,height:HEIGHT/16,justifyContent:'center',alignItems:'center',borderWidth: 1,borderColor:'#53B948'}}>
                                <Text>Tháng 1</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{width:WIDTH/5,height:HEIGHT/16,justifyContent:'center',alignItems:'center',borderWidth: 1,borderColor:'#53B948'}}>
                                <Text>Tháng 2</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{width:WIDTH/5,height:HEIGHT/16,justifyContent:'center',alignItems:'center',borderWidth: 1,borderColor:'#53B948'}}>
                                <Text>Tháng 3</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{width:WIDTH/10,height:HEIGHT/16,justifyContent:'center',alignItems:'center',backgroundColor:'#fff'}}>
                                <Icon name="chevron-right" size={HEIGHT/16} color="#53B948" />
                            </TouchableOpacity>
                        </View>

                        <View style={{borderRadius:20,width:WIDTH-20,height:HEIGHT/16,backgroundColor:'#53B948',marginLeft: 5,marginTop:20,justifyContent:'center',alignItems:'center'}}>
                            <Text style={{color:'#fff',fontWeight:'bold'}}>1/12 Hoạt động trong tháng</Text>
                        </View>
                        {/*<Image style={{width:WIDTH-100,height:WIDTH/2-50}} source={require('../images/1_12.png')}/>*/}
                        <View style={{flexDirection:'row',height:HEIGHT/8,width:WIDTH-20,marginLeft: 5,backgroundColor:'#97C5AB',marginBottom: 5,alignItems:'center'}}>
                            <Image style={{width:HEIGHT/8-10,height:HEIGHT/8-10,marginLeft:10}} source={require('../images/youtube-icon.png')}/>
                            <TouchableOpacity onPress={this.playVideo} style={{width:WIDTH/3-15,height:HEIGHT/8-10,backgroundColor:'red',marginLeft: 5,marginTop: 5}}>
                                <Image style={{width:'100%',height:'100%'}} source={{uri:'https://image.bnews.vn/MediaUpload/Content/2018/11/12/092815_bai-phat-bieu-cua-hoc-sinh-ngay-nha-giao-viet-nam-20-11-600.jpg'}}/>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.playVideo} style={{width:WIDTH/3-15,height:HEIGHT/8-10,backgroundColor:'green',marginLeft: 5,marginTop: 5}}>
                                <Image style={{width:'100%',height:'100%'}} source={{uri:'http://baobaclieu.vn/database/newsimg/2014/11/20/image011.jpg'}}/>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.videoList} style={{justifyContent:'center',alignItems:'center',width:25,height:HEIGHT/8-10,backgroundColor:'#fff',marginLeft: 5,marginTop: 5,borderRadius: 5}}>
                                <Icon name="chevron-right" size={20} color="#5f5858" />
                            </TouchableOpacity>

                        </View>
                        <View style={{flexDirection:'row',height:HEIGHT/8,width:WIDTH-20,marginLeft: 5,backgroundColor:'#97C5AB'}}>
                            <Image style={{width:HEIGHT/8-10,height:HEIGHT/8-10,marginLeft:10}} source={require('../images/icons8-picture-100.png')}/>
                            <TouchableOpacity onPress={this.playPicture} style={{width:WIDTH/3-15,height:HEIGHT/8-10,backgroundColor:'red',marginLeft: 5,marginTop: 5}}>
                                <Image style={{width:'100%',height:'100%'}} source={{uri:'http://luuvinhbacson.edu.vn/uploads/albums/20-11.1.jpg'}}/>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.playPicture} style={{width:WIDTH/3-15,height:HEIGHT/8-10,backgroundColor:'green',marginLeft: 5,marginTop: 5}}>
                                <Image style={{width:'100%',height:'100%'}} source={{uri:'https://d4.violet.vn/uploads/blogs/blogs2/762336/img_7130_500.jpg'}}/>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.pictureList} style={{justifyContent:'center',alignItems:'center',width:25,height:HEIGHT/8-10,backgroundColor:'#fff',marginLeft: 5,marginTop: 5,borderRadius: 5}}>
                                <Icon name="chevron-right" size={20} color="#5f5858" />
                            </TouchableOpacity>
                        </View>
                        <View style={{borderRadius:20,width:WIDTH-20,height:HEIGHT/16,backgroundColor:'#53B948',marginLeft: 5,marginTop:40,justifyContent:'center',alignItems:'center'}}>
                            <Text style={{color:'#fff',fontWeight:'bold'}}>Ngày nhà giáo Việt Nam 20/11</Text>
                        </View>
                        {/*<Image style={{width:WIDTH-100,height:WIDTH/2-50,marginTop:100}} source={require('../images/20_10.png')}/>*/}
                        <View style={{flexDirection:'row',height:HEIGHT/8,width:WIDTH-20,marginLeft: 5,backgroundColor:'#97C5AB',marginBottom: 5,alignItems:'center'}}>
                            <Image style={{width:HEIGHT/8-10,height:HEIGHT/8-10,marginLeft:10}} source={require('../images/youtube-icon.png')}/>
                            <TouchableOpacity onPress={this.playVideo} style={{width:WIDTH/3-15,height:HEIGHT/8-10,backgroundColor:'red',marginLeft: 5,marginTop: 5}}>
                                <Image style={{width:'100%',height:'100%'}} source={{uri:'https://image.bnews.vn/MediaUpload/Content/2018/11/12/092815_bai-phat-bieu-cua-hoc-sinh-ngay-nha-giao-viet-nam-20-11-600.jpg'}}/>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.playVideo} style={{width:WIDTH/3-15,height:HEIGHT/8-10,backgroundColor:'green',marginLeft: 5,marginTop: 5}}>
                                <Image style={{width:'100%',height:'100%'}} source={{uri:'http://baobaclieu.vn/database/newsimg/2014/11/20/image011.jpg'}}/>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.videoList} style={{justifyContent:'center',alignItems:'center',width:25,height:HEIGHT/8-10,backgroundColor:'#fff',marginLeft: 5,marginTop: 5,borderRadius: 5}}>
                                <Icon name="chevron-right" size={20} color="#5f5858" />
                            </TouchableOpacity>

                        </View>
                        <View style={{flexDirection:'row',height:HEIGHT/8,width:WIDTH-20,marginLeft: 5,backgroundColor:'#97C5AB'}}>
                            <Image style={{width:HEIGHT/8-10,height:HEIGHT/8-10,marginLeft:10}} source={require('../images/icons8-picture-100.png')}/>
                            <TouchableOpacity onPress={this.playPicture} style={{width:WIDTH/3-15,height:HEIGHT/8-10,backgroundColor:'red',marginLeft: 5,marginTop: 5}}>
                                <Image style={{width:'100%',height:'100%'}} source={{uri:'http://luuvinhbacson.edu.vn/uploads/albums/20-11.1.jpg'}}/>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.playPicture}  style={{width:WIDTH/3-15,height:HEIGHT/8-10,backgroundColor:'green',marginLeft: 5,marginTop: 5}}>
                                <Image style={{width:'100%',height:'100%'}} source={{uri:'https://d4.violet.vn/uploads/blogs/blogs2/762336/img_7130_500.jpg'}}/>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.pictureList} style={{justifyContent:'center',alignItems:'center',width:25,height:HEIGHT/8-10,backgroundColor:'#fff',marginLeft: 5,marginTop: 5,borderRadius: 5}}>
                                <Icon name="chevron-right" size={20} color="#5f5858" />
                            </TouchableOpacity>
                        </View>

                    </View>

                </ScrollView>

            </View>
        );
    }
}
