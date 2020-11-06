<template>
  <view class="container">
    <text class="heading">My MK Times</text>
    <text class="text">記録を保存しましょう - Saving records</text>
    <text class="text">ゲームタイトルを選択 - Please select a game title</text>

    <nb-button
      block
      danger
      :style="{ margin: 10 }"
      :onPress="() => goToIOSTabNavigator('mkw', 'MKW')"
    >
      <nb-text>MKW</nb-text>
    </nb-button>

    <nb-button
      block
      danger
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
      :onPress="() => goToIOSTabNavigator('mk8dx-150cc-nita', 'MK8DX 150cc (NITA)')"
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
      :onPress="() => goToIOSTabNavigator('mk8dx-200cc-nita', 'MK8DX 200cc (NITA)')"
    >
      <nb-text>MK8DX 200cc (NITA)</nb-text>
    </nb-button>

  </view>
</template>

<script>
export default {
  props: {
    navigation: { type: Object },
  },
  methods: {
    goToIOSTabNavigator: function (game, game_display_name) {
      this.navigation.navigate("Records", { game: game, game_display_name: game_display_name });
    },
  },
};
</script>

<style>
.container {
  align-items: center;
  justify-content: center;
  flex: 0;
  padding: 20px;
}
.heading {
  font-size: 30px;
  font-weight: bold;
  color: darkolivegreen;
  margin: 10px;
}
.text {
  text-align: center;
  margin: 10px;
}
</style>
