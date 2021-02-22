<template>
  <div>
    <grid-layout
      :layout.sync="layout"
      :col-num="48"
      :row-height="30"
      :is-draggable="true"
      :is-resizable="true"
      :is-mirrored="false"
      :vertical-compact="true"
      :margin="[10, 10]"
      :use-css-transforms="true"
    >
      <grid-item
        style="border: 1px solid #000; display:flex; align-items:center"
        v-for="item in layout"
        :x="item.x"
        :y="item.y"
        :w="item.w"
        :h="item.h"
        :i="item.i"
        :key="item.i"
      >
        {{item.i}}
      </grid-item>
      
    </grid-layout>
  </div>
</template>
<script>
import VueGridLayout from "vue-grid-layout";
export default {
  components: {
    GridLayout: VueGridLayout.GridLayout,
    GridItem: VueGridLayout.GridItem,
  },
  data() {
    return {
      layout: [
        { x: 0, y: 0, w: 5, h: 1, i: "0" },
        { x: 0, y: 0, w: 5, h: 1, i: "1" },
        { x: 0, y: 0, w: 5, h: 1, i: "2" },
        { x: 0, y: 0, w: 5, h: 1, i: "3" },
        { x: 0, y: 0, w: 5, h: 1, i: "4" },
        { x: 0, y: 0, w: 5, h: 1, i: "5" },
        { x: 0, y: 2, w: 5, h: 1, i: "6" },
        { x: 0, y: 5, w: 5, h: 1, i: "7" },
        { x: 0, y: 5, w: 5, h: 1, i: "8" },
        { x: 0, y: 3, w: 5, h: 1, i: "9" },
        { x: 0, y: 4, w: 5, h: 1, i: "10" },
        { x: 0, y: 4, w: 5, h: 1, i: "11" },
        { x: 0, y: 10, w: 5, h: 1, i: "12" },
        { x: 0, y: 10, w: 5, h: 1, i: "13" },
        { x: 0, y: 8, w: 5, h: 1, i: "14" },
        { x: 0, y: 8, w: 5, h: 1, i: "15" },
        { x: 0, y: 10, w: 5, h: 1, i: "16" },
        { x: 0, y: 4, w: 5, h: 1, i: "17" },
        { x: 0, y: 9, w: 5, h: 1, i: "18" },
        { x: 0, y: 6, w: 5, h: 1, i: "19" },
      ],
    };
  },
};
</script>