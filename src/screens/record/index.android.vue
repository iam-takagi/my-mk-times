<template>
  <view class="container">
    <nb-content>
      <text class="heading"
        >{{ navigation.getParam("game") }} -
        {{ navigation.getParam("track").name_en }} -
        {{ navigation.getParam("track").name_jp }} -
        {{ navigation.getParam("track").abbreviation }}</text
      >

      <text> {{ records }}</text>

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
  mounted() {
    this.game = this.navigation.getParam("game");
    this.track_abbreviation = this.navigation.getParam("track").abbreviation;
 
  },
  methods: {
    save() {
      
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
  text-align: center;
}
</style>
