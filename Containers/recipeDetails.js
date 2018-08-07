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
import { Card, Button, Icon, Divider, Tile, List, ListItem  } from 'react-native-elements'
import firebase from 'react-native-firebase'

import image1 from '../Images/react.png'

const { height, width } = Dimensions.get('window');

const uri = 'http://cdn.buzz-plus.com/wp-content/uploads/2016/11/ramen-jiro-omiya6.jpg'
class RecipeDetails extends React.Component {
  render() {
    return (
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
            <List>
              <ListItem
                title={'LOL'}
                subtitle={'lol'}
              />
            </List>
          </View>
        </Tile>
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
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#eff6f9',
      left: -10,
      right: - 10
    },
})

export default RecipeDetails
