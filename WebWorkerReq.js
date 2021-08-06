function startWorker() {
    if (typeof (Worker) !== "undefined") {
        if (typeof (w) == "undefined") {
            var w = new Worker("WebWorker.js");
        }
        w.onmessage = function (event) {
            document.getElementById("res").innerHTML = event.data;
        }
    } else {
        document.getElementById("res").innerHTML = "Sorry, your browser does not support Web Workers...";
    }
}

var hellobtn = document.getElementById("hello");
hellobtn.addEventListener("click", function () {
    alert("Hello User!!!!")
})

var printbtn = document.getElementById("print")
var mainDiv = document.getElementById('main');
printbtn.addEventListener("click", function () {
    startWorker();
});

var asyncbtn = document.getElementById("async");
asyncbtn.addEventListener("click", function () {
    alert("Print btn is printing data asynchronously!!!")
})