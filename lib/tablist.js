// TODO: consider orientation on horizonal=left/right vertical=up/down (since JS listern, perf?)
// TODO: consider refactoring default to have auto activation (unless a delay from pre-loading/*)

import {Keynav} from 'keynav-web';


/**
 * Creates a Tablist.
 * 
 * @class
 */
export class Tablist {
    // Constructed Tabs list based off of listnav
    listnav;

    isInitialized = false;

    tablistEl;

    selectorTab = '[data-ayw-tab]';

    // NOTE: Remember, called in and using `this` in Listnav so must by function
    activateCb = function({item, isInit=false}) {
      if (!item) {
        return;
      }
      // Skip activating if already active
      const newActive = item;
      if (newActive.getAttribute['aria-selected'] === 'true') {
        return;
      }

      // Remove any lingering state on the old active element(s)
      const oldActive = this.items().find(function(item) {
        const found = item.getAttribute('aria-selected') === 'true';
        return found;
      });
      this.deactivateCb({item: oldActive});

      // Activate the new Tab
      item.setAttribute('tabindex', '0');
      item.setAttribute('aria-selected', 'true');

      // Also activate (and focus) the Tabpanel
      const controlsTab = document.getElementById(item.getAttribute('aria-controls'));
      if (!controlsTab) {
        return;
      }
      controlsTab.setAttribute('tabindex', '0'); // Encase not set
      controlsTab.removeAttribute('hidden');

      // Cases like init where many Components may load in the DOM, don't want to focus each
      if (!isInit) {
        this.focusCb({item: controlsTab});
      }
    };

    deactivateCb = ({item}) => {
      if (!item) {
        return;
      }

      // Deactivate Tab
      item.setAttribute('tabindex', '-1');
      item.setAttribute('aria-selected', 'false');

      // Deactivate Tabpanel
      const controlsTab = document.getElementById(item.getAttribute('aria-controls'));
      if (!controlsTab) {
        return;
      }
      controlsTab.setAttribute('hidden', 'hidden');
    };

    focusCb = ({item}) => {
      if (!item) {
        return;
      }
      item.focus();
    };

    /**
     * Creates a Tablist.
     * @param {Element} tablistEl - container element for Tablist
     * @param {String} selectorTab - CSS string selector to find each Tab (not parent-child restricted)
     * @param {Function} activateCb - callback function to call when a Tab is activated
     * @param {Function} deactivateCb - callback function to call when a Tab is deactivated
     * @param {Function} focusCb - callback function to call when a Tab is focussed
     * @param {Object|Boolean} isAutoInit whether to add behavior etc on creation (default is true)
     */
    constructor({tablistEl, selectorTab, activateCb, deactivateCb, focusCb, isAutoInit=true}) {
      // Used to construct Listnav
      if (!tablistEl || !selectorTab) {
        throw new Error('Tabslist requires both tabslistEl and selectorTab');
      }
      this.tablistEl = tablistEl;
      this.selectorTab = selectorTab;

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

      if (isAutoInit) {
        this.init();
      }
    }

    /**
     * Initializes Hotkeys
     */
    init() {
      this.listnav = this.build();
    }

    /**
     * Construct tab navigation out of the listnav using custom tab callbacks
     * @return {ListNav} tab items used to create a Tablist
     */
    build() {
      return new Keynav({
        listEl: this.tablistEl,
        listItemsSelector: this.selectorTab,
        activateCb: this.activateCb,
        deactivateCb: this.deactivateCb,
        focusCb: this.focusCb,
      });
    }

    /**
     * Convenience method used to build Tablists from the DOM.
     * @param {Object|String} selectorTablist use instead to get the tablistEls
     * @param {Object|String} selectorTab gets tab items used to create a Tablist
     * @return {Tablist} built tablist
     */
    static buildTablists({selectorTablist, selectorTab}) {
      // Create a list of all the Tablists
      let tablistEls = document.querySelectorAll(selectorTablist);
      if (!tablistEls || tablistEls.length === 0) {
        console.log('Tabs, no tablists found.');
        return;
      }
      tablistEls = Array.from(tablistEls);

      const tablists = tablistEls.map((tablistEl) => {
        return new Tablist({
          tablistEl,
          selectorTab,
        });
      });

      return tablists;
    }
}
