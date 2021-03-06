import React, {Component} from 'react'
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native'
import { Card, Divider } from 'react-native-elements'
import firebase from 'react-native-firebase'

const { width } = Dimensions.get('window');

class Home extends Component {
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

  componentWillReceiveProps = (nextProps) =>
    console.log(nextProps)

  onPress = () =>
    this.props.navigation.navigate({routeName: 'RecipeDetailsScreen', key: 'RecipeDetailsScreen'})

  renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={this.onPress} style={{ width: width  /2 }}>
        <Card
          containerStyle={{ width: width /2, padding: 0 }}
          image={require('../Images/react.png')}
        >
          <View style={{left: 0}}>
            <Text style={{ color: '#8bcc57', fontWeight: 'bold', fontSize: 20 }}>{item.title}</Text>
            <Text style={{ marginBottom: 10 }}>
            {item.description}
          </Text>
            <View style={{ flexDirection: "row" }}>
              <Text>アイコン</Text>
              <Text>{item.name}</Text>
            </View>
            <Divider style={{ backGroundColor: 'black' }} />
            <Text>2018/5/6</Text>
          </View>
        </Card >
      </TouchableOpacity>
    )
  }

  
  render() {
    if (this.state.loading) return null
    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false} >
          <FlatList
            data={this.state.recipes}
            keyExtractor={(item, index) => index}
            renderItem={this.renderItem}
            numColumns={2}
            horizontal={false}
            contentContainerStyle={styles.container}
          />
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eff6f9',
    left: -10,
    right: - 10
  },
  cardText: {
    flexDirection: 'row'
  },
  title: {},
  name: {},
  restaurantName: {},
})

export default Home
