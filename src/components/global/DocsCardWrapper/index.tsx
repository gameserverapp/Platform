import React from 'react';

import './cards.css';

function DocsCardWrapper(props): JSX.Element {
    return <docs-cards-wrapper class={props.className}>{props.children}</docs-cards-wrapper>;
}

export default DocsCardWrapper;