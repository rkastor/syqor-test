function getJsonFromUrl() {
    let url = location.search;
    let urlQuery = url.substr(1); // remove ? in start

    let result = {};

    urlQuery.split("&").forEach(function(part) {
        let item = part.split("=");
        result[item[0]] = decodeURIComponent(item[1]);
    });

    console.log(result);
    return result;
}