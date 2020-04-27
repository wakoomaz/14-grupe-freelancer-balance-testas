"use strict"


function renderData(account) {
    
    let HTML = '';

    for ( let i=0; i<account.length; i++ ) {
    
        const account = accountList[i];
        HTML += `<div class="table-row">
        <div class="cell">${account.month}</div>
        <div class="cell">Sausis</div>
        <div class="cell">${account.income}</div>
        <div class="cell">-</div>
        <div class="cell">${account.expenses}</div>
        </div>`
    
}
}

return document.querySelector('#table-content').innerHTML = HTML;