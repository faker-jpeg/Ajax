'use strict'

function handleAjaxResponse(evnt) {
    
    let loadedData = evnt.target.response;
    document.querySelector('#results').textContent = `${loadedData.firstName} ${loadedData.lastName} ${loadedData.major} ${loadedData.courseNumbers}`;
}


function makeAjaxRequest(evnt) {
    let request = new XMLHttpRequest(); // building an object
    request.open('GET', 'ajaxconcepts.json');
    request.responseType = 'json';
    request.send();
    
    request.addEventListener('load', handleAjaxResponse);

    request.addEventListener('error', function(evnt) {
        console.error(evnt);


    });
}

function main() {
    document
    .querySelector('#load-button')
    .addEventListener('click', makeAjaxRequest);
}

main();

// I have been at this for hours, when you grade this can you please explain what I am doing wrong, when I hit the load button nothing happens. 