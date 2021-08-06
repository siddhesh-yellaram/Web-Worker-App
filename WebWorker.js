var i = 0;

function infiniteLoop() {
    while (true) {
        i += 1
        postMessage(i);
        postMessage("Printing through Web Worker")
        setTimeout("infiniteLoop()", 500);
    }
}

infiniteLoop();