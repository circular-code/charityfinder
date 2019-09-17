$(document).ready(function() {

    var regionInput = $("#region").dxSelectBox({
        dataSource: ["everywhere", "europe", "asia", "north-america", "south-america", "australia", "africa", "germany", "england", "greece"],
        stylingMode: "filled",
        width: "200px",
        showClearButton: true,
        value: "germany",
        placeholder: "..."
    }).dxSelectBox("instance");

    var categoryInput = $("#category").dxSelectBox({
        dataSource: ["animals", "alcohol", "drugs", "culture", "community", "disabled", "family", "youth", "kids", "sport", "violence", "education", "environment", "health", "people", "old age", "unemployment", "rights", "religion", "research"],
        stylingMode: "filled",
        width: "200px",
        showClearButton: true,
        value: "animals",
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

    $('#go').on('click', search);

    function search () {
        var region = regionInput.option('value') || "";
        var category = categoryInput.option('value') || "";
        var search = searchInput.option('value') || "";

        var href = "data?";

        if (region)
            href += "region=" + region + "&";

        if (category)
            href += "category=" + category + "&";

        if (search)
            href += "search=" + search + "&";

        window.location.href = href;
    }
});

