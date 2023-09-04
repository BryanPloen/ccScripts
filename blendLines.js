(function () {


    var doc = app.activeDocument;
    var PTS_MM = 2.834645;

    var height = doc.height;
    var width = doc.width;
    doc.rulerOrigin = [0, height];

    var newLayer = doc.layers.add()


    var p1 = { x: 0, y: 0 }, p2 = { x: 0, y: 0 }, p3 = { x: 0, y: 0 }, p4 = { x: 0, y: 0 };
    setPoint();


    lineTo(p1.x, -p1.y, p2.x, -p2.y, makeColorCMYK(20, 0, 0, 0))
    lineTo(p3.x, -p3.y, p4.x, -p4.y, makeColorCMYK(50, 20, 0, 10))


    doc.selectObjectsOnActiveArtboard();
    app.executeMenuCommand('Path Blend Options');
    app.executeMenuCommand('Path Blend Make');

    function makeColorCMYK(c, m, y, k) {
        var ink = new CMYKColor();
        ink.cyan = c;
        ink.magenta = m;
        ink.yellow = y;
        ink.black = k;
        return ink;
    }

    function lineTo(x1, y1, x2, y2, c) {
        // draw line
        var p = newLayer.pathItems.add();
        var lineList = new Array([x1, y1], [x2, y2]);
        p.setEntirePath(lineList);
        p.filled = false;
        p.strokeWidth = 0.25 * PTS_MM;
        p.strokeColor = c;
        p.strokeCap = StrokeCap.ROUNDENDCAP
    }


    function setPoint() {
        p1.x = Math.random() * width;
        p2.x = Math.random() * width;
        p3.x = Math.random() * width;
        p4.x = Math.random() * width;
        p1.y = Math.random() * height;
        p2.y = Math.random() * height;
        p3.y = Math.random() * height;
        p4.y = Math.random() * height;
    }

})();