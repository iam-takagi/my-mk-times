<template>
  <view class="container">
    <nb-content>
      <nb-list-item v-for="game in games" :key="game">
        <nb-checkbox
          :checked="checked === game"
          :onPress="() => onCheck(game)"
        />
        <nb-body>
          <nb-text>{{ game }}</nb-text>
        </nb-body>
      </nb-list-item>

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
        :onPress="() => create()"
      >
        <nb-text>Create - 作成する</nb-text>
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
      games: ["MKDS", "MKW", "MK7", "MK8U", "MK8D"],
      checked: "MKDS",
      preset_name: "",
    };
  },
  methods: {
    onCheck(game) {
      this.checked = game;
    },
    async create() {
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

      try {
        await AsyncStorage.getItem(
          this.checked + "-" + this.preset_name,
          async (error, result) => {
            if (result)
              return Alert.alert(
                "Preset is already exists.",
                "そのプリセットは既に存在しています",
                [{ text: "OK" }],
                { cancelable: false }
              );
            else
              try {
                await AsyncStorage.setItem(
                  this.checked + "-" + this.preset_name,
                  ""
                );

                Alert.alert(
                  "Created!",
                  "プリセットを作成しました",
                  [
                    {
                      text: "OK",
                      onPress: () => {
                        this.navigation.navigate("Records", {
                          game: this.checked,
                          preset_name: this.preset_name,
                        });
                      },
                    },
                  ],
                  { cancelable: false }
                );
              } catch (error) {
                console.log(error);
              }
          }
        );
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style>
.container {
  flex: 1;
}
</style>