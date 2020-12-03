// tab into tablist
//      arrow or tab again? next tab item
//      enter or space? trigger tab
// trigger tab
//      updates tab item state &
//      update tab panel state & shows active tab pannel

// import KeynavWeb from 'keynav-web';
import {keynav} from 'keynav-web';  // --Better for tree shaking?




// class Tabs {
//     constructor(el) {
//         this.tabsEl = el;
//     }

//     init(el=this.tabsEl) {
//         keynav.init(el);
//     }
// }

const Tabs = {}

Tabs.dataSelectorList = 'data-ally-web-tablist';

Tabs.init = function(tabsEl) {
    // Setup keynav for Tabslist
    keynav.dataSelectorList = Tabs.dataSelectorList;
    keynav.init(tabsEl);
}

export default Tabs;
