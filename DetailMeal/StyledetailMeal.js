import { StyleSheet } from 'react-native';

const  styles=StyleSheet.create({
    headerContaner:{
        flex: 0.8,
        backgroundColor: '#EC870E',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
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
    contentContainer:{
        flex:8.2,
        backgroundColor: '#fff',
        justifyContent: 'center',
        marginLeft:10,
        marginRight: 10,
        marginTop: 10
    },
    btngopy:{
        flex:0.7,
        backgroundColor:'#33B3FB',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        marginBottom: 50

    },
    txtgopy:{
        textAlign:'center',
        color:'white',
        fontSize: 16,
        fontWeight: 'bold'
    },
    phandaumonan:{
        flex:1,
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center'
    },
    phanhinhanh:{
        flex:5,

    },
    hinhanh:{
        width:'100%',
        height:210,
        resizeMode: 'contain'
    },
    congthuc:{
        flex:4,
        marginLeft:20

    }
});
export default styles;
