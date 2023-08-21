import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
export default function AddTodo({submitHandler}){
    const [text,setText]=useState('');
    const changeHandler=(val)=>{
        setText(val);
    }
    return(
<View>
    <TextInput
    style={styles.input}
    placeholder='new todo...'
    onChangeText={changeHandler}
    />
    <View style={styles.button}>
    <Button  title='ADD'
      color='coral'
      onPress={()=>submitHandler(text)}
     
    />
    </View>

   
</View>
    );
}
const styles=StyleSheet.create(
    {
        input:{
            marginBottom:10,
            paddingHorizontal:8,
            paddingVertical:6,
            borderBottomWidth:1,
            borderBottomColor:'#ddd',
            marginHorizontal:8

        },
        button:{
            marginTop:10,
            marginHorizontal:50
        }
    }
)
