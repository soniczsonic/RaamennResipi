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
import Todo from './todo' // we'll create this next

import * as Animatable from 'react-native-animatable'

class Home extends React.Component {
  constructor() {
    super()
    this.ref = firebase.firestore().collection('todos')
    this.unsubscribe = null
    this.state = {
      textInput: '',
      loading: true,
      todos: [],
      hidden: false,
      recipes: []
    }
  }

  // ラーメンの画像は以下を利用する。
  // http://cdn.buzz-plus.com/wp-content/uploads/2016/11/ramen-jiro-omiya6.jpg

  componentDidMount = async () => {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate)
    const recipes = await firebase.firestore().collection('cities').get()
    console.log(recipes._docs[0]._data)
    const newRecipes = recipes._docs.map(x => x._data)
    console.log(newRecipes)
    this.setState({ recipes: newRecipes })
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  onCollectionUpdate = querySnapshot => {
    const todos = []
    querySnapshot.forEach(doc => {
      const { title, complete } = doc.data()
      todos.push({
        key: doc.id,
        doc, // DocumentSnapshot
        title,
        complete
      })
    })
    this.setState({
      todos,
      loading: false
    })
  }

  updateTextInput(value) {
    this.setState({ textInput: value })
  }

  addTodo() {
    this.ref.add({
      title: this.state.textInput,
      complete: false
    })
    this.setState({
      textInput: ''
    })
  }

  render() {
    if (this.state.loading) {
      return null // or render a loading icon
    }
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={this.state.recipes}
          renderItem={({ item }) => <Text>{item.name}</Text>}
        />
        <FlatList
          data={this.state.todos}
          renderItem={({ item }) => <Todo {...item} />}
        />
        <TextInput
          placeholder={'Add TODO'}
          value={this.state.textInput}
          onChangeText={text => this.updateTextInput(text)}
        />
        <Button
          title={'Add TODO'}
          disabled={!this.state.textInput.length}
          onPress={() => this.addTodo()}
        />
      </View>
    )
  }
}

export default Home
