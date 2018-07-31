import React from 'react'
import {
  ScrollView,
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  CameraRoll,
  Image
} from 'react-native'
import firebase from 'react-native-firebase'
import ViewPhotos from '../Components/ViewPhotos';

class Post extends React.Component {
  constructor() {
    super()
    this.ref = firebase.firestore().collection('recipe')
    this.unsubscribe = null
    this.state = {
      textInput: '',
      title: '',
      name: '',
      restaurantName: '',
      showPhotoGallery: false,
      photoArray: [],
      image: ''
    }
  }

  componentDidMount = () => {
    console.log(firebase.storage.Native.PICTURES_DIRECTORY_PATH)
    console.log('this state image uri = ' + this.state.image)

  }

  onPress = () => {
    this.ref.add({
      title: this.state.textInput,
      name: this.state.name,
      restaurantName: this.state.restaurantName
    })
  }

  getPhotosFromGallery = () => {
    // CameraRoll.getPhotos({ first: 1000000 })
    // groupTypesで撮ってくる写真の場所を選択できる
    CameraRoll.getPhotos({ first: 1000000, groupTypes: 'Library' })
      .then(res => {
        let photoArray = res.edges;
        this.setState({ showPhotoGallery: true, photoArray: photoArray })
        console.log(photoArray)
        console.log
      })
  }

  setImage = uri => {
    this.setState({ image: uri, showPhotoGallery: false })

  }

  saveInStorage = () => {
    firebase
      .storage()
      .ref('/saveInStorage.png')
      .putFile(
        `${firebase.storage.Native.PICTURES_DIRECTORY_PATH}/IMG_0005.JPG`
      )
      .then(console.log("successed to download image"))
      .catch(console.log("failure"));

  }

  render() {
    if (this.state.showPhotoGallery) {
      return (
        <ViewPhotos
          photoArray={this.state.photoArray}
          setImage={this.setImage}
        />
      )
    }
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
        <Button title='camera roll' onPress={this.getPhotosFromGallery} />
        <Image
          style={{ width: 66, height: 58 }}
          source={{ uri: 'assets-library://asset/asset.JPG?id=ED7AC36B-A150-4C38-BB8C-B6D696F4F2ED&ext=JPG' }}
        />
        <Image
          style={{ width: 66, height: 58 }}
          source={{ uri: this.state.image }}
        />
        <Button title='lol' onPress={console.log(this.state.image)} />
        <Button title='save in storage' onPress={this.saveInStorage} />
      </View>
    )
  }
}

export default Post
