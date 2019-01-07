import React, {Component} from 'react';
import {View,Image, Text, TouchableOpacity, Dimensions, FlatList} from 'react-native'
import Style from './StyledetailMeal'
import {Actions} from 'react-native-router-flux'
const  {height: HEIGHT,width:WIDTH} = Dimensions.get('window')


class Detailmeal extends Component {
    constructor(props) {
        super(props);
        this.state ={
            datafood: [{icon:'../image/meat', name:'Thịt kho tàu', type:'Món chính', realimage:'https://amthuckheotay.com/wp-content/uploads/2015/06/thit-kho-tau.jpg'}]
        }

    }
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
                    <Text style={{fontWeight: 'bold',color:'white',fontSize:18,width:WIDTH-HEIGHT/15,textAlign: 'center',marginLeft: -30}}>Chi tiết</Text>
                </View>
                <View style={Style.contentContainer}>
                    <View style={Style.phandaumonan}>
                        <Image source={require('../image/meat.png')} style={Style.image}/>
                        <View style={{flex:4}}>
                            <Text style={{ fontSize:17, fontWeight:'bold'}}>Thịt kho tàu</Text>
                            <Text>Món chính</Text>
                        </View>

                    </View>
                    <View style ={Style.phanhinhanh}>
                        <Image  source={require('../image/thitkhotau.jpg')} style={Style.hinhanh}/>
                    </View>
                    <View style={Style.congthuc}>
                        <Text style={{ fontSize:16, fontWeight:'bold'}}>Thành phần: </Text>
                        <Text style={{ fontSize:16}}>- Thịt bắp heo</Text>
                        <Text style={{ fontSize:16}}>- Trứng vịt</Text>
                        <Text style={{ fontSize:16}}>- Hành tím</Text>
                        <Text style={{ fontSize:16}}>- Dừa xiêm</Text>
                        <Text style={{ fontSize:16}}>- Kẹo đắng</Text>
                        <Text style={{ fontSize:16}}>- Ớt, hạt tiêu và các gia vị</Text>


                    </View>
                </View>
                <TouchableOpacity style={Style.btngopy}>
                    <Text style={Style.txtgopy}>Góp ý</Text>
                </TouchableOpacity>

            </View>
        );
    }
}

export default Detailmeal;
