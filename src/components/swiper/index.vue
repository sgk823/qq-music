<template>
  <div class="swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide"></div>
    </div>
  
    <div class="swiper-pagination"></div>

    <div class="swiper-button-prev"><i></i></div>
    <div class="swiper-button-next"><i></i></div>
  </div>
</template>

<script>
export default {
  name: "Swiper",
};
</script>

<style lang='less' scoped>
.swiper {
  position: relative;
  height: 200px;
}

.swiper-button-prev, .swiper-button-next {
  position: absolute;
  top: 50%;
  margin-top: -54px;
  width: 79px;
  height: 108px;
  line-height: 136px;
  background-color: rgba(0, 0, 0, 0.1);
  cursor: pointer;
  opacity: 0.5;

  i {
    display: inline-block;
    width: 20px;
    height: 39px;
    background: url(../../assets/images/icon_sprite.png) no-repeat;
  }

  &:hover {
    opacity: 1;
  }
}

.swiper-button-prev {
  left: 0;
  i {
    background-position: -20px -120px;
  }
}

.swiper-button-next {
  right: 0;

  i {
    background-position: 0 -120px;
  }
}

</style>
