import {Tablist} from './tabslist';


export const Tabs = {
    // May be usefulfor debugging
    lists: [],

    init: function(props={}) {
        const items = Tablist.createListsFromDOM({
            selectorTablist: props.selectorTablist || '[data-ayw-tablist]',
            selectorTab: props.selectorTab || '[data-ayw-tab]'
        });

        this.lists = Tablist.buildLists({
            items,
            activateCb: props.activateCb,
            deactivateCb: props.deactivateCb
        });
    }
};

