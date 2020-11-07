<template>
  <app-navigator></app-navigator>
</template>

<script>
import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator,
  createMaterialTopTabNavigator
} from "vue-native-router";

import HomeScreen from "./screens/home";
import RecordsScreen from "./screens/records";
import RecordScreen from "./screens/record";

const StackNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Record: {
      screen: RecordScreen,
      navigationOptions: ({navigation}) => ({
        title : navigation.getParam("game_display_name")
      })
    },
    Records: {
      screen: RecordsScreen,
      navigationOptions: ({navigation}) => ({
        title: navigation.getParam("game_display_name")
      })
    },
  },
);

const AppNavigator = createAppContainer(StackNavigator);

export default {
  components: { AppNavigator }
}
</script>
