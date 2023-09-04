var target = app.activeDocument.gradients;
var file = new File(new File($.fileName).path + "/properties.txt");
file.open("w");
for (var property in target) {
    try {
        file.writeln(property + ": " + target[property]);
    } catch (_) {
        file.writeln(property + ": failed to get value");
    }
}
file.close();
//alert("File output");