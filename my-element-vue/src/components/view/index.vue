<template>
  <el-container class="sty-container">
    <el-header class="el-header-sty">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo el-menu-sty"
        mode="horizontal"
        @select="handleSelect"
        text-color="#fff"
        active-text-color="#ffd04b"
        router
      >
        <el-menu-item
          v-for="NavMenu in NavMenus"
          :index="NavMenu.path"
          :key="NavMenu.path"
          :class="'el-menu-header-'+NavMenu.index"
        >{{NavMenu.label}}</el-menu-item>
        <el-select
          v-model="$i18n.locale"
          placeholder="$t('el.select.placeholder')"
          @change="switchLang"
        >
          <el-option
            v-for="lang in langs"
            :key="lang.value"
            :value="lang.value"
            :label="lang.label"
          ></el-option>
        </el-select>
      </el-menu>
    </el-header>
    <el-container>
      <el-header class="el-header-titel-sty">
        <el-row :gutter="2">
          <el-col :span="2">
            <div class="grid-content bg-purple">{{contentTitle}}</div>
          </el-col>
        </el-row>
      </el-header>
      <el-container class="el-container-sty">
        <el-aside v-if="Type">
          <el-menu
            :default-active="activeIndexAside"
            class="el-menu-demo el-menu-demo-aside"
            mode="vertical"
            @select="handleSelect"
            background-color="#fff"
            text-color="black"
            active-text-color="#fff"
            router
          >
            <el-menu-item-group index="1" v-if="TypePath === 'WAN'">
              <el-menu-item
                v-for="wan_menu in wan_menus"
                :index="wan_menu.path"
                :key="wan_menu.path"
              >{{wan_menu.label}}</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group index="2" v-else-if="TypePath === 'LAN'">
              <el-menu-item
                v-for="lan_menu in lan_menus"
                :index="lan_menu.path"
                :key="lan_menu.path"
              >{{lan_menu.label}}</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group index="3" v-else-if="TypePath === 'SMS'">
              <el-menu-item
                v-for="sms_menu in sms_menus"
                :index="sms_menu.path"
                :key="sms_menu.path"
              >{{sms_menu.label}}</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group index="4" v-else-if="TypePath === 'WiFi'">
              <el-menu-item
                v-for="wifi_menu in wifi_menus"
                :index="wifi_menu.path"
                :key="wifi_menu.path"
              >{{wifi_menu.label}}</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group index="5" v-else-if="TypePath === 'Security'">
              <el-menu-item
                v-for="security_menu in security_menus"
                :index="security_menu.path"
                :key="security_menu.path"
              >{{security_menu.label}}</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group index="6" v-else-if="TypePath === 'System'">
              <el-menu-item
                v-for="system_menu in system_menus"
                :index="system_menu.path"
                :key="system_menu.path"
              >{{system_menu.label}}</el-menu-item>
            </el-menu-item-group>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import { test } from "../../assets/js/test"; //引入自定义js方法
import { nameMenu } from "../navigation/menu"; //引入导航组件js
export default {
  name: "",
  data() {
    return {
      contentTitle: "", //内容标题
      activeIndex: "/", //默认显示header栏高亮
      activeIndexAside: "", //默认显示侧边栏高亮
      Type: false, //默认隐藏二级导航
      TypePath: "", //一级导航对应二级的默认值
      NavMenus: [], //一级菜单
      wan_menus: [], //WAN级菜单
      lan_menus: [], //LAN级菜单
      sms_menus: [], //SMS级菜单
      wifi_menus: [], //WiFi级菜单
      security_menus: [], //Security级菜单
      system_menus: [], //System级菜单
      langs: [
        {
          value: "zh",
          label: "中文"
        },
        {
          value: "en",
          label: "英文"
        }
      ]
    };
  },
  created() {
    this.LanguageSwitching(nameMenu());
    this.TitleContent();
    this.$router.push("/");
  },
  methods: {
    //获取语言切换
    LanguageSwitching(obj) {
      this.NavMenus = obj.headerMenu;
      this.wan_menus = obj.wan_menu;
      this.lan_menus = obj.lan_menu;
      this.sms_menus = obj.sms_menu;
      this.wifi_menus = obj.wifi_menu;
      this.security_menus = obj.security_menu;
      this.system_menus = obj.system_menu;
    },
    //获取二级菜单导航
    handleSelect(key) {
      //console.log(key);
      if (key != "/" && key != "/wizard") {
        this.Type = true;
      } else {
        this.Type = false;
      }
      this.activeIndexAside = key;
      switch (key) {
        case "/":
          this.TypePath = "Home";
          break;

        case "/wizard":
          this.TypePath = "Wizard";
          break;

        case "/wan_connect":
          this.TypePath = "WAN";
          break;

        case "/net_lan":
          this.TypePath = "LAN";
          break;

        case "/sms_new":
          this.TypePath = "SMS";
          break;

        case "/wifi_basic":
          this.TypePath = "WiFi";
          break;

        case "/sec_firewall":
          this.TypePath = "Security";
          break;

        case "/system_about":
          this.TypePath = "System";
          break;
      }
      this.TitleContent();
    },
    TitleContent() {
      for (const iterator of this.NavMenus) {
        //动态切换内容标题
        if (this.TypePath === iterator.index) {
          this.contentTitle = iterator.label;
          break;
        } else {
          this.contentTitle = this.$t("customize.NavMenu.Home");
        }
      }
    },
    //设置语言切换
    switchLang(val) {
      this.$i18n.locale = val;
      this.LanguageSwitching(nameMenu());

      this.TitleContent();

      //console.log(this.contentTitle);

      //test();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-header-sty {
  padding: 10px;
  height: 120px !important;
}
.el-header-titel-sty {
  height: 100% !important;
}
.el-menu-sty {
  background: url("../../assets/images/navi-bg.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  height: 97px;
}
.el-aside {
  flex: 1;
  padding-right: 10px;
}
.el-main {
  flex: 9;
  border-radius: 0 6px 6px 0;
}
.el-aside,
.el-menu-demo-aside {
  background-color: #8ba1b1 !important;
  border: none;
}
.el-menu-demo-aside .el-menu-item {
  margin-bottom: 10px;
  padding: 6px 0;
  height: inherit;
  line-height: inherit;
  border-radius: 6px;
}
.el-menu-demo-aside .el-menu-item:focus,
.el-menu-demo-aside .el-menu-item:hover {
  background-color: #486170 !important;
  color: #fff !important;
}
.el-menu-demo-aside .is-active {
  background-color: #486170 !important;
}
.grid-content {
  padding: 10px;
  border-radius: 6px 6px 0 0;
  background-color: #8ba1b1;
  color: #fff;
  font-size: 20px;
}
.el-container-sty {
  border: 20px solid #8ba1b1;
  margin: 0 20px;
  background-color: #fff;
  max-height: 700px;
  border-radius: 0 6px;
}
</style>
