import {Dimensions, StyleSheet} from 'react-native';
const  {height: HEIGHT,width:WIDTH} = Dimensions.get('window')

const  styles=StyleSheet.create({
    headerContaner:{
        flex: 0.8,
        backgroundColor: '#EC870E',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image:{
        flex: 1,
        marginLeft: 3,
        width:50,
        height: 50,
        resizeMode:'contain',
    },
    image1:{
        flex: 1,
        marginLeft: 3,
        width:40,
        height: 40,
        resizeMode:'contain',
        tintColor:'#33B3FB',
    },
    textheader:{
        color: 'white',
        flex: 9,
        textAlign:'center',
        fontSize:19,
        fontWeight: 'bold'
    },
    dateContaner:{
        flex:1.2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    chooseDate:{
        flex:6,
        backgroundColor:'#33B3FB',
        height:50,
        borderRadius: 90,
        justifyContent:'center',
        alignItems:'center'
    },
    textDate:{
        color: 'white',
        alignItems:'center',
        fontSize: 17
    },
    content:{
        flex:8,
        backgroundColor:'white'
    },
    ItemContaner:{
        marginLeft:5,
        marginRight:5,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginBottom: 9,
        backgroundColor:'#33B3FB',
        height:HEIGHT/6,
        borderRadius: 10,
        borderWidth: 1.5,
        borderColor:'#33B3FB',
    },
    dateinweek:{
        flex:1.7,
        // backgroundColor:'#64c3fb',
        // height: '100%',
        textAlignVertical:'center',
        color:'#fff',
        fontSize:16



    }


});
export default styles;
