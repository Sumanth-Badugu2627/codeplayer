document.addEventListener("DOMContentLoaded", function () {
    function updateOutput() {
        // Fetch code from HTML, CSS, and JS textareas
        var htmlCode = document.getElementById("htmlv").value;
        var cssCode = document.getElementById("cssv").value;
        var jsCode = document.getElementById("jsv").value;

        // Get the output iframe
        var outputFrame = document.getElementById("output-frame");

        // Construct the full HTML document to be displayed in the iframe
        var fullHTML = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>WebPlayer Output</title>
                <style>${cssCode}</style>
            </head>
            <body>${htmlCode}</body>
            <script>${jsCode}</script>
            </html>`;

        // Set the content of the iframe
        outputFrame.contentDocument.open();
        outputFrame.contentDocument.write(fullHTML);
        outputFrame.contentDocument.close();
    }

    // Update the output on initial load
    updateOutput();

    // Update the output whenever there is a change in HTML, CSS, or JS content
    document.getElementById("htmlv").addEventListener("input", updateOutput);
    document.getElementById("cssv").addEventListener("input", updateOutput);
    document.getElementById("jsv").addEventListener("input", updateOutput);
});

