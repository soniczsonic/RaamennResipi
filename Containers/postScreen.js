import React from 'react'
import {
  ScrollView,
  View,
  Text,
  TextInput,
  Button,
  FlatList
} from 'react-native'
import firebase from 'react-native-firebase'

class Post extends React.Component {
  constructor() {
    super()
    this.ref = firebase.firestore().collection('recipe')
    this.unsubscribe = null
    this.state = {
      textInput: '',
      title: '',
      name: '',
      restaurantName: ''
    }
  }

  componentDidMount = async () => {
    const city = await firebase.firestore().collection('cities').doc('LA').get()
    alert(city)
    console.log(city)
    console.log(city._data)
  }

  onPress = () => {
    this.ref.add({
      title: this.state.textInput,
      name: this.state.name,
      restaurantName: this.state.restaurantName
    })
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <TextInput
          placeholder={'タイトル'}
          value={this.state.textInput}
          onChangeText={title => this.setState({ title: title })}
        />
        <TextInput
          placeholder={'店主の名前'}
          value={this.state.textInput}
          onChangeText={name => this.setState({ name: name })}
        />
        <TextInput
          placeholder={'お店の名前'}
          value={this.state.textInput}
          onChangeText={restaurantName => this.setState({ restaurantName: restaurantName })}
        />
        <Text onPress={this.onPress}>Submit</Text>
      </View>
    )
  }
}

export default Post
