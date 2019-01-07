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
                <View style={{height:HEIGHT/15,justifyContent: 'center',alignItems:'center',backgroundColor: '#F38946',flexDirection: 'row'}}>
                    <TouchableOpacity onPress={this.clickBack}>
                        <Image  style={{width:HEIGHT/15,height:HEIGHT/15}} source={require('../src/images/icons8-left-filled-96.png')}/>
                    </TouchableOpacity>
                    <Text style={{fontWeight: 'bold',color:'white',fontSize:20,width:WIDTH-HEIGHT/15,textAlign: 'center'}}>Chi tiết</Text>
                </View>
                <View style={Style.contentContainer}>
                    <View style={Style.phandaumonan}>
                        <Image source={require('../image/meat.png')} style={Style.image}/>
                        <View style={{flex:4}}>
                            <Text >Thịt kho tàu</Text>
                            <Text>Món chính</Text>
                        </View>

                    </View>
                    <View style ={Style.phanhinhanh}>
                        <Image  source={require('../image/thitkhotau.jpg')} style={Style.hinhanh}/>
                    </View>
                    <View style={Style.congthuc}>
                        <Text>Thành phần: </Text>
                        <Text>- Thịt bắp heo</Text>
                        <Text>- Trứng vịt</Text>
                        <Text>- Hành tím</Text>
                        <Text>- Dừa xiêm</Text>
                        <Text>- Kẹo đắng</Text>
                        <Text>- Ớt, hạt tiêu và các gia vị</Text>


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
