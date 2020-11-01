<template>
  <view class="container">
    <text class="heading">Track {{navigation.getParam("track")}}</text>
    <text>This is the App Track screen</text>
  </view>
</template>

<script>
import Store from "../../../store";
export default {
 props: {
    navigation: {
      type: Object,
    },
  }
}
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
