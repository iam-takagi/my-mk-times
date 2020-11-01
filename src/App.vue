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
import SettingsScreen from "./screens/settings";
import TrackScreen from "./screens/track";

const IOSTabs = createBottomTabNavigator(
  {
    Records: RecordsScreen,
    Settings: SettingsScreen
  }
);

const AndroidTabs = createMaterialTopTabNavigator(
  {
    Records: RecordsScreen,
    Settings: SettingsScreen
  }
);

const StackNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Track: TrackScreen,
    AndroidTabs,
    IOSTabs
  }
);

const AppNavigator = createAppContainer(StackNavigator);

export default {
  components: { AppNavigator }
}
</script>
