import vueInstance from '../../assets/js/vueInstance';
function nameMenu() {
    const menu = {
        headerMenu: [//一级菜单
            {
                path: '/',
                index: 'Home',
                label: vueInstance.$t('customize.NavMenu.Home')
            },
            {
                path: '/wizard',
                index: 'Wizard',
                label: vueInstance.$t('customize.NavMenu.Wizard')
            },
            {
                path: '/wan_connect',
                index: 'WAN',
                label: vueInstance.$t('customize.NavMenu.WAN')
            },
            {
                path: '/net_lan',
                index: 'LAN',
                label: vueInstance.$t('customize.NavMenu.LAN')
            },
            {
                path: '/sms_new',
                index: 'SMS',
                label: vueInstance.$t('customize.NavMenu.SMS')
            },
            {
                path: '/wifi_basic',
                index: 'WiFi',
                label: vueInstance.$t('customize.NavMenu.WiFi')
            },
            {
                path: '/sec_firewall',
                index: 'Security',
                label: vueInstance.$t('customize.NavMenu.Security')
            },
            {
                path: '/system_about',
                index: 'System',
                label: vueInstance.$t('customize.NavMenu.System')
            }
        ],
        wan_menu: [//WAN功能菜单
            {
                path: '/wan_connect',
                label: vueInstance.$t('customize.NavMenu.Connection')
            },
            {
                path: '/wan_setting',
                label: vueInstance.$t('customize.NavMenu.Connection Setting')
            },
            {
                path: '/wan_profile',
                label: vueInstance.$t('customize.NavMenu.APN Setting')
            },
            {
                path: '/wan_23g',
                label: vueInstance.$t('customize.NavMenu.4G/3G/2G Modem')
            },
            {
                path: '/wan_sim',
                label: vueInstance.$t('customize.NavMenu.PIN')
            },
            {
                path: '/wan_plmn',
                label: vueInstance.$t('customize.NavMenu.PLMN')
            },
        ],
        lan_menu: [//LAN功能菜单
            {
                path: '/net_lan',
                label: vueInstance.$t('customize.NavMenu.LAN')
            },
            {
                path: '/net_dhcp',
                label: vueInstance.$t('customize.NavMenu.DHCP')
            }
        ],
        sms_menu: [//SMS功能菜单
            {
                path: '/sms_new',
                label: vueInstance.$t('customize.NavMenu.New Message')
            },
            {
                path: '/InBox',
                label: vueInstance.$t('customize.NavMenu.InBox')
            },
            {
                path: '/OutBox',
                label: vueInstance.$t('customize.NavMenu.OutBox')
            },
            {
                path: '/DraftBox',
                label: vueInstance.$t('customize.NavMenu.DraftBox')
            },
            {
                path: '/Settings_SMS',
                label: vueInstance.$t('customize.NavMenu.Settings SMS')
            }
        ],
        wifi_menu: [//WiFi功能菜单
            {
                path: '/wifi_basic',
                label: vueInstance.$t('customize.NavMenu.Basic')
            },
            {
                path: '/wifi_wps',
                label: vueInstance.$t('customize.NavMenu.WPS')
            },
            {
                path: '/wifi_filter',
                label: vueInstance.$t('customize.NavMenu.MAC Filter')
            },
            {
                path: '/wifi_sta',
                label: vueInstance.$t('customize.NavMenu.Station List')
            }
        ],
        security_menu: [//Security功能菜单
            {
                path: '/sec_firewall',
                label: vueInstance.$t('customize.NavMenu.Firewall')
            },
            {
                path: '/net_nat',
                label: vueInstance.$t('customize.NavMenu.NAT')
            },
            {
                path: '/net_dmz',
                label: vueInstance.$t('customize.NavMenu.DMZ')
            }
        ],
        system_menu: [//System功能菜单
            {
                path: '/system_about',
                label: vueInstance.$t('customize.NavMenu.About')
            },
            {
                path: '/system_qosRules',
                label: vueInstance.$t('customize.NavMenu.QOS')
            },
            {
                path: '/system_config',
                label: vueInstance.$t('customize.NavMenu.Configuration')
            },
            {
                path: '/system_upgrade',
                label: vueInstance.$t('customize.NavMenu.Firmware Upgrade')
            },
            {
                path: '/system_passwd',
                label: vueInstance.$t('customize.NavMenu.Password')
            },
            {
                path: '/system_date',
                label: vueInstance.$t('customize.NavMenu.Date and Time')
            },
            {
                path: '/system_language',
                label: vueInstance.$t('customize.NavMenu.Language')
            },
            {
                path: '/system_reboot',
                label: vueInstance.$t('customize.NavMenu.Reboot')
            }
        ]
    }
    return menu;
}
export { nameMenu }