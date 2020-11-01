<template>
  <view class="container">
    <text class="heading">My MK Times</text>
    <text class="text">記録を保存しましょう - Saving records</text>
    <text class="text">ゲームタイトルを選択 - Please select a game title</text>

      <nb-button block info :style="{ margin: 10 }" :onPress="() => goToIOSTabNavigator('mk8u')">
        <nb-text>MK8U - Records</nb-text>
      </nb-button>

      <nb-button block primary :style="{ margin: 10 }" :onPress="() => goToIOSTabNavigator('mk8dx-150cc')">
        <nb-text>MK8DX 150cc - Records</nb-text>
      </nb-button>

       <nb-button block primary :style="{ margin: 10 }" :onPress="() => goToIOSTabNavigator('mk8dx-200cc')">
        <nb-text>MK8DX 200cc - Records</nb-text>
      </nb-button>
  </view>
</template>

<script>
import Store from '../../../store';
export default {
  props: {
    navigation: { type: Object }
  },
  methods: { 
    setGame : function(game) {
        Store.dispatch('setGame', game)
    },
    goToIOSTabNavigator : function(game) {
      this.setGame(game)
      this.navigation.navigate("IOSTabs", {game: game})
    }
  }
}
</script>

<style>
.container {
  align-items: center;
  justify-content: center;
  flex: 0;
  padding: 40px;
}
.heading {
  font-size: 30px;
  font-weight: bold;
  color: darkolivegreen;
  margin: 20px;
}
.text {
  text-align: center;
  margin: 10px;
}
</style>
