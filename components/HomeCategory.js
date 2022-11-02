import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'

const HomeCategory = () => {
  return (
    <View style={styles.container}>
      <FlatList horizontal showsHorizontalScrollIndicator={false}
      data={[
          {key: 'Devin'},
          {key: 'Dan'},
          {key: 'Dominic'},
          {key: 'Jackson'},
          {key: 'James'},
          {key: 'Joel'},
          {key: 'John'},
          {key: 'Jillian'},
          {key: 'Jimmy'},
          {key: 'Julie'},
          {key: 'Devin'},
          {key: 'Dan'},
          {key: 'Dominic'},
          {key: 'Jackson'},
          {key: 'James'},
          {key: 'Joel'},
          {key: 'John'},
          {key: 'Jillian'},
          {key: 'Jimmy'},
          {key: 'Julie'},
        ]} 
        renderItem={({item}) => <Text style={styles.items}>{item.key}</Text>}
        />
    </View>
  )
}

export default HomeCategory

const styles = StyleSheet.create({
    items:{
        padding : 15,
        borderWidth:2,
        borderStyle : 'dotted',
        marginBottom:2,
        marginRight:3,
    },
    container:{
        alignItems:'center',
        justifyContent:'center',
        marginTop:'20%'
    }
})