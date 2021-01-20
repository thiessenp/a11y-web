// TODO: consider orientation on horizonal=left/right vertical=up/down (since JS listern, perf?)
// TODO: consider refactoring default to have auto activation (unless a delay from pre-loading/*)

// WEBPACK is so ERROR PRONE... (consider dropping it. who am I kidding, impossible..)
// 1. Webpack has trouble importing projects created with Webpack, so use the source.
// -BUT-
// 2. when use as an ES module, the bable-loader isn't run and gives an error about
// class properties.
// 
// Currently going with #2 importing the Webpack-built project works.. emphasis
// on *currently*. 
// import KeynavWeb, {Keynav} from 'keynav-web';
import {ListNav} from 'keynav-web';

export const Tabs = {
    // May be usefulfor debugging
    lists: [],

    init: function(props={}) {
        // Define selector names for Tablists
        const selectorTablist = props.selectorTablist || '[data-ayw-tablist]';
        const selectorTab = props.selectorTab || '[data-ayw-tab]';

        // Create a list of all the Tablists
        let tablistEls = document.querySelectorAll(selectorTablist);
        if (!tablistEls || tablistEls.length === 0) {
            console.log('Tabs, no tablists found.');
            return;
        }
        tablistEls = Array.from(tablistEls);

        // Create a Tabs for of the Tablists
        this.lists = tablistEls.map((tablist) => {
            return new ListNav({
                listEl: tablist,
                listItemsSelector: selectorTab
            });
        });
    }
};

export class Tablist {
    items = [];

    isInitialized = false;

    activateCb = ({item, isInit=false}) => {
        if (!item) { return; }
        // Skip activating if already active
        const newActive = item;
        if (newActive.getAttribute['aria-selected'] === 'true') { return; }

        // Remove any lingering state on the old active element(s)
        const oldActive = this.items.find(item => item.getAttribute('aria-selected') === 'true');
        this.deactivateCb({item: oldActive});

        // Activate the new Tab
        item.setAttribute('tabindex', '0');
        item.setAttribute('aria-selected', 'true');

// >>>>>>>>>>>>>>>>>
// TODO from here I think
//>>>>>>>>>>>>>>>>>>
        // Also activate (and focus) the Tabpanel
        const controlsTab = document.getElementById(item.getAttribute('aria-controls'));
        if (!controlsTab) { return; }
        controlsTab.setAttribute('tabindex', '0');  // Encase not set
        controlsTab.removeAttribute('hidden');

        // Cases like init where many Components may load in the DOM, don't want to focus each
        if (!isInit) { this.focusCb({item: controlsTab}); }
    };

    deactivateCb = ({item}) => {
        if (!item) { return; }
 
        // Deactivate Tab
        item.setAttribute('tabindex', '-1');
        item.setAttribute('aria-selected', 'false');
        
        // Deactivate Tabpanel
        const controlsTab = document.getElementById(item.getAttribute('aria-controls'));
        if (!controlsTab) { return; }
        controlsTab.setAttribute('hidden', 'hidden');
    };

    focusCb = ({item}) => {
        if (!item) { return; }
        item.focus();
    };

    constructor({items, isAutoInit=true, activateCb, deactivateCb, focusCb}) {
        if (!items || items.length === undefined) {
            throw new Error('Error: called Tablist constructor without items list');
        }
        this.items = Array.from(items);
        // Potentially enable callbacks for increased flexibility on item activation
        if (activateCb && typeof activateCb === 'function') {
            this.activateCb = activateCb;
        }
        if (deactivateCb && typeof deactivateCb === 'function') {
            this.deactivateCb = deactivateCb;
        }
        if (focusCb && typeof focusCb === 'function') {
            this.focusCb = focusCb;
        }
        if (isAutoInit) { this.init(); }
    }

    init() {
        if (this.isInitialized) { return; }

        // Add keynav to Tabslist items
        // NOTE: Keynav expects a list of lists so wrap items in an array
        Keynav.init({
            items: [this.items],
            activateCb: this.activateCb,
            deactivateCb: this.deactivateCb,
            focusCb: this.focusCb
        });

        // Make sure at least first tablist item has an aria-selected (entry point)
        const selected = this.items.find(item => item.getAttribute('aria-selected') === 'true');
        if(!selected) { this.activateCb({item: this.items[0], isInit: true}); }

        this.isInitialized = true;
    }


    // TODO: DEPRECATED
    static createListsFromDOM({selectorTablist, selectorTab}) {
        const containerListEls = document.querySelectorAll(selectorTablist);
        // Array of NodeLists
        let childListsEls = [];

        containerListEls.forEach(function(containerListEl) {
            childListsEls.push(containerListEl.querySelectorAll(selectorTab));
        });

        return childListsEls;
    }

    // TODO: DEPRECATED
    static buildLists({items, activateCb, deactivateCb}) {
        // Convert non-array to an array to make easier to work with
        items = Array.from(items);

        items = items.map(listItems => {
            if (!listItems || listItems.length === undefined) {
                throw new Error('Error: Tablist buildListsOfTablist received a non array like list of items in items');
            }
            listItems = Array.from(listItems);
            return new Tablist({
                items: listItems,
                activateCb,
                deactivateCb
            });
        });

        return items;
    }
}
