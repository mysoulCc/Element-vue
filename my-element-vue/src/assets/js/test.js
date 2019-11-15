// import i18n from '../../i18n/index'
// import Vue from 'vue';
// const vueInstance = new Vue({ i18n });
import vueInstance from './vueInstance';
function test() {
    alert(vueInstance.$t('customize.NavMenu.Home'))
}
export {			//关键
    test
}