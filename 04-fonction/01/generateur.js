// js.generateur.js

// Function to create an item for the list
function createItem(itemText) {
    return "<li>" + itemText + "</li>";
}

// Function to create a list of items
function createList(items) {
    var listHTML = "<ul>";
    for (var i = 0; i < items.length; i++) {
        listHTML += "<li>" + items[i] + "</li>";
    }
    listHTML += "</ul>";
    return listHTML;
}
