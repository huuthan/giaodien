/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,StatusBar} from 'react-native';
import Home from  './src/components/home'
import {Actions, Router, Scene, Stack} from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/FontAwesome'
import Album from "./src/components/album";
import VideoList from "./src/components/video-list";
import PictureList from "./src/components/picture-list";
import PictureDetail from "./src/components/picture-detail";
import VideoDetail from "./src/components/video-detail";
import Meal from "./Meal/Meal";
import MealDate from "./date/MealDate";
import Detailmeal from "./DetailMeal/detailmeal";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
const iconHome =() => (<Icon name="home" size={30} color="#5f5858" />);
const iconBell =() => (<Icon name="bell" size={30} color="#5f5858" />);
const iconSetting =() => (<Icon name="cogs" size={30} color="#5f5858" />);
const iconUser =() => (<Icon name="user" size={30} color="#5f5858" />);
type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={{width:'100%',height:'100%'}}>
          <StatusBar hidden={true}/>

          <Router>
              <Scene key="root">
                  <Scene key="tabBar" activeBackgroundColor='#F3982C' inactiveBackgroundColor='#eeeeee' tabs hideNavBar={true}>
                      <Scene key="home" hideNavBar={true} component={Home} icon={iconHome} title='Trang chủ'/>
                      <Scene key="notification" hideNavBar={true}  icon={iconBell} component={Home} title='Thông báo'/>
                    <Scene key="setting" hideNavBar={true} icon={iconSetting} component={Home} title='Cài đặt'/>
                  </Scene>
                  <Scene key="Album" hideNavBar={true}  component={Album} />
                  <Scene key="VideoDetail" hideNavBar={true}  component={VideoDetail} />
                  <Scene key="PictureDetail" hideNavBar={true}  component={PictureDetail} />
                  <Scene key="PictureList" hideNavBar={true}  component={PictureList} />
                  <Scene key="VideoList" hideNavBar={true}  component={VideoList} />
                  <Scene key="Meal" hideNavBar={true}  component={Meal} />
                  <Scene key="MealDate" hideNavBar={true}  component={MealDate} />
                  <Scene key="Detailmeal" hideNavBar={true}  component={Detailmeal} />

              </Scene>


          </Router>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
