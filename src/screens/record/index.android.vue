<template>
  <view class="container">
    <nb-content>
   

      <text :style="{marginTop: 15}"> {{ navigation.getParam("track").name_en }} - {{ navigation.getParam("track").name_jp }} - {{ navigation.getParam("track").abbreviation }}</text>

      <!--text> {{ records }}</text-->

      <nb-form>
        <nb-item floatingLabel>
          <nb-label>Time - 自己ベストタイム</nb-label>
          <nb-input v-model="record.time" />
        </nb-item>
        <nb-item floatingLabel>
          <nb-label>WR - 世界記録</nb-label>
          <nb-input v-model="record.wr" />
        </nb-item>
      </nb-form>

      <nb-textarea
        :rowSpan="15"
        bordered
        placeholder="Note - メモ"
        v-model="record.note"
        :style="{ margin: 10, marginTop: 30 }"
      />

      <nb-button block primary :style="{ margin: 10 }" :onPress="() => save()">
        <nb-text>Save</nb-text>
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
      records: [],
      record: {
        game: "",
        track_abbreviation: "",
        time: "",
        wr: "",
        note: "",
      },
    };
  },
  async mounted() {
    this.record.game = this.navigation.getParam("game");
    this.record.track_abbreviation = this.navigation.getParam(
      "track"
    ).abbreviation;

    try {
      const recordsStr = await AsyncStorage.getItem("records");
      if (recordsStr) {
        const parsed = JSON.parse(recordsStr);
        this.records = parsed;

        const f = this.records.find(
          (v) =>
            this.navigation.getParam("game") === v.game &&
            this.navigation.getParam("track").abbreviation ===
              v.track_abbreviation
        );

        if (f) {
          this.record = f;
        }
      }
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    async save() {
      const i = this.records.findIndex(
        (v) =>
          this.navigation.getParam("game") === v.game &&
          this.navigation.getParam("track").abbreviation ===
            v.track_abbreviation
      );
      //存在したら
      if (i > -1) this.records[i] = this.record;
      //存在しなかったら
      else this.records.push(this.record);

      try {
        await AsyncStorage.setItem("records", JSON.stringify(this.records));

        Alert.alert(
          "Saved / 保存しました",
          "",
          [
            { text: "OK", onPress: () => console.log("OK Pressed") },
          ],
          { cancelable: false }
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
  align-items: center;
  justify-content: center;
  flex: 1;
}
.heading {
  font-size: 26px;
  font-weight: bold;
  color: darkolivegreen;
  margin: 20px;
  text-align: center;
}
</style>
