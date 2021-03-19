
// import {ListNav} from 'keynav-web';


/**
 * Creates a Menu.
 */
export class Menu {
    isInitialized = false;

    menuButtonEL;

    menuListEl;

    // NOTE: Remember, called in and using `this` in Listnav so must by function
    activateCb = function({item, isInit=false}) {
      if (!item) {
        return;
      }
      console.log('menu activateCb');
    };

    deactivateCb = ({item}) => {
      if (!item) {
        return;
      }

      console.log('menu deactivateCb');
    };

    focusCb = ({item}) => {
      if (!item) {
        return;
      }
      item.focus();
    };

    /**
     * Creates a Menu.
     * @param {Element} menuButtonEL - element for menu button
     * @param {Element} menuListEl - element for menu list
     * @param {Function} activateCb - callback function to call when a Tab is activated
     * @param {Function} deactivateCb - callback function to call when a Tab is deactivated
     * @param {Function} focusCb - callback function to call when a Tab is focussed
     * @param {Object|Boolean} isAutoInit whether to add behavior etc on creation (default is true)
     */
    constructor({menuButtonEL, menuListEl, activateCb, deactivateCb, focusCb, isAutoInit=true}) {
      if (!menuButtonEL || !menuListEl) {
        throw new Error('Menu requires both menuButtonEL and menuListEl');
      }
      this.menuButtonEL = menuButtonEL;
      this.menuListEl = menuListEl;

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
     * Initializes Menu
     */
    init() {
      //this.listnav = this.build();
    }

    /**
     * Construct tab navigation out of the listnav using custom tab callbacks
     * @return {ListNav} tab items used to create a Tablist
     */
    build() {
      // return new ListNav({
      //   listEl: this.tablistEl,
      //   listItemsSelector: this.selectorTab,
      //   activateCb: this.activateCb,
      //   deactivateCb: this.deactivateCb,
      //   focusCb: this.focusCb,
      // });
    }

    /**
     * Convenience method used to build Tablists from the DOM.
     * @param {Object|String} selectorTablist use instead to get the tablistEls
     * @param {Object|String} selectorTab gets tab items used to create a Tablist
     * @return {Tablist} built tablist
     */
    static buildTablists({selectorTablist, selectorTab}) {
      // // Create a list of all the Tablists
      // let tablistEls = document.querySelectorAll(selectorTablist);
      // if (!tablistEls || tablistEls.length === 0) {
      //   console.log('Tabs, no tablists found.');
      //   return;
      // }
      // tablistEls = Array.from(tablistEls);

      // const tablists = tablistEls.map((tablistEl) => {
      //   return new Tablist({
      //     tablistEl,
      //     selectorTab,
      //   });
      // });

      // return tablists;
    }
}
