import React, { Component } from 'react';
import { Text, View,FlatList,Dimensions ,TouchableOpacity,Image,ScrollView} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
import Triangle from 'react-native-triangle';
import {Actions} from "react-native-router-flux";
const  {height: HEIGHT,width:WIDTH} = Dimensions.get('window')

export default class VideoList extends Component {

    constructor(props){
        super(props);
        this.state={
            data:[
                {key:'1',name:'Múa chiều lên bản thượng',uriImage:require('../images/mua.png')},
                {key:'2',name:'Tặng hoa cho cô',uriImage:require('../images/mua.png')},
                {key:'3',name:'Múa hoa hồng tặng cô',uriImage:require('../images/mua.png')},
                {key:'4',name:'Bài hát cô giáo em',uriImage:require('../images/mua.png')},
                {key:'5',name:'Toàn bộ buổi văn nghệ',uriImage:require('../images/mua.png')},

            ]
        }
    }
    _renderItem = ({item}) => (
        <TouchableOpacity onPress={this.videoDetail}>
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
    videoDetail=()=>{
        Actions.VideoDetail();
    }

    render() {
        return (
            <View style={{width:WIDTH,height:HEIGHT}}>
                <ScrollView>
                    <View style={{height:HEIGHT/15,justifyContent: 'center',alignItems:'center',backgroundColor: '#F38946',flexDirection: 'row'}}>
                        <TouchableOpacity onPress={this.clickBack}>
                            <Image style={{width:HEIGHT/15,height:HEIGHT/15}} source={require('../images/icons8-left-filled-96.png')}/>
                        </TouchableOpacity>
                        <Text style={{fontWeight: 'bold',color:'white',fontSize:20,width:WIDTH-HEIGHT/15,textAlign: 'center'}}>Ngày nhà giáo</Text>
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
