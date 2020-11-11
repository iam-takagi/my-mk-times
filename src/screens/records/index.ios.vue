<template>
  <view class="container">
    <nb-content>
      <view v-for="(cup, i) in game.cups" :key="i" :style="{ marginTop: 20 }">
        <view v-for="(track, i) in cup.tracks" :key="i" :style="{ margin: 7 }">
          <nb-button
            :onPress="
              () =>
                goToTrack(
                  navigation.getParam('game'),
                  navigation.getParam('preset_name'),
                  track
                )
            "
            block
          >
            <nb-text :style="{ fontSize: 12 }">
              {{ track.name_en }} - {{ track.name_jp }} - {{ track.abbreviation }}
            </nb-text>
          </nb-button>
        </view>
      </view>

      <nb-button
        :style="{ marginTop: 20, margin: 7 }"
        :onPress="() => goToRename(navigation.getParam('game'), navigation.getParam('preset_name')) "
        success
        block
      >
        <nb-text :style="{ fontSize: 16 }"> Rename Preset </nb-text>
      </nb-button>

      <nb-button
        :style="{ margin: 7 }"
        :onPress="() => deletePreset()"
        danger
        block
      >
        <nb-text :style="{ fontSize: 16 }"> Delete Preset </nb-text>
      </nb-button>
    </nb-content>
  </view>
</template>

<script>
import { AsyncStorage, Alert } from "react-native";
export default {
  props: {
    navigation: {
      type: Object,
    },
  },
  data() {
    return {
      game: [],
    }
  },
  mounted() {
    const data = require("mk-tracks");

    if (this.navigation.getParam("game").includes("MK8")) {
      this.game = data.find((v) => v.title_abbreviation === "MK8");
    } else if (this.navigation.getParam("game").includes("MKW")) {
      this.game = data.find((v) => v.title_abbreviation === "MKW");
    } else if (this.navigation.getParam("game").includes("MKW")) {
      this.game = data.find((v) => v.title_abbreviation === "MK7");
    } else if (this.navigation.getParam("game").includes("MKDS")) {
      this.game = data.find((v) => v.title_abbreviation === "MKDS");
    }
  },
  methods: {
    goToTrack(game, preset_name, track) {
      this.navigation.navigate("Record", {
        game: game,
        preset_name: preset_name,
        track: track,
      });
    },
    goToRename(game, preset_name) {
      this.navigation.navigate("RenamePreset", {
        game: game,
        preset_name: preset_name,
      });
    },
    async deletePreset() {
      Alert.alert(
        "Really?",
        "プリセットを削除しますか？ (記録が削除されます)",
        [
          {
            text: "Cancel",
            style: "cancel",
          },
          {
            text: "OK",
            onPress: async () => {
              await AsyncStorage.removeItem(
                this.navigation.getParam("game") +
                  "-" +
                  this.navigation.getParam("preset_name")
              );
              Alert.alert(
                "Preset Delete!",
                "プリセットを削除しました",
                [
                  {
                    text: "OK",
                    onPress: () => {
                      this.navigation.navigate("Home", {});
                    },
                  },
                ],
                { cancelable: false }
              );
            },
          },
        ],
        { cancelable: false }
      );
    }
  },
};
</script>

<style>
.container {
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
