<template>
  <view class="container">
    <nb-content>
      <nb-list-item v-for="preset in presets" :key="preset" :onPress="() => goRecords(preset.split('-')[0], preset.split('-')[1])">
         <nb-body>
          <nb-text>{{ preset }}</nb-text>
        </nb-body>
      </nb-list-item>
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
      presets: [],
    };
  },
  async mounted() {
    Promise.all(
      AsyncStorage.getAllKeys().then((ks) => {
        this.presets = ks;
      })
    );
  },
  methods: {
    goRecords(game, preset_name) {
      this.navigation.navigate("Records", {
        game: game,
        preset_name: preset_name,
      });
    },
  },
};
</script>

<style>
.container {
  flex: 1;
}
</style>