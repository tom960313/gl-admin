<template>
  <div class="color-list">
    <div
      class="color-item"
      v-for="color in colors"
      :style="{ background: color.text }"
      v-dragging="{ item: color, list: colors, group: 'color' }"
      :key="color.text"
    >
      {{ color.text }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colors: [
        {
          text: "Aquamarine",
        },
        {
          text: "Hotpink",
        },
        {
          text: "Gold",
        },
        {
          text: "Crimson",
        },
        {
          text: "Blueviolet",
        },
        {
          text: "Lightblue",
        },
        {
          text: "Cornflowerblue",
        },
        {
          text: "Skyblue",
        },
        {
          text: "Burlywood",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.color-list {
  width: 200px;
  height: 500px;

  .color-item {
    width: 100px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 12px;
  }
}
</style>