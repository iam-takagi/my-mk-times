<template>
  <view class="container">
    <nb-content>
      <text class="heading"
        >{{ navigation.getParam('game') }} - {{ navigation.getParam("track").name_en }} - {{ navigation.getParam("track").name_jp }} - {{ navigation.getParam("track").abbreviation }}</text
      >

      <nb-form>
        <nb-item floatingLabel>
          <nb-label>Time - 自己ベストタイム</nb-label>
          <nb-input />
        </nb-item>
        <nb-item floatingLabel>
          <nb-label>WR - 世界記録</nb-label>
          <nb-input />
        </nb-item>
      </nb-form>
       
      <nb-textarea :rowSpan="15" bordered placeholder="Note - メモ" :style="{margin: 10, marginTop: 30}"/>
       
    </nb-content>
  </view>
</template>

<script>
import Store from "../../../store";
const Realm = require('realm');
// モデルとモデルのプロパティを定義します
// Define your models and their properties
const TrackSchema = {
  name: 'Track',
  properties: {
    game:  'string',
    time: 'string',
    wr: 'string',
  }
};


Realm.open({schema: [TrackSchema]})
  .then(realm => {
    // Realmオブジェクトを作成してローカルDBに保存します
    realm.write(() => {
      const myCar = realm.create('Car', {
        make: 'Honda',
        model: 'Civic',
        miles: 1000,
      });
      myCar.miles += 20; // 保存済みの値を更新することもできます
    });

    // 'miles > 1000'に該当するCarオブジェクトを検索します
    const cars = realm.objects('Car').filtered('miles > 1000');

    // 上記の条件に該当するCarオブジェクトは１件です
    cars.length // => 1

    // もう一つ別のCarオブジェクトを保存します
    realm.write(() => {
      const myCar = realm.create('Car', {
        make: 'Ford',
        model: 'Focus',
        miles: 2000,
      });
    });

    // 検索結果は自動的に最新の状態が反映されます
    cars.length // => 2
  });
export default {
  props: {
    navigation: {
      type: Object,
    },
  },
  methods : {
    save(game, track) {

    }
  }
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
