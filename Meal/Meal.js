import React, {Component} from 'react';
import {View,Image, Text, TouchableOpacity, Dimensions, FlatList} from 'react-native'
import Style from './StyleMeal'
import DateTimePicker from 'react-native-modal-datetime-picker';
const  {height: HEIGHT,width:WIDTH} = Dimensions.get('window')

import {Actions} from 'react-native-router-flux'

class Meal extends Component {
    constructor(props) {
        super(props);
        this.state ={
            datafood: [{day:'Thứ 2', mon1:'Trứng chiên', hinh1:require('../image/egg.png'), mon2:'Thịt heo kho', hinh2:require('../image/meat.png'), mon3:'Suplo xào', hinh3:require('../image/vegetable.png'), mon4:'Sữa',hinh4:require('../image/milk.png')},
                {day:'Thứ 3', mon1:'Bún thịt băm', hinh1:require('../image/noodle.png'), mon2:'Thịt heo kho', hinh2:require('../image/meat.png'), mon3:'Suplo xào', hinh3:require('../image/vegetable.png'), mon4:'Dưa hấu',hinh4:require('../image/watermelon.png')},
                {day:'Thứ 4', mon1:'Trứng chiên', hinh1:require('../image/egg.png'), mon2:'Thịt heo kho', hinh2:require('../image/meat.png'), mon3:'Cải luộc', hinh3:require('../image/vegetable.png'), mon4:'Sữa',hinh4:require('../image/banana.png')},
                {day:'Thứ 5', mon1:'Cá chiên', hinh1:require('../image/dryfish.png'), mon2:'Thịt heo kho', hinh2:require('../image/meat.png'), mon3:'Suplo xào', hinh3:require('../image/vegetable.png'), mon4:'Sữa',hinh4:require('../image/milk.png')},
                {day:'Thứ 6', mon1:'Trứng chiên', hinh1:require('../image/egg.png'), mon2:'Thịt heo kho', hinh2:require('../image/meat.png'), mon3:'Suplo xào', hinh3:require('../image/vegetable.png'), mon4:'Sữa',hinh4:require('../image/watermelon.png')},
                {day:'Thứ 7', mon1:'Bún măng gà', hinh1:require('../image/noodle.png'), mon2:'Thịt heo kho', hinh2:require('../image/meat.png'), mon3:'Rau muống xào', hinh3:require('../image/vegetable.png'), mon4:'Sữa',hinh4:require('../image/milk.png')},

            ],
            isDateTimePickerVisible: false,
        }
    }
    clickBack=()=>{
        Actions.pop();
    }
    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

    _handleDatePicked = (date) => {
        console.log('A date has been picked: ', date);
        this._hideDateTimePicker();
    };

    render() {
        return (
            <View style={{ height:HEIGHT,width: '100%'}}>
                <View style={{height:HEIGHT/12,justifyContent: 'center',alignItems:'center',backgroundColor: '#33B3FB',flexDirection: 'row'}}>
                    <TouchableOpacity onPress={this.clickBack}>
                        <Image  style={{width:HEIGHT/15,height:HEIGHT/15}} source={require('../src/images/icons8-left-filled-96.png')}/>
                    </TouchableOpacity>
                    <Text style={{color:'white',fontSize:20,width:WIDTH-HEIGHT/15,textAlign: 'center', marginLeft: -30}}>Khẩu phần ăn</Text>
                </View>
                <View style={Style.dateContaner}>
                    <TouchableOpacity>
                        <Image source={require('../image/prev.png')} style={Style.image1}/>
                    </TouchableOpacity>
                    <View style={Style.chooseDate}>
                        <TouchableOpacity onPress={this._showDateTimePicker}>
                            <Text style={Style.textDate}>Tháng 1/Tuần 2</Text>
                        </TouchableOpacity>
                    </View>
                    <DateTimePicker
                        isVisible={this.state.isDateTimePickerVisible}
                        onConfirm={this._handleDatePicked}
                        onCancel={this._hideDateTimePicker}
                    />
                    <TouchableOpacity>
                        <Image source={require('../image/next.png')} style={Style.image1}/>
                    </TouchableOpacity>
                </View>
                <View style={Style.content}>
                    <FlatList
                        data={this.state.datafood}
                        renderItem={this._renderItem1}
                        keyExtractor = { (item, index) => index.toString() }
                    />
                </View>
            </View>


        );
    }
    _renderItem1=({item})=>(
        <View style={{backgroundColor:"#ECECEC"}}>
            <TouchableOpacity style={Style.ItemContaner} onPress={()=>Actions.MealDate()}>
                <Text style={Style.dateinweek}>  {item.day}</Text>

                <View style={{flex:8, backgroundColor:'#fff', borderRadius: 10}} >

                    <View style={{flex:1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                        <TouchableOpacity onPress={()=>Actions.Detailmeal()}>
                            <Image source={item.hinh1} style={Style.image}/>
                        </TouchableOpacity>
                            <Text style={{flex:2}}>{item.mon1}</Text>
                        <TouchableOpacity onPress={()=>Actions.Detailmeal()}>
                        <Image source={item.hinh2} style={Style.image}/>
                        </TouchableOpacity>

                        <Text style={{flex:2}}>{item.mon2}</Text>
                    </View>
                    <View style={{flex:1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={item.hinh3} style={Style.image}/>
                        <Text style={{flex:2}}>{item.mon3}</Text>
                        <Image source={item.hinh4} style={Style.image}/>
                        <Text style={{flex:2}}>{item.mon4}</Text>
                    </View>
                </View>
                {/*<View style={{flex:0, backgroundColor:'#ECECEC', marginLeft: 3}}>*/}
                    {/*<TouchableOpacity style={{height:'100%', backgroundColor:'#ECECEC', marginLeft: 3,justifyContent: 'center',*/}
                        {/*alignItems: 'center',}} onPress={()=>Actions.MealDate()}>*/}
                        {/*<Image source={require('../image/next.png')} style={{width:20, height:20}}/>*/}
                    {/*</TouchableOpacity>*/}
                {/*</View>*/}

            </TouchableOpacity>

        </View>
    );
}

export default Meal;
