import React, { FC, useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
interface Song {
  id: string
  title: string
  artist: string
  album: string
  year: number
  isSoldOut: boolean
  imageUrl: string
}

interface SongCardProps {
  song: Song
}

const SongCard: FC<SongCardProps> = ({ song }) => {
  const [state, setState] = useState<any>(0)

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: song.imageUrl }} />
      <View style={styles.body}>
        <Text style={styles.song_title}>{song.title}</Text>
        <View style={styles.content}>
               <Text style={styles.song_artist}>{song.artist}</Text>
               <Text style={styles.song_year}>{song.year}</Text>
        </View>
        {
          song.isSoldOut&&(<Text style={styles.soldOut}>Tükendi</Text>)
        }

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent:"center",
    padding:5
  },
  body: {
     flex:1,
     flexDirection: 'column',
     padding:10
  },
  content: {
    flexDirection: 'row',
    flex:1,
    padding:2
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  song_title: {
    fontSize: 22,
    fontWeight:"bold"
  },
  song_artist:{
     fontWeight:"600"
  },
  song_year:{
     marginLeft:10,
     fontWeight:'600',
     color:"gray"
  },
  soldOut:{
     borderWidth:1,
     borderColor:"red",
     alignSelf:"flex-end",
     color:'red',
     fontWeight:'bold',
     padding:3,
     borderRadius:5
  }
})

export default SongCard
