var list = document.getElementsByTagName('ul')[0];

//Thêm li vào đầu ul
var newItemFirst = document.createElement('li');
var newTextFirst = document.createTextNode('1.無自覚アプリオリ');
newItemFirst.appendChild(newTextFirst);
list.insertBefore(newItemFirst, list.firstChild);

//Thêm li vào cuối ul
var newItemLast = document.createElement('li');
var newTextLast = document.createTextNode('7.平行線の美学 (Off Vocal)');
newItemLast.appendChild(newTextLast);
list.appendChild(newItemLast);

var listItems = document.querySelectorAll('li');

var heading = document.querySelector('h3');
var headingText = heading.firstChild.nodeValue;
var totalItems = listItems.length;
var newHeading = headingText + '<span>' + totalItems + '</span>';
heading. innerHTML = newHeading;

var i;
for(i = 0; i < listItems.length; i++){
    listItems[i].className = 'dark';
}