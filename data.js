var qs = parseQueryString(window.location.search.substring(1));

$(document).ready(function() {

    // var ready = true;

    $('#charitiesGrid').dxDataGrid({
        sorting: {
            mode: 'multiple'
        },
        filterRow: {
            visible: true,
            applyFilter: 'auto'
        },
        paging: {
            enabled: true
        },
        searchPanel: {
            highlightCaseSensitive: false,
            highlightSearchText: true,
            placeholder: "Search...",
            searchVisibleColumnsOnly: false,
            text: "",
            visible: true,
            width: 160
        },
        pager: {
            allowedPageSizes: [10,20,50,100],
            infoText: "page {0}/{1} ({2} results)",
            showInfo: true,
            showNavigationButtons: true,
            showPageSizeSelector: true,
            visible: true
        },
        columnResizingMode: 'widget',
        width: '100%',
        height: '100%',
        showBorders: true,
        allowColumnResizing: true,
        allowColumnReordering: true,
        // stateStoring: {
        //     enabled: true,
        //     type: 'localStorage',
        //     storageKey: 'charitylist',
        //     savingTimeout: 1000
        // },
        export: {
            enabled: true,
            fileName: 'my-charities-' + Date.now(),
        },
        // onContentReady: function(e) {
        //     if (ready) {
        //        applyFilters(e.component);
        //        ready = false;
        //     }
        // },
        dataSource: data,
        columns: [
        {
            caption: "region",
            dataField: "region",
            dataType: "string",
            selectedFilterOperation: "=",
            filterValue: qs.region
        },
        {
            caption: "name",
            dataField: "name",
            dataType: "string",
            selectedFilterOperation: "contains",
            filterValue: qs.search
        }, {
            caption: "category",
            dataField: "category",
            dataType: "string",
            selectedFilterOperation: "=",
            filterValue: qs.category
        }, {
            caption: "themes",
            dataField: "themes",
            dataType: "object",
            cellTemplate: function(n) {
                return 'test';
            }
        }, {
            caption: "link",
            dataField: "link",
            dataType: "string",
            cellTemplate: function(content, info) {
                $(content).append($('<a target="_blank "href="' + info.data.link + '">' + info.data.link + '</a> '));
                return content;
            }
        }],
    }).dxDataGrid('instance');
});

function parseQueryString (query) {
    var vars = query.split("&");
    var query_string = {};
    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split("=");
      var key = decodeURIComponent(pair[0]);
      var value = decodeURIComponent(pair[1]);
      // If first entry with this name
      if (typeof query_string[key] === "undefined") {
        query_string[key] = decodeURIComponent(value);
        // If second entry with this name
      } else if (typeof query_string[key] === "string") {
        var arr = [query_string[key], decodeURIComponent(value)];
        query_string[key] = arr;
        // If third or later entry with this name
      } else {
        query_string[key].push(decodeURIComponent(value));
      }
    }
    return query_string;
}

var data = [
    {
        region: "Germany",
        name: "DRK",
        category: "health",
        themes: ["a", "b", "c"],
        link: "https://www.google.de"
    },
    {
        region: "USA",
        name: "NationalAnimals",
        category: "animals",
        themes: ["a", "b", "c"],
        link: "https://www.google.de"
    }
];