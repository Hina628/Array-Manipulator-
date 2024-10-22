let myArray = [];
function updateOutput(message = '') {
    document.querySelector('.output').textContent = myArray.join(', ') + ' | ' + message;
}

function addToArray() {
    const inputElement = document.getElementById('inputElement');
    const value = inputElement.value;
    if (value) {
        myArray.push(value); 
        inputElement.value = ''; 
        updateOutput("Element added to the array"); 
    }
}
function pushElement() {
    const value = document.getElementById('inputElement').value;
    if (value) {
        myArray.push(value); 
        updateOutput("Element pushed to the array"); 
    }
}
function popElement() {
    myArray.pop(); 
    updateOutput("Last element popped from the array"); 
}
function shiftElement() {
    myArray.shift(); 
    updateOutput("First element shifted out of the array"); 
}
function unshiftElement() {
    const value = document.getElementById('inputElement').value;
    if (value) {
        myArray.unshift(value); 
        updateOutput("Element unshifted to the start of the array");
    }
}
function sliceArray() {
    const slicedArray = myArray.slice(1, 3); 
    document.querySelector('.output').textContent = `Sliced: ${slicedArray.join(', ')}`;
}
function spliceArray() {
    myArray.splice(1, 1); 
    updateOutput("Element spliced from the array at index 1"); 
}

