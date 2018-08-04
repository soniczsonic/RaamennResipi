import React from 'react'
import {
  ScrollView,
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity
} from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import firebase from 'react-native-firebase'

import image1 from '../Images/react.png'

const { height, width } = Dimensions.get('window');

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
      <TouchableOpacity>
        <Card
          containerStyle={{ width: width * 2 / 5 }}
          image={require('../Images/react.png')}
        >
          <View>
            <Text style={{ color: '#8bcc57', fontWeight: 'bold', fontSize: 20 }}>{item.title}</Text>
            <Text style={{ marginBottom: 10 }}>
              description
          </Text>
            <View style={{ flexDirection: "row" }}>
              <Text>アイコン</Text>
              <Text>{item.name}</Text>
            </View>
            <Text>2018/5/6</Text>

          </View>
        </Card >
      </TouchableOpacity>
    )
  }

  render() {
    if (this.state.loading) {
      return null // or render a loading icon
    }
    return (
      <View style={{ flex: 1, backgroundColor: '#eff6f9' }}>
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
