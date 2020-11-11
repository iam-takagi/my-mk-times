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
import CreatePresetScreen from "./screens/preset/create";
import LoadPresetScreen from "./screens/preset/load";
import RenamePresetScreen from "./screens/preset/rename";

const StackNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Record: {
      screen: RecordScreen,
      navigationOptions: ({navigation}) => ({
        title : navigation.getParam("game") + " - " + navigation.getParam("preset_name")
      })
    },
    Records: {
      screen: RecordsScreen,
      navigationOptions: ({navigation}) => ({
        title: navigation.getParam("game") + " - " + navigation.getParam("preset_name")
      })
    },
    CreatePreset: {
      screen: CreatePresetScreen,
      navigationOptions: ({navigation}) => ({
        title: 'Create Preset - プリセット作成'
      })
    },
    LoadPreset: {
      screen: LoadPresetScreen,
      navigationOptions: ({navigation}) => ({
        title: 'Load Preset - プリセット読込'
      })
    },
    RenamePreset: {
      screen: RenamePresetScreen,
      navigationOptions: ({navigation}) => ({
        title: 'Rename Preset - プリセット名変更'
      })
    },
  },
);

const AppNavigator = createAppContainer(StackNavigator);

export default {
  components: { AppNavigator }
}
</script>
