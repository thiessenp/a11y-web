# a11y-web
A few accessibile components and tests (*very* Work In Progress).

## Tabs Component (WIP)

Adds keynav and related ARIA property updates on a behavior.

Some structure is required. For the Tab list container add a  `role=tablist` and `data-ayw-tablist` attributes. For the child Tabs add a `role=tab` and `data-ayw-tab` attribute. Also to create a relationship between Tab and Tabpanel, on each Tabpanel add a `id="<my-id>"` (and `role=tabpenl`). On each Tab add an `aria-controls="<my-id>"`.

Example:
```
// JS - parses DOM searching for elements with data ayw-tab*
import {Tablist} from 'a11y-web';
...
const tablists = Tablist.buildTablists({
    selectorTablist: '[data-ayw-tablist]',
    selectorTab: '[data-ayw-tab]'
});

// HTML
<ul role="tablist" aria-orientation="vertical" aria-label="Example Tab Sections" data-ayw-tablist>  
    <li>
        <button id="tab1-button" role="tab" aria-controls="section1-button" aria-selected="true" data-ayw-tab>	
            Section 1
        </button>
    </li>
    ...
</ul>  
<section id="section1-button" role="tabpanel" aria-labelledby="tab1-button" tabindex="0" data-ayw-tabpanel>  
    Section 1 Tab Panel
</section>  
...
```
