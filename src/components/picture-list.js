import React, { Component } from 'react';
import { Text, View,FlatList,Dimensions ,TouchableOpacity,Image,ScrollView} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
import Triangle from 'react-native-triangle';
import {Actions} from "react-native-router-flux";
const  {height: HEIGHT,width:WIDTH} = Dimensions.get('window')

export default class PictureList extends Component {

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
    clickBack=()=>{
        Actions.pop();
    }
    _renderItem = ({item}) => (
        <TouchableOpacity onPress={this.pictureDetail}>
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
    pictureDetail=()=>{
        Actions.PictureDetail();
    }
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
                        <Text style={{fontWeight: 'bold',color:'white',fontSize:20,width:WIDTH-HEIGHT/15,textAlign: 'center',marginLeft: -30}}>Ngày nhà giáo</Text>
                    </View>
                    <View>
                        <FlatList
                            numColumns={2}
                            horizontal={false}
                            data={this.state.data}
                            renderItem={this._renderItem}
                        />
                    </View>
                </ScrollView>

            </View>
        );
    }
}
