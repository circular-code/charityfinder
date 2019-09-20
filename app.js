var continents = {};
$(document).ready(function() {

    var regions = ["everywhere", "europe", "asia", "northamerica", "southamerica", "australia", "africa", "germany", "england", "greece"];
    var categories = ["animals", "alcohol", "drugs", "culture", "community", "disabled", "family", "youth", "kids", "sport", "violence", "education", "environment", "health", "old age", "unemployment", "rights", "religion", "research"];

    var regionInput = $("#region").dxSelectBox({
        dataSource: regions,
        stylingMode: "filled",
        width: "200px",
        showClearButton: true,
        value: "germany",
        placeholder: "everywhere",
        openOnFieldClick: false,
        onFocusIn: function(e) {
            regionPopup.show();
        }
    }).dxSelectBox("instance");

    var categoryInput = $("#category").dxSelectBox({
        dataSource: categories,
        stylingMode: "filled",
        width: "200px",
        showClearButton: true,
        value: "animals",
        placeholder: "any",
        openOnFieldClick: false,
        onFocusIn: function(e) {
            categoryPopup.show();
        }
    }).dxSelectBox("instance");

    var searchInput = $("#searchInput").dxTextBox({
        showClearButton: true,
        stylingMode: "filled",
        placeholder: "your searchterm",
        width: "200px",
        onKeyDown: function(n) {
            n.event.key === "Enter" && console.log('test');
        }
    }).dxTextBox("instance");

    var regionPopup = $('#regionPopup').dxPopup({
        title: 'Choose a region',
        contentTemplate: function() {

            var container = $('<div></div>');
            container.addClass('region-wrapper');

            var worldmap = $("<div>").dxVectorMap({
                layers: {
                    name: "areas",
                    dataSource: world,
                    // dataSource: DevExpress.viz.map.sources.eurasia, 
                    colorGroups: [0, 10000, 50000, 100000, 500000, 1000000, 10000000, 50000000],
                    colorGroupingField: "total",
                    label: {
                        enabled: true,
                        dataField: "name"
                    },
                    customize: function (elements) {
                        $.each(elements, function (_, element) {
                            element.applySettings({
                                hoveredColor: "#44E073",
                                selectedColor: "#44E073"
                            });
                        });
                    }       
                },
                onClick: function (e) {
                    if (e.target) {
                        handleMapSelection(e);
                    }
                },
                tooltip: {
                    enabled: true,
                    border: {
                        visible: false
                    },
                    font: { color: "#fff" },
                    customizeTooltip: function (arg) {
                        return {color: '#333333' };
                    }
                },
                // bounds: [-180, 85, 180, -60]
            });

            container.append(worldmap);

            return container;
        },
        dragEnabled: false,
        closeOnOutsideClick: true,
        height: '70%',
        width: '70%',
        animation: {
            show: { type: 'slide', from: { opacity: 1, top: -$(window).height() }, to: { top: 50 } },
            hide: { type: 'slide', from: { top: 50 }, to: { top: -$(window).height() } }
        }
    }).dxPopup('instance');

    var categoryPopup = $('#categoryPopup').dxPopup({
        title: 'Choose a category',
        contentTemplate: function() {

            var container = $('<div></div>');
            container.addClass('category-wrapper');

            for (var i = 0; i < categories.length; i++) {
                var category = categories[i];

                container.append(createCategory(category));
            }

            return container;
        },
        dragEnabled: false,
        closeOnOutsideClick: true,
        height: '650px',
        width: '70%',
        animation: {
            show: { type: 'slide', from: { opacity: 1, top: -$(window).height() }, to: { top: 50 } },
            hide: { type: 'slide', from: { top: 50 }, to: { top: -$(window).height() } }
        }
    }).dxPopup('instance');

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

    function createCategory (category) {
        var container = $('<div>');
        container.addClass('category');

        var title = $('<h3>');
        title.text(category);

        var img = $('<img>');
        img.attr('src', "img/" + category + ".png");
        img.attr('alt', category + " icon");

        container.append(img);
        container.append(title);
        container.on('click', function() {
            categoryInput.option('value', category);
            categoryPopup.hide();
        });

        return container;
    }

    function handleMapSelection (e) {
        var continent = e.target.attribute().CONTINENT;
        if (continent) {
            regionInput.option('value', continent.toLowerCase());

            if (!continents[continent]) {
                $.getScript(continent.toLowerCase() + ".js").done(function(){
                    var layers = {
                        name: "areas",
                        dataSource: continents[continent],
                        colorGroups: [0, 10000, 50000, 100000, 500000, 1000000, 10000000, 50000000],
                        colorGroupingField: "total",
                        label: {
                            enabled: true,
                            dataField: "name"
                        },
                        customize: function (elements) {
                            $.each(elements, function (_, element) {
                                element.applySettings({
                                    hoveredColor: "#44E073",
                                    selectedColor: "#44E073"
                                });
                            });
                        } 
                    };
                    e.component.option('layers', layers);
                    e.component.render();
                });
            }
            else {
                var layers = {
                    name: "areas",
                    dataSource: continents[continent],
                    colorGroups: [0, 10000, 50000, 100000, 500000, 1000000, 10000000, 50000000],
                    colorGroupingField: "total",
                    label: {
                        enabled: true,
                        dataField: "name"
                    },
                    customize: function (elements) {
                        $.each(elements, function (_, element) {
                            element.applySettings({
                                hoveredColor: "#44E073",
                                selectedColor: "#44E073"
                            });
                        });
                    } 
                };
                e.component.option('layers', layers);
                e.component.render();
            }
        }
        else {
            regionInput.option('value', e.target.attribute().name.toLowerCase());

            var layers = {
                name: "areas",
                dataSource: world,
                // dataSource: DevExpress.viz.map.sources.eurasia, 
                colorGroups: [0, 10000, 50000, 100000, 500000, 1000000, 10000000, 50000000],
                colorGroupingField: "total",
                label: {
                    enabled: true,
                    dataField: "name"
                },
                customize: function (elements) {
                    $.each(elements, function (_, element) {
                        element.applySettings({
                            hoveredColor: "#44E073",
                            selectedColor: "#44E073"
                        });
                    });
                }
            };
            e.component.option('layers', layers);
            regionPopup.hide();
            e.component.render();
        }
    }
});

{/* <script src="https://cdn3.devexpress.com/jslib/19.1.6/js/vectormap-data/africa.js"></script>
<script src="https://cdn3.devexpress.com/jslib/19.1.6/js/vectormap-data/europe.js"></script>

<script src="https://cdn3.devexpress.com/jslib/19.1.6/js/vectormap-data/canada.js"></script>
<script src="https://cdn3.devexpress.com/jslib/19.1.6/js/vectormap-data/eurasia.js"></script>
<script src="https://cdn3.devexpress.com/jslib/19.1.6/js/vectormap-data/usa.js"></script> */}
