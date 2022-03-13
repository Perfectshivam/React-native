import { View, Text } from 'react-native'
import React, { useState } from 'react';

const UserList=()=>{
    const [users,setUsers]=useState([
        {name:'Shivam', key:'1'},
        {name:'Shiva', key:'2'},
        {name:'Shiv', key:'3'},
        {name:'am', key:'4'},
        {name:'nndshh',key:"5"},
        {name:'gdgdg',key:'6'}
    ])
}

const onRefresh=()=>
{
    setRefresh(true);
}

const FlatList = () => {
  return (
    <View>
      <Text>FlatList</Text>
    </View>
  )
}

export default FlatList