import {Keynav} from 'keynav-web';


export class Tablist {
    items = [];
    activateCb = (item) => {
        if (!item) { return; }
        // Only update if el is not currently active, avoids DOM confusion
        if (item.getAttribute('tabindex') !== '0') {
            console.log('0')
            item.setAttribute('tabindex', '0');
        }
    };
    deactivateCb = (item) => {
        if (!item) { return; }
        if (item.getAttribute('tabindex') !== '-1') {
            console.log('-1')
            item.setAttribute('tabindex', '-1');
        }   
    };

    constructor({items, isAutoInit=true, activateCb, deactivateCb}) {
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
        if (isAutoInit) { this.init(); }
    }

    init() {
        // Add keynav to Tabslist items
        // NOTE: Keynav expects a list of lists so wrap items in an array
        Keynav.init({
            items: [this.items],
            activateCb: this.activateCb,
            deactivateCb: this.deactivateCb
        });
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
