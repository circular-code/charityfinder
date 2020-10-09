var qs = parseQueryString(window.location.search.substring(1));

$(document).ready(function() {

    var ready = true;

    $('#charitiesGrid').dxDataGrid({
        sorting: {
            mode: 'multiple'
        },
        filterRow: {
            visible: true,
            applyFilter: 'auto'
        },
        headerFilter: {
            visible: true,
        },
        allowHeaderFiltering: true,
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
        onContentReady: function(e) {
            if (ready) {
               e.component.searchByText(qs.search);
               ready = false;
            }
        },
        dataSource: data,
        columns: [
        {
            caption: "Regions",
            dataField: "regions",
            dataType: "string",
        },{
            caption: "name",
            dataField: "name",
            dataType: "string",
        },{
            caption: "Categories",
            dataField: "categories",
            headerFilter: {
                dataSource: [{"value":"animals","text":"animals"},{"value":"alcohol","text":"alcohol"},{"value":"drugs","text":"drugs"},{"value":"culture","text":"culture"},{"value":"community","text":"community"},{"value":"disabled","text":"disabled"},{"value":"family","text":"family"},{"value":"youth","text":"youth"},{"value":"kids","text":"kids"},{"value":"sport","text":"sport"},{"value":"violence","text":"violence"},{"value":"education","text":"education"},{"value":"environment","text":"environment"},{"value":"health","text":"health"},{"value":"old age","text":"old age"},{"value":"unemployment","text":"unemployment"},{"value":"rights","text":"rights"},{"value":"religion","text":"religion"},{"value":"research","text":"research"}]
            },
            calculateDisplayValue: function (data) {
                var displayText = '';
                for (var i in data['categories']) {
                    var assignment = data['categories'][i];
                    displayText += assignment.name + ', ';
                }
                displayText = displayText.slice(0, -2); // trim trailing delimter

                return displayText;
            },
            calculateFilterExpression: function (value, operation) {
                var column = this;
                console.log(value);
                if (value) {
                    var selector = function (data) {
                        var values = column.calculateCellValue(data);
                        return values && values.indexOf(value) >= 0;
                    };
                    return [selector, operation || "=", true];
                }
            },
            calculateCellValue: function (data) {
                return $.map(data['categories'], function (o) {
                    return o.name;
                });
            }
        },{
            caption: "link",
            dataField: "link",
            dataType: "string",
            cellTemplate: function(content, info) {
                $(content).append($('<a target="_blank "href="https://' + info.data.link + '">' + info.data.link + '</a> '));
                return content;
            },
            allowSearch: true,
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