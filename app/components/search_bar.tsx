import React, { FC, useState } from 'react';
import { StyleSheet, Text, TextInput } from 'react-native';

interface SearchBarProps{
  textChange: (text:string)=>void
}

const SearchBar: FC<SearchBarProps> = ({textChange}) => {
  return (
    <TextInput placeholder='Aramak için birşeyler yazınız...' style={styles.bar} onChangeText={textChange}/>
  );
};

const styles = StyleSheet.create({
  bar: {
    backgroundColor:'#e0e0e0',
    padding:8,
    borderRadius:10,
    margin:5
  }
});

export default SearchBar;