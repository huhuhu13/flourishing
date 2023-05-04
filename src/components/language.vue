<template>
  <div class="area-box">
    <div class="left-box">
      <span>切换地区</span>
      <el-select v-model="value" clearable placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.id"
          :label="item.name"
          :value="item.name"
        >
        </el-option>
      </el-select>
    </div>
  </div>
</template>

<script>
import { country } from '../api/home'
export default {
  data() {
    return {
      options: [
        // {
        //   value: "选项1",
        //   label: "黄金糕",
        // },
        // {
        //   value: "选项2",
        //   label: "双皮奶",
        // },
        // {
        //   value: "选项3",
        //   label: "蚵仔煎",
        // },
        // {
        //   value: "选项4",
        //   label: "龙须面",
        // },
        // {
        //   value: "选项5",
        //   label: "北京烤鸭",
        // },
      ],
      value: "",
    };
  },
  created() {
    this.getCountry()
  },
  methods: {
    getCountry() {
        country().then(res => {
            if (res.data.code == 1000) {
                this.options = res.data.data
            }
            console.log('res', res.data.data)
        })
    }
  },
};
</script>

<style lang="scss" scoped>
.area-box {
    color: #fff;
    padding: 44px 0;

    .left-box {
        font-size: 14px;

        /deep/ .el-input__inner {
            width: 243px;
            height: 30px;
            background: url('../assets/select-bg.png') no-repeat;
            background-size: 100% 100%;
            border: none;
            padding: 0 30px;
            color: #222;
        }
        /deep/ .el-input__inner::placeholder {
            color: #222;
        }

        /deep/ .el-input__icon {
            line-height: 30px;
            color: #222;
        }
    }
}
</style>