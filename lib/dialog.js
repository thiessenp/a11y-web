import {Hotkeys, FocusTrap} from 'keynav-web';

/**
 * Creates a Dialog.
 */
export class Dialog {
    hotkeys = [];

    dialogHotkeys;

    focusTrap;

    containerEl;

    returnFocusToEl;

    selectorHotkeys = '[data-knw-hotkeys-dialog-key]';

    selectorFocus = '[data-ayw-dialog-focus]';

    selectorActivatable = `
        a[href]:not([disabled]), 
        area[href],
        button:not([disabled]), 
        textarea:not([disabled]), 
        input:not([disabled]),
        select:not([disabled]), 
        iframe,
        object,
        embed,
        [tabindex="0"],
        [contenteditable]
    `;

    openCallback = () => {
      // Note the triggering element to return focus there when closing (WCAG)
      this.returnFocusToEl = document.activeElement;

      // Show the dialog
      this.containerEl.removeAttribute('hidden');

      // Activate any hotkeys
      this.dialogHotkeys.pub({topic: 'knw.hotkeys.activateDialog'});

      // Activate Focus Trap
      this.focusTrap = new FocusTrap({
        containerEl: this.containerEl,
      });

      // Focus an initial element as the Entry point
      // Note: A control should have default focus (WCAG criteria)
      const focusEl = this.getItemToDoInitialFocus();
      if (focusEl) {
        focusEl.focus();
      }
    };

    closeCallback = () => {
      this.containerEl.setAttribute('hidden', '');
      // TODO:
      // '.activateGlobal' probably more intuitive
      this.dialogHotkeys.pub({topic: 'knw.hotkeys.activate'});

      // Deactivate focus trap
      this.focusTrap.remove();

      // Return document focus to the element that triggered the dialog (WCAG)
      this.returnFocusToEl.focus();
    };

    /**
     * Creates a Dialog.
     * @param {Object|Element} containerEl element to add dialog to
     * @param {Object|String} selectorHotkeys overrides default selector to find Hotkeys
     * @param {Object|String} selectorFocus specifies what element should receive focus when opening
     * @param {Object|Array} hotkeys list of hotkeys to use in dialog
     * @param {Function} openCallback - callback function to call when a Diaolog is opened
     * @param {Function} closeCallback - callback function to call when a Dialog is closed
     * @param {Object|Boolean} isAutoInit whether to add behavior etc on creation (default is true)
     */
    constructor({containerEl, selectorHotkeys, selectorFocus, hotkeys, openCallback, closeCallback, isAutoInit=true}) {
      if (!containerEl) {
        throw new Error('Dialog requires a containerEl');
      }
      this.containerEl = containerEl;

      if (selectorHotkeys) {
        this.selectorHotkeys = selectorHotkeys;
      }
      if (selectorFocus) {
        this.selectorFocus = selectorFocus;
      }
      if (hotkeys) {
        this.hotkeys = hotkeys;
      }

      // Potentially enable callbacks for increased flexibility on item activation
      if (openCallback && typeof openCallback === 'function') {
        this.openCallback = openCallback;
      }
      if (closeCallback && typeof closeCallback === 'function') {
        this.closeCallback = closeCallback;
      }

      if (isAutoInit) {
        this.init();
      }
    }

    /**
     * Initializes Dialog
     */
    init() {
      this.addBehavior();
    }

    /**
     * Calls the Open callback function - probably showing the dialog
     */
    open() {
      this.openCallback();
    }

    /**
     * Calls the Close callback - probably hiding the dialog
     */
    close() {
      this.closeCallback();
    }

    /**
     * Adds behavior to the dialog.
     */
    addBehavior() {
      this.dialogHotkeys = Hotkeys.buildDialog({
        containerEl: this.containerEl,
        selectorHotkeys: this.selectorHotkeys,
      });

      const closeEl = this.containerEl.querySelector('[data-ayw-dialog-close]');
      let closeCallbackClick;
      if (closeEl) {
        closeCallbackClick = (e) => {
          this.close();
        };
        closeEl.addEventListener('click', closeCallbackClick);
      }
    }

    /**
     * Gets the itme to initial focus when the dialog is open.
     *
     * NOTE: A control should have default focus (WCAG criteria)
     *
     * TODO: could also take the first element and force focus with a tabindex
     * but probably a bad idea.
     *
     * @return {Element} element to focus on open
     */
    getItemToDoInitialFocus() {
      // Precedence for user defined element to focus
      let focusEl = this.containerEl.querySelector('[data-ayw-dialog-focus]');
      if (focusEl) {
        return focusEl;
      }

      // Selects the first matching element
      focusEl = this.containerEl.querySelector(this.selectorActivatable);
      return focusEl;
    }
}

