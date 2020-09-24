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
            // filterValue: qs.categories.split(',')[0],
            filterValues: qs.categories.split(','),
            // filterValues: qs.regions.split(','),
        },{
            caption: "link",
            dataField: "link",
            dataType: "string",
            cellTemplate: function(content, info) {
                $(content).append($('<a target="_blank "href="' + info.data.link + '">' + info.data.link + '</a> '));
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