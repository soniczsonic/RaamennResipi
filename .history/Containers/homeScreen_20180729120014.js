import React from 'react'
import {
  ScrollView,
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  StyleSheet
} from 'react-native'
import { Card, ListItem, Button } from 'react-native-elements'
import firebase from 'react-native-firebase'

import image1 from '../Images/react.png'



const uri = 'http://cdn.buzz-plus.com/wp-content/uploads/2016/11/ramen-jiro-omiya6.jpg'
class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      recipes: []
    }
  }

  // ラーメンの画像は以下を利用する。
  componentDidMount = async () => {
    const recipes = await firebase.firestore().collection('recipe').get()
    console.log(recipes)
    const newArray = recipes._docs.map(x => x._data)
    console.log(newArray)
    this.setState({ recipes: newArray })
  }

  renderItem = ({ item }) => {
    return (
      // <Cardを使うと2columnが動かなかった。単純にカードが大きすぎたかも>(動いているが、カードが大きいせいで見えない。)
      <Card
        title={item.name}
      >
        <View>
          <Image
            source={require('../Images/react.png')}
          />
          <Text style={{ marginBottom: 10 }}>
            The idea with React Native Elements is more about component structure than actual design.
      </Text>
          <Button
            backgroundColor='#03A9F4'
            // fontFamily='Lato'
            buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
            title='VIEW NOW' />

        </View>
      </Card >
    )
  }

  render() {
    if (this.state.loading) {
      return null // or render a loading icon
    }
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={this.state.recipes}
          keyExtractor={(item, index) => item.id}

          renderItem={this.renderItem}
          numColumns={2}
          horizontal={false}
          contentContainerStyle={styles.container}
        />
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
  restaurantName: {},
  container: {}
})

export default Home
