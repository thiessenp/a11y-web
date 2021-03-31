
import {Keynav} from 'keynav-web';


/**
 * Creates a Menu.
 */
export class Menu {
    isInitialized = false;

    menuEL;

    menuItemsSelector; //Temp

    listEl;

    listItemsSelector;

    menuKeynav;

    listKeynav;

    // // NOTE: Remember, called in and using `this` in Listnav so must by function
    // menuActivateCb = function({item, isInit=false}) {
    //   if (!item) {
    //     return;
    //   }
    //   console.log('menu activateCb');
    // };

    // menuDeactivateCb = ({item}) => {
    //   if (!item) {
    //     return;
    //   }

    //   console.log('menu deactivateCb');
    // };

    // focusCb = ({item}) => {
    //   if (!item) {
    //     return;
    //   }
    //   item.focus();
    // };

    /**
     * Creates a Menu.
     * @param {Element} menuEL - element for menu button
     * @param {Element} listEl - element for menu list
     * @param {Function} activateCb - callback function to call when a Tab is activated
     * @param {Function} deactivateCb - callback function to call when a Tab is deactivated
     * @param {Function} focusCb - callback function to call when a Tab is focussed
     * @param {Object|Boolean} isAutoInit whether to add behavior etc on creation (default is true)
     */
    constructor({menuEL, listEl, menuItemsSelector, listItemsSelector, /*activateCb, deactivateCb, focusCb,*/ isAutoInit=true}) {
      if (!menuEL || !listEl || !listItemsSelector || !menuItemsSelector) {
        throw new Error('Menu requires both menuEL, listEl, and menuItemsSelector');
      }
      this.menuEL = menuEL;
      this.listEl = listEl;
      this.menuItemsSelector = menuItemsSelector;
      this.listItemsSelector = listItemsSelector;

      // // Potentially enable callbacks for increased flexibility on item activation
      // if (activateCb && typeof activateCb === 'function') {
      //   this.activateCb = activateCb;
      // }
      // if (deactivateCb && typeof deactivateCb === 'function') {
      //   this.deactivateCb = deactivateCb;
      // }
      // if (focusCb && typeof focusCb === 'function') {
      //   this.focusCb = focusCb;
      // }

      if (isAutoInit) {
        this.init();
      }
    }

    /**
     * Initializes Menu
     */
    init() {
      // Using Keynav's list structure etc. may be overkill to control just 
      // one button.
      this.menuKeynav = new Keynav({
        listEl: this.menuEl,
        listItemsSelector: this.menuItemsSelector,
        customKeys: {
            // Next now ONLY uses the DOWN arrow and NOT the right key as well
            OPEN: {
                keys: ['Enter', 'Space', 'ArrowDown'],
                // WARNING: run must NOT be an arrow function because would get bound to wrong `this`
                run: function(e) {
                    e.preventDefault();
                    // const next = this.getNext(e.target);
                    // this.focusCb({item: next});
                    // console.log('Custom Test: ArrowDown/ArrowRight test, next=', next);
                    console.log('open')
                }
            },
            // Actions can have any name, what matters more is the keys
            CLOSE: {
                keys: ['Escape'],
                run: function(e) {
                    console.log('close');
                }
            }
        }
      });

      this.listKeynav = new Keynav({
        listEl: this.listEl,
        listItemsSelector: this.listItemsSelector,
      });

      console.log(this)
    }

}
