import React from 'react'
import { Text, View, FlatList, StyleSheet } from 'react-native'

// title, name, restaurantName, 顔写真が必要

const data = [
  { title: 'ラーメン', name: '蒲谷　太樹', restaurantName: '博多一風堂', image: 'xxx' },
  { title: 'ラーメン', name: '蒲谷　太樹', restaurantName: '博多一風堂', image: 'xxx' },
  { title: 'ラーメン', name: '蒲谷　太樹', restaurantName: '博多一風堂', image: 'xxx' }
]

export default class TimeLineScreen extends React.Component {
  renderItem = ({ item }) => (
    <React.Fragment>
      <Text style={styles.title}>{item.title}</Text>
      <View style={styles.cardText}>
        <Text>face Image</Text>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.restaurantName}>{item.restaurantName}</Text>
      </View>
    </React.Fragment>
  )

  render () {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <FlatList data={data} renderItem={this.renderItem} />
        <Text>TimeLine!</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  cardText: {
    flexDirection: 'row'
  },
  title: {},
  name: {},
  restaurantName: {}
})
