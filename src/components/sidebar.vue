<template>
  <div class="sidebar">
    <div class="user">
      <div class="top">
        <el-avatar :size="58" src=""></el-avatar>
        <div class="username">山羊</div>
      </div>
      <div class="bottom">
        <el-button type="text">切换账号</el-button>
      </div>
    </div>
    <div class="sidebar-box">
      <div class="sidebar-item" v-for="(item, index) in sideList" :key="index" @click="changeSide(item,index)">
        <img v-if="item.isActive" :src="item.imgUrlActive" alt="">
        <img v-else :src="item.imgUrl" alt="">
        <span :class="item.isActive ? 'active' : 'title'">{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        sideList: [
            {
                name: "主页",
                imgUrl: require('../assets/home/home.png'),
                imgUrlActive: require('../assets/home/home-active.png'),
                isActive: true
            },
            {
                name: "数据上报",
                imgUrl: require('../assets/home/upload.png'),
                imgUrlActive: require('../assets/home/upload-active.png'),
                isActive: false
            },
            {
                name: "数据记录",
                imgUrl: require('../assets/home/print.png'),
                imgUrlActive: require('../assets/home/print-active.png'),
                isActive: false
            },
            {
                name: "成员管理",
                imgUrl: require('../assets/home/team.png'),
                imgUrlActive: require('../assets/home/team-active.png'),
                isActive: false
            },
            {
                name: "平台管理",
                imgUrl: require('../assets/home/setting.png'),
                imgUrlActive: require('../assets/home/setting-active.png'),
                isActive: false
            },
            {
                name: "更换市场",
                imgUrl: require('../assets/home/market.png'),
                imgUrlActive: require('../assets/home/market-active.png'),
                isActive: false
            },
            {
                name: "用户编辑",
                imgUrl: require('../assets/home/user.png'),
                imgUrlActive: require('../assets/home/user-active.png'),
                isActive: false
            },
            {
                name: "小组个人数据",
                imgUrl: require('../assets/home/data.png'),
                imgUrlActive: require('../assets/home/data-active.png'),
                isActive: false
            },
            {
                name: "排名",
                imgUrl: require('../assets/home/ranking.png'),
                imgUrlActive: require('../assets/home/ranking-active.png'),
                isActive: false
            }
        ]
    };
  },
  methods: {
    changeSide(data,index) {
        this.sideList.filter((item,newIndex) => {
            if (index == newIndex) {
                item.isActive = true
            } else {
                item.isActive = false
            }
        })
    }
  },
};
</script>

<style lang="scss" scoped>
.sidebar {
  position: relative;
  .user {
    position: absolute;
    top: 44px;
    left: 54px;
    color: #fff;
    margin-bottom: 60px;
    .top {
      display: flex;
      align-items: center;
      .username {
        width: 119px;
        height: 37px;
        text-align: center;
        line-height: 37px;
        border: 1px solid #fff;
        border-radius: 8px;
        margin-left: 17px;
      }
    }

    .bottom {
      display: flex;
      justify-content: flex-end;
      margin-right: 35px;

      /deep/ .el-button--text {
        color: #fff !important;
      }
    }
  }

  .sidebar-box {
    position: absolute;
    top: 240px;
    left: 104px;
    color: #fff;
    
    .sidebar-item {
        display: flex;
        align-items: center;
        margin-bottom: 24px;
        cursor: pointer;

        .title {
            margin-left: 20px;
            padding-bottom: 2px;
            border-bottom: 1px solid rgba(0,0,0,0);
        }

        .active {
            margin-left: 20px;
            padding-bottom: 2px;
            border-bottom: 1px solid #fff;
        }
    }
  }
}
</style>