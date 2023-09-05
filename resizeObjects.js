(function () {

    // Initialize the document and selection
    var doc = app.activeDocument;
    var selection = doc.selection;

    // Constants
    var WIDTH_BASE = 50;
    var SCALE_FACTOR = 0.525;

    // Main function to resize items
    function resizeItems(selection) {
        for (var j = 0; j < selection.length; j++) {
            var item = selection[j];
            var newSize = calculateNewSize(item.width, item.height);
            resizeItem(item, newSize.newWidth, newSize.newHeight);
        }
    }

    // Function to calculate new size
    function calculateNewSize(itemWidth, itemHeight) {
        var itemRatio = itemWidth / itemHeight;
        var newWidth = Math.pow(itemRatio, SCALE_FACTOR) * WIDTH_BASE;
        var newHeight = newWidth / itemRatio;
        return { newWidth: newWidth, newHeight: newHeight };
    }

    // Function to resize an individual item
    function resizeItem(item, newWidth, newHeight) {
        var xScale = (newWidth / item.width) * 100;
        var yScale = (newHeight / item.height) * 100;
        item.resize(xScale, yScale, true, true, true, true, 1);
    }

    // Run the main function
    resizeItems(selection);

})();
