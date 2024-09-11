import React, { FC, useEffect, useState } from 'react';
import {Button, FlatList, StyleSheet, Text, View } from 'react-native';
import song_data from '../data.json'
import { SafeAreaView } from 'react-native-safe-area-context';
import SongCard from './components/song_card';
import SearchBar from './components/search_bar';

const Index: FC = () => {
  const [songData,setSongData]=useState(song_data)
  
  const seperator = ()=><View style={{borderWidth:1,borderColor:"#e0e0e0"}}/>
  const renderSong=({item})=><SongCard song={item } />
  const keyExtractor= (item: { id: string; })=>item.id
  const search=(text:string)=>{
    const filteredList= song_data.filter(data=>{
      return data.title.toLocaleLowerCase().includes(text.toLocaleLowerCase())
    })
    setSongData(filteredList)
  }
  return (
    <SafeAreaView style={styles.container}>
      <SearchBar textChange={search} />
      <FlatList   ItemSeparatorComponent={seperator} keyExtractor={keyExtractor} data={songData}  renderItem={renderSong}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:3
  },
});

export default Index;




