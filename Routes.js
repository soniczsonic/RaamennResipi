import React from 'react';
import { createBottomTabNavigator } from 'react-navigation'
import HomeScreen from './Containers/homeScreen'
import PostScreen from './Containers/postScreen'
import TimeLineScreen from './Containers/timeLineScreen'

export default createBottomTabNavigator({
  Home: HomeScreen,
  Post: PostScreen,
  TimeLine: TimeLineScreen,
});
