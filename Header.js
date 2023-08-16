
import {  StyleSheet, Text, View } from 'react-native';
export default function Header(){
    return(
        <View style={styles.header}>
            <Text style={styles.title}>MY Todos</Text>
        </View>
    );
}
const styles=StyleSheet.create(
    {
         header:{
            height:80,
            paddingTop:20,
             
            margin:30,
            alignItems:'center',
            borderRadius:10,
            backgroundColor:'coral'
         } ,
         title:{
            fontSize:30,
            color:'white',
            fontFamily:'sans-serif-condensed',
            fontWeight:'bold'
           
         } 
    }

);