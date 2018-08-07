import React, {Component} from 'react';
import {TabNavigator, createBottomTabNavigator, StackNavigator } from 'react-navigation'
import HomeScreen from './Containers/homeScreen'
import PostScreen from './Containers/postScreen'
import TimeLineScreen from './Containers/timeLineScreen'
import RecipeDetailsScreen from './Containers/recipeDetails'

const HomeSubNav = StackNavigator(
  {
  HomeScreen: HomeScreen,
  RecipeDetailsScreen: RecipeDetailsScreen
  }
)
const PostSubNav = StackNavigator(
  {
    PostScreen: PostScreen
  }
)

const TimeLineSubNav = StackNavigator(
  {
    TimeLineScreen: TimeLineScreen
  }
)


export default TabNavigator(
  {
    Home: HomeSubNav,
    Post: PostSubNav,
    TimeLine: TimeLineSubNav,
  }
);
