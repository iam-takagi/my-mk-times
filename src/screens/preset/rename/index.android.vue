<template>
  <view class="container">
    <nb-content>
      <nb-text :style="{ marginTop: 15, marginLeft: 7 }"
        >Preset: {{ navigation.getParam("preset_name") }}</nb-text
      >
      <nb-text :style="{ marginTop: 15, marginLeft: 7 }"
        >Game : {{ navigation.getParam("game") }}</nb-text
      >

      <nb-form>
        <nb-item floatingLabel>
          <nb-label>Preset Name - プリセット名</nb-label>
          <nb-input v-model="preset_name" />
        </nb-item>
      </nb-form>

      <nb-button
        block
        primary
        :style="{ marginTop: 20, marginRight: 10, marginLeft: 10 }"
        :onPress="() => rename()"
      >
        <nb-text>Rename - 変更する</nb-text>
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
      preset_name: null,
      records: [],
    };
  },
  methods: {
    async rename() {
      if (!this.preset_name)
        return Alert.alert(
          "Please type preset name.",
          "プリセット名を入力してください",
          [{ text: "OK" }],
          { cancelable: false }
        );

      if (this.preset_name.length > 12)
        return Alert.alert(
          "Preset name max length is 12.",
          "プリセット名は12文字以下で入力してください",
          [{ text: "OK" }],
          { cancelable: false }
        );

      await AsyncStorage.getItem(
        this.navigation.getParam("game") + "-" + this.preset_name,
        async (error, result) => {
          if (result)
            return Alert.alert(
              "Preset is already exists.",
              "そのプリセットは既に存在しています",
              [{ text: "OK" }],
              { cancelable: false }
            );

          Alert.alert(
            "Really?",
            "プリセット名を変更しますか?",
            [
              {
                text: "Cancel",
                style: "cancel",
              },
              {
                text: "OK",
                onPress: async () => {
                  const recordsStr = await AsyncStorage.getItem(
                    this.navigation.getParam("game") +
                      "-" +
                      this.navigation.getParam("preset_name")
                  );

                  if (recordsStr) {
                    const parsed = JSON.parse(recordsStr);
                    this.records = parsed;
                  }
                  await AsyncStorage.removeItem(
                    this.navigation.getParam("game") +
                      "-" +
                      this.navigation.getParam("preset_name")
                  );

                  await AsyncStorage.setItem(
                    this.navigation.getParam("game") + "-" + this.preset_name,
                    JSON.stringify(this.records)
                  );

                  Alert.alert(
                    "Preset Renamed!",
                    "プリセット名を変更しました",
                    [
                      {
                        text: "OK",
                        onPress: () => {
                         this.navigation.navigate("Home", {
                        });
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
      );
    },
  },
};
</script>

<style>
.container {
  flex: 1;
}
</style>