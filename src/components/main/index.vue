<template>
  <main>
    <Content v-for="(item, idx) in contentData" :key="idx" 
      :title="item.title" :navs='item.navs'/>
  </main>
</template>

<script>
import Content from '../content'

export default {
  name: 'Main',
  data(){
    return {
      contentData: [
        {
          title: '歌单推荐',
          navs: ['为你推荐', '网络歌曲', '学习工作', '经典', '官方歌单', '情歌'],
        },
        {
          title: '新歌首发',
          navs: ['最新', '内地', '港台', '欧美', '韩国', '日本']
        },
        {
          title: '精彩推荐'
        },
        {
          title: '新碟首发',
          navs: ['内地', '港台', '欧美', '日本', '其他']
        },
        {
          title: '排行榜',

        },
        {
          title: 'MV',
          navs: ['精选', '内地', '港台', '欧美', '韩国', '日本']
        }
      ]
    }
  },

  components: {
    Content,

  }
}
</script>

<style>

</style>