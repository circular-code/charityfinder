$(document).ready(function() {

    var regionInput = $("#region").dxSelectBox({
        dataSource: ["Germany","England","Greece"],
        stylingMode: "filled",
        width: "200px",
        showClearButton: true,
        value: "Germany",
        placeholder: "..."
    }).dxSelectBox("instance");

    var categoryInput = $("#category").dxSelectBox({
        dataSource: ["All","Health","Animals"],
        stylingMode: "filled",
        width: "200px",
        showClearButton: true,
        value: "Health",
        placeholder: "..."
    }).dxSelectBox("instance");

    var searchInput = $("#searchInput").dxTextBox({
        showClearButton: true,
        stylingMode: "filled",
        placeholder: "...",
        width: "200px",
        onKeyDown: function(n) {
            n.event.key === "Enter" && console.log('test');
        }
    }).dxTextBox("instance");

    $('#go').on('click', function() {

        var region = regionInput.option('value') || "";
        var category = categoryInput.option('value') || "";
        var search = searchInput.option('value') || "";

        window.location.href = "data?region=" + region + "&category=" + category + "&search=" + search;
    });
});