(function () {

    var doc = app.activeDocument;
    var selection = doc.selection;


    // Define the base width and scale factor

    var widthBase = 50;  // Overall Size Value
    var scaleFactor = 0.525;

    /** scaleFactor values closer to 0 will result in same
     * width and values closer to one 
     * will result in same height  */

    for (var j = 0; j < selection.length; j++) {

        var itemWidth = selection[j].width;
        var itemHeight = selection[j].height;
        var itemRatio = itemWidth / itemHeight;

        // Apply the Proportional Image Normalization Formula
        var newWidth = Math.pow(itemRatio, scaleFactor) * widthBase;

        // Calculate the new height based on the new width and original aspect ratio
        var newHeight = newWidth / itemRatio;

        // Calculate the percentage change for width and height
        var xScale = (newWidth / itemWidth) * 100;
        var yScale = (newHeight / itemHeight) * 100;

        // Resize the item
        selection[j].resize(xScale, yScale, true, true, true, true, 1);
    }


})();