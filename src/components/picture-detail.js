import React, { Component } from 'react';
import { Text, View,FlatList,Dimensions ,TouchableOpacity,Image,ScrollView,TextInput} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
import Triangle from 'react-native-triangle';
import VideoList from "./video-list";
import {Actions} from "react-native-router-flux";
const  {height: HEIGHT,width:WIDTH} = Dimensions.get('window')

export default class PictureDetail extends Component {

    constructor(props){
        super(props);
        this.state={
            data:[
                {key:'1',name:'Bé và phấn',uriImage:require('../images/be-phan.png')},
                {key:'2',name:'Bài hát tặng cô',uriImage:require('../images/be-hat.png')},
                {key:'3',name:'Tập làm nhiếp ảnh',uriImage:require('../images/be-anh.png')},

            ]
        }
    }
    _renderItem = ({item}) => (
        <TouchableOpacity>
            <View style={{width:WIDTH/2-10,height:HEIGHT/5,backgroundColor:'#DCE1E6',marginLeft: 5,marginTop: 5}}>
                <View style={{width:'100%',height:'80%',backgroundColor:'#C0DAD1',alignItems:'center',justifyContent: 'center'}}>
                    <Image style={{width:'100%',height:'100%'}} source={item.uriImage}/>
                </View>
                <View style={{width:'100%',height:'20%',justifyContent:'center'}}>
                    <Text>{item.name}</Text>
                </View>
            </View>

        </TouchableOpacity>

    );
    clickBack=()=>{
        Actions.pop();
    }
    render() {
        return (
            <View style={{width:WIDTH,height:HEIGHT}}>
                <ScrollView>
                    <View style={{height:HEIGHT/13,justifyContent: 'center',alignItems:'center',backgroundColor: '#53B948',flexDirection: 'row'}}>
                        <TouchableOpacity onPress={this.clickBack}>
                            <Image style={{width:HEIGHT/15,height:HEIGHT/15}} source={require('../images/icons8-left-filled-96.png')}/>
                        </TouchableOpacity>
                        <Text style={{fontWeight: 'bold',color:'white',fontSize:18,width:WIDTH-HEIGHT/15,textAlign: 'center',marginLeft: -30}}>Bài hát tặng cô</Text>
                    </View>
                    <View>
                        <View style={{width:WIDTH,height:HEIGHT/3-20,backgroundColor:'red',marginTop: 10}}>
                            <Image style={{width:'100%',height:'100%'}} source={require('../images/be-hat.png')}/>
                        </View>
                        <View style={{width:WIDTH,height:HEIGHT/8,flexDirection:'row',alignItems:'center'}}>
                            <View style={{width:'30%',height:'50%',backgroundColor:'#64c3fb',borderRadius:4,marginLeft: 10,justifyContent:'center',alignItems:'center'}}>
                                <Text style={{color:'white',fontWeight:'bold'}}>Bình luận</Text>
                            </View>
                            <View style={{width:'30%',height:'50%',marginLeft: 10,alignItems:'center',flexDirection:'row'}}>
                                <TouchableOpacity>
                                    <Image style={{width:HEIGHT/18,height: HEIGHT/18}} source={require('../images/icons8-heart-outline-64.png')}/>
                                </TouchableOpacity>
                                <Text style={{marginLeft:5,fontSize:20}}>4</Text>
                            </View>
                        </View>
                        <View style={{width:WIDTH,height:HEIGHT/3+20}}>
                            <View style={{borderRadius:10,marginLeft:5,marginRight:5,width:WIDTH-10,height:'25%',flexDirection:'row',alignItems:'center'}}>
                                <View style={{alignItems:'center',width:'20%'}}>
                                    <Image style={{width:WIDTH/8,height:WIDTH/8}} source={require('../images/icons8-male-user-96.png')}/>
                                    <Text>Mẹ An Thái</Text>
                                </View>
                                <Text style={{borderRadius:10,backgroundColor:'#fff',height:WIDTH/7,padding: 5,marginLeft:5}}>Cháu dễ thương gê</Text>
                            </View>
                            <View style={{marginTop:10,marginLeft:5,marginRight:5,width:WIDTH-10,height:'25%',flexDirection:'row',alignItems:'center'}}>
                                <View style={{alignItems:'center',width:'20%'}}>
                                    <Image style={{width:WIDTH/8,height:WIDTH/8}} source={require('../images/icons8-male-user-96.png')}/>
                                    <Text>Bố Trà My</Text>
                                </View>
                                <Text style={{backgroundColor:'#fff',height:WIDTH/7,width:'70%',padding: 5,borderRadius:20,marginLeft:5}} numberOfLines={4}>Hôm trước nghe cháu hát rất hay và chân thành</Text>
                            </View>

                        </View>
                        <View style={{width:WIDTH,height:HEIGHT/8,flexDirection:'row',alignItems:'center'}}>
                            <Image style={{width:HEIGHT/12,height:HEIGHT/12}} source={require('../images/icons8-male-user-96.png')}/>
                            <View style={{alignItems:'center',flexDirection:'row',width:WIDTH-HEIGHT/10,height:HEIGHT/12,backgroundColor:'#fff',borderRadius:25}}>
                                <TextInput style={{marginLeft:10,width:'63%'}} placeholder={'Viết bình luận'}></TextInput>
                                <View style={{flexDirection:'row',marginRight:2,width:'30%',height:'80%',alignItems:'center',justifyContent:'flex-end'}}>
                                    <TouchableOpacity>
                                        <Image style={{width:WIDTH/12,height:WIDTH/12}} source={require('../images/icons8-happy-100.png')}/>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Image style={{width:WIDTH/12,height:WIDTH/12,marginLeft:5}} source={require('../images/icons8-chat-bubble-100.png')}/>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                    </View>
                </ScrollView>

            </View>
        );
    }
}
