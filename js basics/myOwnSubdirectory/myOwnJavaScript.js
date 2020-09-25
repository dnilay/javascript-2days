// 
// This is an external JavaScript file
//
document.write("<h1>This is a heading</h1>");
document.write("<p>This is a paragraph.</p>");
document.write("<p>This is another paragraph.</p>");

// The alert message below gets executed when the page is loaded
alert("Hello Boston! This message gets displayed when a page is loaded.");

// If alert("Hello world!!") below had not been written within a
// function, it would have been executed when page is loaded.
// Since it is within a function, it will be invoked only when
// displaymessage() function is invoked.
function displaymessage() {
    alert("Hello World! ");
}