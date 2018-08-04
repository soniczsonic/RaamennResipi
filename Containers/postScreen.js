import React from 'react'
import {
  ScrollView,
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  CameraRoll,
  Image,
  StyleSheet,
  Dimensions,
  Alert
} from 'react-native'
import firebase from 'react-native-firebase'
import ViewPhotos from '../Components/ViewPhotos';

const { height, width } = Dimensions.get('window');
class Post extends React.Component {
  constructor() {
    super()
    this.ref = firebase.firestore().collection('recipe')
    this.unsubscribe = null
    this.state = {
      textInput: '',

      // textInput
      title: '',
      description: '',
      howToCook: '',
      ingredients: '',
      tips: '',
      date: '',
      

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
      description: this.state.title,
      howToCook: this.state.howToCook,
      ingredients: this.state.ingredients,
      tips: this.state.tips,
      date: Date.now
    })
  }

  getPhotosFromGallery = () => {
    // CameraRoll.getPhotos({ first: 1000000 })
    // groupTypesで撮ってくる写真の場所を選択できる
    CameraRoll.getPhotos({ first: 1000000, groupTypes: 'all' })
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
      <View style={styles.container}>
      <View style={{padding: 20}}/>
      <View style={styles.subContainer}>
        <Text style={styles.title}>レシピのタイトル</Text>
      </View>
        <TextInput
          placeholder={'例)　冷やし豚骨ラーメン'}
          value={this.state.textInput}
          onChangeText={title => this.setState({ title: title })}
          multiline
          style={styles.textInput}
        />
      <Button title='camera roll' onPress={this.getPhotosFromGallery} />
      <Image
          style={{ width: 66, height: 58 }}
          source={{ uri: this.state.image }}
        />
      <View style={styles.subContainer}>
        <Text style={styles.title}>レシピの紹介文</Text>
      </View>
        <TextInput
          placeholder={'例)　隠し味の焦がし醤油が、香り高いです。'}
          value={this.state.textInput}
          onChangeText={title => this.setState({ title: title })}
          multiline
          placeholderTextColor='green'
        />
      <View style={styles.subContainer}>
        <Text style={styles.title}>作り方</Text>
      </View>
        <TextInput
          placeholder={'例）ラーメンはスープが命、九州から取り寄せた醤油を...'}
          value={this.state.textInput}
          onChangeText={val => this.setState({ howToCook: val })}
          returnKeyType={'google'}
        />
      <View style={styles.subContainer}>
        <Text style={styles.title}>材料</Text>
      </View>
        <TextInput
          placeholder={'例）にんにく　２かけ,　煮干し 300グラム'}
          value={this.state.textInput}
          onChangeText={val => this.setState({ ingredients: val })}
          multiline
        />
      <View style={styles.subContainer}>
        <Text style={styles.title}>こつ・ポイント</Text>
      </View>
        <TextInput
          placeholder={'大きめの鍋を使う。'}
          value={this.state.textInput}
          onChangeText={val => this.setState({ tips: val })}
          multiline
        />
        <Text onPress={this.onPress}>Submit</Text>
        <Button title='lol' onPress={console.log(this.state.image)} />
        <Button title='save in storage' onPress={this.saveInStorage} />

        <Button title='投稿する' onPress={() => Alert.alert(`おめでとうございます。\nレシピが公開されました。`)} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  cardText: {
    flexDirection: 'row'
  },
  title: {
    alignItems: 'flex-start'
  },
  name: {},
  restaurantName: {},
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eff6f9',
    left: -10,
    right: - 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  subContainer: {
    width: width,
    height: 30,
    backgroundColor:'gray',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textInput: {
    width: width * 7 / 8,
    height: 50
  }
})

export default Post
