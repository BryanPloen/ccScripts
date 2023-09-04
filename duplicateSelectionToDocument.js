(function() {

var newItem;
var docSelected = app.activeDocument.selection;
var x = app.activeDocument.width;
var y = app.activeDocument.height;

if (docSelected.length > 0) {
  // Create a new document and move the selected items to it.
  var newDoc = app.documents.add(DocumentColorSpace.CMYK, x, y);
  newDoc.rulerOrigin = [0, y];
  newDoc.units = RulerUnits.Millimeters;

  if (docSelected.length > 0) {
    for (var i = 0; i < docSelected.length; i++) {
      docSelected[i].selected = false;
      newItem = docSelected[i].duplicate(newDoc, ElementPlacement.PLACEATEND);
    }
  } else {
    docSelected.selected = false;
    newItem = docSelected.parent.duplicate(newDoc, ElementPlacement.PLACEATEND);
  }
} else {
  alert("Please select one or more art objects");
}


})()
