<template>

  <view class="container">

    <nb-content>
     

      <view v-for="(cup, i) in info.cups" :key="i" :style="{ marginTop: 20 }">
        <view
          v-for="(track, i) in cup.tracks"
          :key="i"
          :style="{ marginTop: 10 }"
        >
          <nb-button
            :onPress="
              () =>
                goToTrack(
                  navigation.getParam('game'),
                  navigation.getParam('game_display_name'),
                  track
                )
            "
            block
          >
            <nb-text :style="{ fontSize: 10 }">
              {{ track.name_en }} - {{ track.name_jp }} - {{ track.abbreviation }}
            </nb-text>
          </nb-button>
        </view>
      </view>
    </nb-content>
  </view>
</template>

<script>
export default {
  props: {
    navigation: {
      type: Object,
    },
  },
  data() {
    return {
      info: null,
    };
  },
  created() {
    if (this.navigation.getParam("game").includes("mk8")) {
      this.info = require("../../assets/games/mk8/info.json");
    } else if(this.navigation.getParam("game").includes("mkw")) {
      this.info = require("../../assets/games/mkw/info.json");
    } else if(this.navigation.getParam("game").includes("mk7")) {
      this.info = require("../../assets/games/mk7/info.json");
    } else if(this.navigation.getParam("game").includes("mkds")) {
      this.info = require("../../assets/games/mkds/info.json");
    }
  },
  methods: {
    goToTrack(game, game_display_name, track) {
      this.navigation.navigate("Record", {
        game: game,
        game_display_name: game_display_name,
        track: track,
      });
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
  font-size: 26px;
  font-weight: bold;
  color: darkolivegreen;
  margin-top: 20px;
  text-align: center;
}
</style>
