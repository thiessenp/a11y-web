// WEBPACK IS SO ERROR PRONE... (consider dropping it.)
// Webpack has trouble importing projects created with Webpack, so use the source.
// BUT when use as an ES module, the bable-loader isn't run and gives an error about
// class properties.
// Currently importing the "compiled" project works.. (so remove "modules":{..} part
// from Keynav project for now)
import KeynavWeb, {Keynav} from 'keynav-web';
// console.log('KeynavWeb', KeynavWeb, Keynav)


// TODO: consider how to enable up/down keys (remove from Tablist behavior)
// probably use the aria-orientation and for:
// - vertical: enable up/down
// - horizontal: enable left/right
// (is this really necessary?! can just leave all?)

export class Tablist {
    items = [];

    isInitialized = false;

    activateCb = (item) => {
        if (!item) { return; }
        // Skip activating if already active
        const newActive = item;
        if (newActive.getAttribute['aria-selected'] === 'true') { return; }

        // Remove any lingering state on the old active element(s)
        const oldActive = this.items.find(item => item.getAttribute('aria-selected') === 'true');
        this.deactivateCb(oldActive);

        // Activate the new Tab
        item.setAttribute('tabindex', '0');
        item.setAttribute('aria-selected', 'true');

        // Also activate (and focus) the Tabpanel
        const controlsTab = document.getElementById(item.getAttribute('aria-controls'));
        if (!controlsTab) { return; }
        controlsTab.setAttribute('tabindex', '0');
        controlsTab.removeAttribute('hidden');
        this.focussedCb(controlsTab);
    };

    deactivateCb = (item) => {
        if (!item) { return; }
 
        // Deactivate Tab
        item.setAttribute('tabindex', '-1');
        item.setAttribute('aria-selected', 'false');
        
        // Deactivate Tabpanel
        const controlsTab = document.getElementById(item.getAttribute('aria-controls'));
        if (!controlsTab) { return; }
        controlsTab.setAttribute('hidden', 'hidden');
    };

    focussedCb = (item) => {
        if (!item) { return; }
        item.focus();
    };

    constructor({items, isAutoInit=true, activateCb, deactivateCb, focussedCb}) {
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
        if (focussedCb && typeof focussedCb === 'function') {
            this.focussedCb = focussedCb;
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
            focussedCb: this.focussedCb
        });

        this.isInitialized = true;
    }

    static createListsFromDOM({selectorTablist, selectorTab}) {
        const containerListEls = document.querySelectorAll(selectorTablist);
        // Array of NodeLists
        let childListsEls = [];

        containerListEls.forEach(function(containerListEl) {
            childListsEls.push(containerListEl.querySelectorAll(selectorTab));
        });

        return childListsEls;
    }

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
