import React from 'react'
import { Text, View, FlatList, StyleSheet, Button } from 'react-native'
import firebase from 'react-native-firebase'


// title, name, restaurantName, 顔写真が必要

const uri = 'http://cdn.buzz-plus.com/wp-content/uploads/2016/11/ramen-jiro-omiya6.jpg'
const data = [
  { title: 'ラーメン', name: '蒲谷　太樹', restaurantName: '博多一風堂', image: 'xxx' },
  { title: 'ラーメン', name: '蒲谷　太樹', restaurantName: '博多一風堂', image: 'xxx' },
  { title: 'ラーメン', name: '蒲谷　太樹', restaurantName: '博多一風堂', image: 'xxx' }
]

export default class TimeLineScreen extends React.Component {

  componentDidMount = async () => {
    // const storage = firebase.storage();
    // const sessionId = new Date().getTime();
    // const imageRef = storage.ref('images').child(`${sessionId}`);
    // imageRef.putFile(uri);
    // const imageRef = firebase.storage.ref('images')
    // console.log(imageRef)
    // imageRef.ref('../Images/react.png')
    //   .putFile(
    //     '../Images/react.png'
    //   )
    //   .then(console.log('success'))
    //   .catch(console.log('failure'));
    firebase
      .storage()
      .ref('/heart3.png')
      .putFile(
        `${firebase.storage.Native.DOCUMENT_DIRECTORY_PATH}/ok.jpeg`
      )
      .then(console.log("successed to download image"))
      .catch("failure");

    const obj = firebase.storage.Native.DOCUMENT_DIRECTORY_PATH
    console.log(obj)
  }

  onPress = async () => {
    // firebase
    //   .storage()
    //   .ref('./images')
    //   .putFile(, { contentType: 'image/jpeg' })
    //   .then(uploadedFile => {
    //     alert("Firebase profile photo uploaded successfully")
    //   })
    //   .catch(error => {
    //     alert("Firebase profile upload failed: " + error)
    //   })
    const imageRef = await firebase.storage().ref('/images').child('/nice.png').getDownloadURL().then((url) => {
      console.log(url);
    });
    console.log(imageRef)
    imageRef.putFile(
      '../Images/react.png'
    )
      .then(console.log('success'))
      .catch(console.log('failure'));
  }

  renderItem = ({ item }) => (
    <React.Fragment>
      <Button title={'click'} onPress={this.onPress} />
      <Text style={styles.title}>{item.title}</Text>
      <View style={styles.cardText}>
        <Text>face Image</Text>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.restaurantName}>{item.restaurantName}</Text>
      </View>
    </React.Fragment>
  )

  render() {
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
