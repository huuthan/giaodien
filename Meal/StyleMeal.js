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
        resizeMode:'contain'
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
        backgroundColor: 'white'
    },
    chooseDate:{
        flex:6,
        backgroundColor:'#00B2BF',
        height:'70%',
        borderRadius: 90,
        borderWidth: 1,
        justifyContent:'center',
        alignItems:'center'
    },
    textDate:{
        color: 'white',
        alignItems:'center',
        fontWeight: 'bold',
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
        marginBottom: 5,
        backgroundColor:'#A0A0A0',
        height:HEIGHT/6
    },
    dateinweek:{
        flex:1.5,
        backgroundColor:'#A0A0A0',
        height: '100%',
        textAlignVertical:'center'
    }


});
export default styles;
