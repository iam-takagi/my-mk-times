<template>
  <view class="container">
    <nb-content>
      <text class="heading">{{ navigation.getParam("game") }}: 記録 / Your Records</text>

      <view v-for="(cup, i) in info.cups" :key="i" :style="{ margin: 10 }">
        <text>{{ cup.id }}</text>
        <view v-for="(track, i) in cup.tracks" :key="i" :style="{ margin: 10 }">
          <nb-button :onPress="() => goToTrack(track.abbreviation)">
            <nb-text> {{ track.name_en }} - {{ track.name_jp }} - {{ track.abbreviation }} </nb-text>
          </nb-button>
        </view>
      </view>
    </nb-content>
  </view>
</template>

<script>
import info from "../../assets/games/mk8dx/info.json";

export default {
  props: {
    navigation: {
      type: Object,
    },
  },
  data() {
    return {
      info: info,
    };
  },
  methods: {
    goToTrack(track) {
      this.navigation.navigate("Track", {track: track});
    },
  },
};
</script>

<style>
.container {
  align-items: center;
  justify-content: center;
  flex: 1;
}
.heading {
  font-size: 30px;
  font-weight: bold;
  color: darkolivegreen;
  margin: 20px;
}
</style>
