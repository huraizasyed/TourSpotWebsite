// changes font size
var currentFontSize = 20;

function changeFontSize(action) {
    var Text = document.getElementById('Text');

    if (action === 'increase') {
        currentFontSize += 2;
    } else if (action === 'decrease') {
        currentFontSize -= 2;
    }

    if (Text) {
        Text.style.fontSize = currentFontSize + 'px';
    }
}

// last modified date
document.addEventListener('DOMContentLoaded', function () {
    var lastModifiedDate = document.lastModified;
    var lastModifiedElement = document.getElementById('lastModified');
    if (lastModifiedElement) {
        lastModifiedElement.innerHTML = 'Last Modified: ' + lastModifiedDate;
    }
});