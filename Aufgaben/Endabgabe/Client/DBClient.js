var EA;
(function (EA) {
    window.addEventListener("load", init);
    // let serverAddress: string = "http://localhost:8100/";
    let serverAddress = "https://lassdasmaldenpapamachen.herokuapp.com/";
    function init(_event) {
        console.log("Init");
        let insertButton = document.getElementById("insert");
        let refreshButton = document.getElementById("refresh");
        let searchButton = document.getElementById("insert2");
        insertButton.addEventListener("click", insert);
        refreshButton.addEventListener("click", refresh);
        searchButton.addEventListener("click", search);
    }
    function insert(_event) {
        let inputs = document.getElementsByTagName("input");
        let query = "command=insert";
        query += "&name=" + EA.name + "&points=" + EA.points;
        console.log(query);
        sendRequest(query, handleInsertResponse);
    }
    function refresh(_event) {
        let query = "command=refresh";
        sendRequest(query, handleFindResponse);
    }
    function sendRequest(_query, _callback) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", serverAddress + "?" + _query, true);
        xhr.addEventListener("readystatechange", _callback);
        xhr.send();
    }
    function handleInsertResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.response);
        }
    }
    function handleFindResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let output = document.getElementsByTagName("textarea")[0];
            output.value = xhr.response;
            // let responseAsJson: JSON = JSON.parse(xhr.response);
            // console.log(responseAsJson);
        }
    }
    function search(_event) {
        let inputs = document.getElementsByTagName("input");
        let query = "command=search";
        query += "&matrikel=" + inputs[3].value;
        sendRequest(query, handleFindResponse);
    }
})(EA || (EA = {}));
//# sourceMappingURL=DBClient.js.map