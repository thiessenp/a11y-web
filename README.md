# a11y-web (TODO)
accessibility widgets and tests (Work In Progress)

Nothing is complete here yet.


## Tabs Component 

Adds keynav and related ARIA property updates on a behavior.

JS:
Run tabs. This parses the DOM looking for data ayw-tab* attributes.
```
import A11yWeb from 'a11y-web';
A11yWeb.Tabs.init();
```

HTML:
Some structure is required. For the Tab list container add a  `role=tablist` and `data-ayw-tablist` attributes. For the child Tabs add a `role=tab` and `data-ayw-tab` attribute. Also to create a relationship between Tab and Tabpanel, on each Tabpanel add a `id="<my-id>"` (and `role=tabpenl`). On each Tab add an `aria-controls="<my-id>"`.
```
<ul role="tablist" aria-orientation="vertical" aria-label="Example Tab Sections" data-ayw-tablist>  
    <li>
        <button id="tab1-button" role="tab" aria-controls="section1-button" aria-selected="true" data-ayw-tab>	
            Section 1
        </button>
    </li>
    <li>
        <button id="tab2-button" role="tab" aria-controls="section2-button" tabindex="-1" data-ayw-tab>
            Section 2
        </button>
    </li>
    <li>
        <button id="tab3-button" role="tab" aria-controls="section3-button" tabindex="-1" data-ayw-tab>
            Section 3
        </button>
    </li>
    <li>
        <button id="tab4-button" role="tab" aria-controls="section4-button" tabindex="-1" data-ayw-tab>
            Section 4
        </button>
    </li>
</ul>  
<section id="section1-button" role="tabpanel" aria-labelledby="tab1-button" tabindex="0" data-ayw-tabpanel>  
    Section 1 Tab Panel
</section>  
<section id="section2-button" role="tabpanel" aria-labelledby="tab2-button" tabindex="0" hidden="" data-ayw-tabpanel>  
    Section 2 Tab Panel
</section> 
```
