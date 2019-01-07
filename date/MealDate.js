import React, {Component} from 'react';
import Style from './StyleMealDate'
import {View,Image, Text, TouchableOpacity, Dimensions, FlatList} from 'react-native'
import {Actions} from "react-native-router-flux";
const  {height: HEIGHT,width:WIDTH} = Dimensions.get('window')


class MealDate extends Component {

    clickBack=()=>{
        Actions.pop();
    }
    render() {
        return (
            <View style={{ height:HEIGHT,width: '100%'}}>
                <View style={{height:HEIGHT/13,justifyContent: 'center',alignItems:'center',backgroundColor: '#33B3FB',flexDirection: 'row'}}>
                    <TouchableOpacity onPress={this.clickBack}>
                        <Image  style={{width:HEIGHT/15,height:HEIGHT/15}} source={require('../src/images/icons8-left-filled-96.png')}/>
                    </TouchableOpacity>
                    <Text style={{fontWeight: 'bold',color:'white',fontSize:18,width:WIDTH-HEIGHT/15,textAlign: 'center', marginLeft: -30}}>Khẩu phần ăn thứ 2</Text>
                </View>
                <View style={{flex: 8}}>
                    <Image source={require('../image/app.png')} style={{width:'100%', height:'100%'}}/>
                </View>
            </View>

        );
    }
}

export default MealDate;
