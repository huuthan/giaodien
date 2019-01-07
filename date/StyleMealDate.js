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

});
export default styles;
