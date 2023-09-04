(function(){
    
var aDoc = app.activeDocument;
var aBoards = aDoc.artboards;

// Create a window for user input
var w = new Window("dialog", "Grid Settings");
var p = w.add('panel');
var g = p.add('group');

// Add a text field for rows
g.add("statictext", undefined, "Rows:");
var rowsField = g.add("edittext", undefined, "1");

// Add a text field for columns
g.add("statictext", undefined, "Columns:");
var columnsField = g.add("edittext", undefined, "1");

rowsField.preferredSize = [30, -1];
columnsField.preferredSize = [30, -1];
g.alignChildren = 'center';

// Add an OK and Cancel button
var okButton = w.add("button", undefined, "OK");
var cancelButton = w.add("button", undefined, "Cancel");

// When the OK button is clicked
okButton.onClick = function () {
    var rows = parseInt(rowsField.text);
    var columns = parseInt(columnsField.text);

    for (var i = 0; i < aBoards.length; i++) {
        var aRect = aBoards[i].artboardRect;
        var artboardWidth = aRect[2] - aRect[0];
        var artboardHeight = aRect[1] - aRect[3];
        var artboardX = aRect[0];
        var artboardY = aRect[1];

        // Calculate cell size 
        var cellWidth = artboardWidth / columns;
        var cellHeight = artboardHeight / rows;

        // Draw guides for each row and column
        for (var j = 0; j < rows; j++) {
            // Calculate the y coordinate of the guide
            var guideY = artboardY - (j * cellHeight);
            // Draw the horizontal guide
            drawGuide(artboardX, guideY, artboardX + artboardWidth, guideY);
        }
        for (var k = 0; k < columns; k++) {
            // Calculate the x coordinate of the guide
            var guideX = artboardX + (k * cellWidth);
            // Draw the vertical guide
            drawGuide(guideX, artboardY, guideX, artboardY - artboardHeight);
        }
    }

    w.close();
}

// When the Cancel button is clicked
cancelButton.onClick = function () {
    w.close();
}

// Show the window
w.show();

function drawGuide(x1, y1, x2, y2) {
    var _lft = x1;
    var _top = y1;
    var _rgt = x2;
    var _btm = y2;
    var line = aDoc.pathItems.add();
    line.setEntirePath(Array(Array(_lft, _top), Array(_rgt, _btm)));
    line.guides = true;
}
})();