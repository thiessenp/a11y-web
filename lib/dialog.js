import {Hotkeys, FocusTrap} from 'keynav-web';


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
        button:not([disabled]), 
        textarea:not([disabled]), 
        input:not([disabled]),
        select:not([disabled]), 
        [tabindex="0"]
    `;

    openCallback = () => {
        // Note the triggering element to return focus there when closing (WCAG)
        this.returnFocusToEl = document.activeElement;

        // Show the dialog
        this.containerEl.removeAttribute('hidden');

        // Activate any hotkeys
        this.dialogHotkeys.pub({ topic: 'knw.hotkeys.activateDialog' });

        // Activate Focus Trap
        this.focusTrap = new FocusTrap({
            containerEl: this.containerEl,
        });
        console.log('focusTrap=', this.focusTrap);

        // Focus an initial element as the Entry point
        // Note: A control should have default focus (WCAG criteria)
        const focusEl = this.getItemToDoInitialFocus();
        if (focusEl) { focusEl.focus(); }
    };

    closeCallback = () => {
        this.containerEl.setAttribute('hidden', '');
        // TODO: 
        // '.activateGlobal' probably more intuitive
        this.dialogHotkeys.pub({ topic: 'knw.hotkeys.activate' });

        // Deactivate focus trap
        this.focusTrap.remove();

        // Return document focus to the element that triggered the dialog (WCAG)
        this.returnFocusToEl.focus();
    };

    constructor({containerEl, selectorHotkeys, selectorFocus, hotkeys, openCallback, closeCallback, isAutoInit=true}) {
        if (!containerEl) { 
            throw new Error('Dialog requires a containerEl');
        }
        this.containerEl = containerEl;

        if (selectorHotkeys) { this.selectorHotkeys = selectorHotkeys; }
        if (selectorFocus) { this.selectorFocus = selectorFocus; }
        if (hotkeys) { this.hotkeys = hotkeys; }

        // Potentially enable callbacks for increased flexibility on item activation
        if (openCallback && typeof openCallback === 'function') {
            this.openCallback = openCallback;
        }
        if (closeCallback && typeof closeCallback === 'function') {
            this.closeCallback = closeCallback;
        }

        if (isAutoInit) { this.init(); }
    }

    init() {
        this.addBehavior();
    }

    open() { this.openCallback(); }

    close() { this.closeCallback(); }

    addBehavior() {
        this.dialogHotkeys = Hotkeys.buildDialog({
            containerEl: this.containerEl,
            selectorHotkeys: this.selectorHotkeys
        });

        const closeEl = this.containerEl.querySelector('[data-ayw-dialog-close]');
        let closeCallbackClick;
        if (closeEl) {
            closeCallbackClick = (e) => { this.close(); };
            closeEl.addEventListener('click', closeCallbackClick);
        }
    }

    // NOTE: A control should have default focus (WCAG criteria)
    //
    // TODO: could also take the first element and force focus with a tabindex
    // but probably a bad idea.
    getItemToDoInitialFocus() {
        // Precedence for user defined element to focus
        let focusEl = this.containerEl.querySelector('[data-ayw-dialog-focus]');
        if (focusEl) { return focusEl; }

        // Selects the first matching element
        focusEl = this.containerEl.querySelector(this.selectorActivatable);
        return focusEl;
    }
};

