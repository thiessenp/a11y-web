import {Hotkeys} from 'keynav-web';

export class Dialog {
    hotkeys = [];

    dialogHotkeys;

    containerEl;

    selectorHotkeys = '[data-knw-hotkeys-dialog-key]';

    selectorFocus = '[data-ayw-dialog-focus]';

    openCallback = () => {
        // Show the dialog
        this.containerEl.removeAttribute('hidden');

        // Activate any hotkeys
        this.dialogHotkeys.pub({ topic: 'knw.hotkeys.activateDialog' });

        // Focus the focussubale element
        // Note: A control should have default focus (WCAG criteria)
        let focusEl = this.containerEl.querySelector('[data-ayw-dialog-focus]');
        console.log('focusEl', focusEl)
        // or if no controls, just focus the first heading or container to make
        // Escape key work.
        if (!focusEl) {
            focusEl = this.containerEl.querySelector('h2') || 
                this.containerEl.querySelector('h3') ||
                this.containerEl.querySelector('h4') ||
                this.containerEl.querySelector('h5');

            if (!focusEl) {
                focusEl = this.containerEl;
            }
        }
        // For programmatic focus, unnecessary if an input/button but also won't
        // hurt anything.
        if (!focusEl.getAttribute('tabindex')) {
            focusEl.setAttribute('tabindex', '-1');
        }
        setTimeout(function() { focusEl.focus(); }, 200);
    };

    closeCallback = () => {
        this.containerEl.setAttribute('hidden', '');
        // TODO: 
        // '.activateGlobal' probably more intuitive
        this.dialogHotkeys.pub({ topic: 'knw.hotkeys.activate' });
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
};

