<template>
  <h1>{{ msg }}</h1>
  <button @click="onsend">send</button>
</template>
<script setup>
import { watch } from "vue";
import { useSocket } from "@/store/socket";
const { socketData, wsInit, sendScoket } = useSocket();
// 初始化ws
// wsInit("ws://121.40.165.18:8800");

// 获取服务器发给客户端的数据
watch(
  () => socketData,
  (data) => {
    console.log("ws: ", data);
  },
  {
    immediate: true,
  }
);
// 主动向服务端发送数据
const onsend = () => {
  sendScoket("shenjilin");
};
</script>
<style scoped></style>
