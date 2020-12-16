// tab into tablist
//      arrow or tab again? next tab item
//      enter or space? trigger tab
// trigger tab
//      updates tab item state &
//      update tab panel state & shows active tab pannel

import {Tablist} from './tabslist';


export const Tabs = {
    initialized: false,
    // May be useful, should arguably remove since not using now
    lists: [],
    init: function(props={}) {
        if (!this.initialized) {
            const items = Tablist.createListsFromDOM({
                selectorTablist: props.selectorTablist || '[data-ayw-tablist]',
                selectorTab: props.selectorTab || '[data-ayw-tab]'
            });

            this.lists = Tablist.buildLists({
                items,
                activateCb: props.activateCb,
                deactivateCb: props.deactivateCb
            });
            this.initialized = true;
        }
    }
};

