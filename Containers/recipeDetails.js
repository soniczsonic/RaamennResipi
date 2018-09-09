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
import { Card, Button, Icon, Divider, List, ListItem, Tile  } from 'react-native-elements'
import firebase from 'react-native-firebase'

const { height, width } = Dimensions.get('window');

// const uri = 'http://cdn.buzz-plus.com/wp-content/uploads/2016/11/ramen-jiro-omiya6.jpg'

const ingredientData = [{"ingredient": "中華麺", "gram": "300gぐらい"}, {"ingredient": "ニンニク", "gram": "ひとつまみ"}] // arr
const howToCookData = [{"text": "麺を煮ます"}, {"text": "野菜を切ります"}, {"text": "二つを混ぜ合わせます"}] // arr
const tipsData = "ニンニクをこれでもかと振りかけます" // string
class RecipeDetails extends React.Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Tile
            imageSrc={require('../Images/react.png')}
            title="美味しいラーメン"
            contentContainerStyle={{ height: 70 }}
          >
            <View
              style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}
            >
              <Text>Caption</Text>
              <Text>Caption</Text>
            </View>
            <Text style={styles.subHeader}>材料</Text>
            <View style={styles.ingTextWrapper}>
              <Text style={styles.ingTextLeft}>中華麺</Text>
              <Text style={styles.ingTextRight}>300g</Text>
            </View>
            <Text style={styles.subHeader}>作り方</Text>
            <FlatList
              data={howToCookData}
              renderItem={item => <Text style={styles.subHeader}>{item.text}</Text>}
            />
            <Text style={styles.subHeader}>1.麺を煮ます</Text>
            <Text style={styles.subHeader}>2.野菜を切ります。</Text>
            <Text style={styles.subHeader}>3.二つを混ぜ合わせます。</Text>
            <Text style={styles.subHeader}>コツ・ポイント</Text>
            <Text style={styles.tipsText}>ニンニクチップをこれでもかと振りかけます。</Text>
          </Tile>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  cardText: {
    flexDirection: 'row'
  },
  subHeader: {
    alignSelf: "center"
  },
  ingTextWrapper: {
    flexDirection: "row",
  },
  ingTextLeft: {
    alignSelf: "flex-start"
  },
  ingTextRight: {
    alignSelf: "flex-end"
  },
  ingredientLeftText: {
    justifyContent: 'center'
  },
  tipsText: {
    alignSelf: "center"
  },
  title: {},
  name: {},
  restaurantName: {},
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eff6f9',
    left: -10,
    right: - 10
  }
})

export default RecipeDetails

