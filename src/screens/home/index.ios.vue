<template>
  <nb-container class="container">
    <text class="heading">My MK Times</text>
    <text class="text"
      >タイムアタック記録管理アプリ - Records management app.</text
    >

    <nb-content>
      <nb-button
        block
        warning
        :style="{ margin: 10 }"
        :onPress="() => goCreatePreset()"
      >
        <nb-text>Create Preset</nb-text>
      </nb-button>

      <nb-button
        block
        success
        :style="{ margin: 10 }"
        :onPress="() => goLoadPreset()"
      >
        <nb-text>Load Preset</nb-text>
      </nb-button>

      <nb-button
        block
        danger
        :style="{ margin: 10 }"
        :onPress="() => deleteAll()"
      >
        <nb-text>Delete Records</nb-text>
      </nb-button>

      <!--nb-button
        block
        dark
        :style="{ margin: 10 }"
        :onPress="() => goToIOSTabNavigator('mkds', 'MKDS')"
      >
        <nb-text>MKDS</nb-text>
      </nb-button>

      <nb-button
        block
        dark
        :style="{ margin: 10 }"
        :onPress="() => goToIOSTabNavigator('mkds-nita', 'MKDS (NITA)')"
      >
        <nb-text>MKDS (NITA)</nb-text>
      </nb-button>

      <nb-button
        block
        danger
        :style="{ margin: 10 }"
        :onPress="() => goToIOSTabNavigator('mk7', 'MK7')"
      >
        <nb-text>MK7</nb-text>
      </nb-button>

      <nb-button
        block
        danger
        :style="{ margin: 10 }"
        :onPress="() => goToIOSTabNavigator('mk7-nita', 'MK7 (NITA)')"
      >
        <nb-text>MK7 (NITA)</nb-text>
      </nb-button>
    
      <nb-button
        block
        success
        :style="{ margin: 10 }"
        :onPress="() => goToIOSTabNavigator('mkw', 'MKW')"
      >
        <nb-text>MKW</nb-text>
      </nb-button>

      <nb-button
        block
        success
        :style="{ margin: 10 }"
        :onPress="() => goToIOSTabNavigator('mkw-nita', 'MKW (NITA)')"
      >
        <nb-text>MKW (NITA)</nb-text>
      </nb-button>

      <nb-button
        block
        warning
        :style="{ margin: 10 }"
        :onPress="() => goToIOSTabNavigator('mk8u', 'MK8U')"
      >
        <nb-text>MK8U</nb-text>
      </nb-button>

      <nb-button
        block
        warning
        :style="{ margin: 10 }"
        :onPress="() => goToIOSTabNavigator('mk8u-nita', 'MK8U (NITA)')"
      >
        <nb-text>MK8U (NITA)</nb-text>
      </nb-button>

      <nb-button
        block
        primary
        :style="{ margin: 10 }"
        :onPress="() => goToIOSTabNavigator('mk8dx-150cc', 'MK8DX 150cc')"
      >
        <nb-text>MK8DX 150cc</nb-text>
      </nb-button>

      <nb-button
        block
        primary
        :style="{ margin: 10 }"
        :onPress="
          () => goToIOSTabNavigator('mk8dx-150cc-nita', 'MK8DX 150cc (NITA)')
        "
      >
        <nb-text>MK8DX 150cc (NITA)</nb-text>
      </nb-button>

      <nb-button
        block
        primary
        :style="{ margin: 10 }"
        :onPress="() => goToIOSTabNavigator('mk8dx-200cc', 'MK8DX 200cc')"
      >
        <nb-text>MK8DX 200cc</nb-text>
      </nb-button>

      <nb-button
        block
        primary
        :style="{ margin: 10 }"
        :onPress="
          () => goToIOSTabNavigator('mk8dx-200cc-nita', 'MK8DX 200cc (NITA)')
        "
      >
        <nb-text>MK8DX 200cc (NITA)</nb-text>
      </nb-button-->
    </nb-content>
  </nb-container>
</template>

<script>
import { AsyncStorage, Alert } from "react-native";
export default {
  props: {
    navigation: { type: Object },
  },

  data() {
    return {
      presets: [],
    };
  },
  methods: {
    goTo: function (game, game_display_name) {
      this.navigation.navigate("Records", {
        game: game,
        game_display_name: game_display_name,
      });
    },
    goCreatePreset: function () {
      this.navigation.navigate("CreatePreset", {});
    },
    goLoadPreset: function () {
      this.navigation.navigate("LoadPreset", {});
    },
    async deleteAll() {
      Promise.all(
        AsyncStorage.getAllKeys().then((ks) => {
          this.presets = ks;
        })
      );

      if (this.presets.length <= 0)
        return Alert.alert(
          "Record is empty.",
          "記録が見つかりません",
          [
            {
              text: "OK",
            },
          ],
          { cancelable: false }
        );

      Alert.alert(
        "Really?",
        "記録を削除しますか？",
        [
          {
            text: "Cancel",
            style: "cancel",
          },
          {
            text: "OK",
            onPress: async () => {
              await AsyncStorage.clear();
              Alert.alert(
                "All Delete!",
                "データを削除しました",
                [
                  {
                    text: "OK",
                  },
                ],
                { cancelable: false }
              );
            },
          },
        ],
        { cancelable: false }
      );
    },
  },
};
</script>

<style>
.container {
  flex:1;
  margin-top: 50px;
}
.heading {
  font-size: 30px;
  font-weight: bold;
  color: darkolivegreen;
  text-align: center;
  margin: 10px;
}
.text {
  text-align: center;
  margin: 10px;
}
</style>
