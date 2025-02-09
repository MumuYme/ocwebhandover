<template>
  <a :class="className" href="https://youtu.be/Ayd0wuN7RSk?si=j3oZMxi61psUV5ox">
    <img :src="HowToIcon" class="menu-icon-img" />
  </a>
</template>
<script>
import HowToIcon from "/src/assets/howto-3d-icon.svg";
export default {
  name: "HowToIcon",
  props: {
    className: String,
  },
  data() {
    return {
      HowToIcon,
    };
  },
};
</script>