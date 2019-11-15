import Vue from 'vue'
import Router from 'vue-router'
//引用主页面组件
import index from '@/components/view/index'
//引用Home菜单组件
import home from '@/components/view/Subassembly/home'
//引用Wizard菜单组件
import Wizard from '@/components/view/Subassembly/Wizard'
//引用WAN二级菜单组件
import wan_connect from '@/components/view/Subassembly/WAN/wan_connect'
import wan_setting from '@/components/view/Subassembly/WAN/wan_setting'
import wan_profile from '@/components/view/Subassembly/WAN/wan_profile'
import wan_23g from '@/components/view/Subassembly/WAN/wan_23g'
import wan_sim from '@/components/view/Subassembly/WAN/wan_sim'
import wan_plmn from '@/components/view/Subassembly/WAN/wan_plmn'
//引用LAN二级菜单组件
import net_lan from '@/components/view/Subassembly/LAN/net_lan'
import net_dhcp from '@/components/view/Subassembly/LAN/net_dhcp'
//引用SMS二级菜单组件
import sms_new from '@/components/view/Subassembly/SMS/sms_new'
import InBox from '@/components/view/Subassembly/SMS/InBox'
import OutBox from '@/components/view/Subassembly/SMS/OutBox'
import DraftBox from '@/components/view/Subassembly/SMS/DraftBox'
import Settings_SMS from '@/components/view/Subassembly/SMS/Settings_SMS'
//引用WIFI二级菜单组件
import wifi_basic from '@/components/view/Subassembly/WiFi/wifi_basic'
import wifi_wps from '@/components/view/Subassembly/WiFi/wifi_wps'
import wifi_filter from '@/components/view/Subassembly/WiFi/wifi_filter'
import wifi_sta from '@/components/view/Subassembly/WiFi/wifi_sta'
//引用Security二级菜单组件
import sec_firewall from '@/components/view/Subassembly/Security/sec_firewall'
import net_nat from '@/components/view/Subassembly/Security/net_nat'
import net_dmz from '@/components/view/Subassembly/Security/net_dmz'
//引用System二级菜单组件
import system_about from '@/components/view/Subassembly/System/system_about'
import system_qosRules from '@/components/view/Subassembly/System/system_qosRules'
import system_config from '@/components/view/Subassembly/System/system_config'
import system_upgrade from '@/components/view/Subassembly/System/system_upgrade'
import system_passwd from '@/components/view/Subassembly/System/system_passwd'
import system_date from '@/components/view/Subassembly/System/system_date'
import system_language from '@/components/view/Subassembly/System/system_language'
import system_reboot from '@/components/view/Subassembly/System/system_reboot'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      children: [
        {
          path: '/',
          name: 'home',
          component: home
        },
        {
          path: '/Wizard',
          name: 'Wizard',
          component: Wizard
        },
        {
          path: '/wan_connect',
          name: 'wan_connect',
          component: wan_connect
        },
        {
          path: '/wan_setting',
          name: 'wan_setting',
          component: wan_setting
        },
        {
          path: '/wan_profile',
          name: 'wan_profile',
          component: wan_profile
        },
        {
          path: '/wan_23g',
          name: 'wan_23g',
          component: wan_23g
        },
        {
          path: '/wan_sim',
          name: 'wan_sim',
          component: wan_sim
        },
        {
          path: '/wan_plmn',
          name: 'wan_plmn',
          component: wan_plmn
        },
        {
          path: '/net_lan',
          name: 'net_lan',
          component: net_lan
        },
        {
          path: '/net_dhcp',
          name: 'net_dhcp',
          component: net_dhcp
        },
        {
          path: '/sms_new',
          name: 'sms_new',
          component: sms_new
        },
        {
          path: '/InBox',
          name: 'InBox',
          component: InBox
        },
        {
          path: '/OutBox',
          name: 'OutBox',
          component: OutBox
        },
        {
          path: '/DraftBox',
          name: 'DraftBox',
          component: DraftBox
        },
        {
          path: '/Settings_SMS',
          name: 'Settings_SMS',
          component: Settings_SMS
        },
        {
          path: '/wifi_basic',
          name: 'wifi_basic',
          component: wifi_basic
        },
        {
          path: '/wifi_wps',
          name: 'wifi_wps',
          component: wifi_wps
        },
        {
          path: '/wifi_filter',
          name: 'wifi_filter',
          component: wifi_filter
        },
        {
          path: '/wifi_sta',
          name: 'wifi_sta',
          component: wifi_sta
        },
        {
          path: '/sec_firewall',
          name: 'sec_firewall',
          component: sec_firewall
        },
        {
          path: '/net_nat',
          name: 'net_nat',
          component: net_nat
        },
        {
          path: '/net_dmz',
          name: 'net_dmz',
          component: net_dmz
        },
        {
          path: '/system_about',
          name: 'system_about',
          component: system_about
        },
        {
          path: '/system_qosRules',
          name: 'system_qosRules',
          component: system_qosRules
        },
        {
          path: '/system_config',
          name: 'system_config',
          component: system_config
        },
        {
          path: '/system_upgrade',
          name: 'system_upgrade',
          component: system_upgrade
        },
        {
          path: '/system_passwd',
          name: 'system_passwd',
          component: system_passwd
        },
        {
          path: '/system_date',
          name: 'system_date',
          component: system_date
        },
        {
          path: '/system_language',
          name: 'system_language',
          component: system_language
        },
        {
          path: '/system_reboot',
          name: 'system_reboot',
          component: system_reboot
        }
      ]
    }
  ]
})
