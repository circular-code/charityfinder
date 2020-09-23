var continents = {};
$(document).ready(function() {

    // ["everywhere", "europe", "asia", "northamerica", "southamerica", "australia", "africa", "germany", "england", "greece"];
    var treeView;
    var regions = [
        {
            "ID": 1,
            "name": "Everywhere",
            "expanded": true
        },
        {
            "ID": "1_1",
            "categoryId": 1,
            "name": "Europe",
        },
        {
            "ID": "1_2",
            "categoryId": 1,
            "name": "Asia",
        },
        {
            "ID": "1_3",
            "categoryId": 1,
            "name": "North America",
        },
        {
            "ID": "1_4",
            "categoryId": 1,
            "name": "South America",
        },
        {
            "ID": "1_5",
            "categoryId": 1,
            "name": "Australia",
        },
        {
            "ID": "1_6",
            "categoryId": 1,
            "name": "Africa",
        },
        {
            "ID": "1_1_1",
            "categoryId": "1_1",
            "name": "Germany",
            "selected": true,
        },
        {
            "ID": "1_1_2",
            "categoryId": "1_1",
            "name": "England"
        },
        {
            "ID": "1_1_3",
            "categoryId": "1_1",
            "name": "Greece",
            "selected": true,
        }
      ]
    var categories = ["animals", "alcohol", "drugs", "culture", "community", "disabled", "family", "youth", "kids", "sport", "violence", "education", "environment", "health", "old age", "unemployment", "rights", "religion", "research"];

    var regionInput = $("#region").dxDropDownBox({
        stylingMode: "filled",
        dataSource: regions,
        selectByClick: true,
        showCheckBoxesMode: "selectAll",
        width: "400px",
        openOnFieldClick: true,
        showClearButton: true,
        placeholder: "everywhere",
        displayExpr: "name",
        value: ["Germany", "Greece"],
        valueExpr: "name",
        contentTemplate: function(e){
            var value = e.component.option("value");
            $treeView = $("<div>").dxTreeView({
                dataSource: e.component.getDataSource(),
                dataStructure: "plain",
                keyExpr: "ID",
                parentIdExpr: "categoryId",
                selectionMode: "multiple",
                showCheckBoxesMode:"normal",
                displayExpr: "name",
                selectNodesRecursive: true,
                selectByClick: true,
                onContentReady: function(args){
                    syncTreeViewSelection(args.component, value);
                },
                onItemSelectionChanged: function(args){
                    var selection = args.component.getSelectedNodes();
                    selection = selection.map(function(selectedItem){return selectedItem.text});
                    e.component.option("value", selection);
                }
            });

            treeView = $treeView.dxTreeView("instance");

            e.component.on("valueChanged", function(args){
                syncTreeViewSelection(treeView, args.value);
            });

            return $treeView;
        }
    }).dxDropDownBox('instance');

    var categoryInput = $("#category").dxSelectBox({
        dataSource: categories,
        stylingMode: "filled",
        width: "200px",
        showClearButton: true,
        value: "health",
        placeholder: "any",
        onOpened: function(e) {
            e.component.close();
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

    var categoryPopup = $('#categoryPopup').dxPopup({
        title: 'Choose a category',
        contentTemplate: function() {
            var container = $('<div></div>');
            container.addClass('category-wrapper');

            for (var i = 0; i < categories.length; i++)
                container.append(createCategory(categories[i]));

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

    function search() {
        var href = "data?";
        var region = regionInput.option('value');
        var category = categoryInput.option('value');
        var search = searchInput.option('value');

        href += region ? "&region=" + region : "";
        href += category ? "&category=" + category : "";
        href += search ? "&search=" + search : "";

        window.location.href = href;
    }

    function createCategory(category) {
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

    function syncTreeViewSelection(treeView, value){
        if (value)
            return treeView.selectItem(value);

        treeView.unselectAll();
    };
});


// {
//     "ID": "1_1_1_1",
//     "categoryId": "1_1_1",
//     "name": "HD Video Player",
//     "price": 220
//   },
//   {
//     "ID": "1_1_1_2",
//     "categoryId": "1_1_1",
//     "name": "SuperHD Video Player",
//     "price": 270
//   },
//   {
//     "ID": "1_1_2",
//     "categoryId": "1_1",
//     "name": "Televisions",
//     "expanded": true
//   },
//   {
//     "ID": "1_1_2_1",
//     "categoryId": "1_1_2",
//     "name": "SuperLCD 42",
//     "price": 1200
//   },
//   {
//     "ID": "1_1_2_2",
//     "categoryId": "1_1_2",
//     "name": "SuperLED 42",
//     "price": 1450
//   },
//   {
//     "ID": "1_1_2_3",
//     "categoryId": "1_1_2",
//     "name": "SuperLED 50",
//     "price": 1600
//   },
//   {
//     "ID": "1_1_2_4",
//     "categoryId": "1_1_2",
//     "name": "SuperLCD 55",
//     "price": 1750
//   },
//   {
//     "ID": "1_1_2_5",
//     "categoryId": "1_1_2",
//     "name": "SuperLCD 70",
//     "price": 4000
//   },
//   {
//     "ID": "1_1_3",
//     "categoryId": "1_1",
//     "name": "Monitors"
//   },
//   {
//     "ID": "1_1_3_1",
//     "categoryId": "1_1_3",
//     "name": "19\""
//   },
//   {
//     "ID": "1_1_3_1_1",
//     "categoryId": "1_1_3_1",
//     "name": "DesktopLCD 19",
//     "price": 160
//   },
//   {
//     "ID": "1_1_4",
//     "categoryId": "1_1",
//     "name": "Projectors"
//   },
//   {
//     "ID": "1_1_4_1",
//     "categoryId": "1_1_4",
//     "name": "Projector Plus",
//     "price": 550
//   },
//   {
//     "ID": "1_1_4_2",
//     "categoryId": "1_1_4",
//     "name": "Projector PlusHD",
//     "price": 750
//   }