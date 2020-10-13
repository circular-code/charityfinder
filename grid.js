var qs = parseQueryString(window.location.search.substring(1));

$(document).ready(function() {

    var ready = true;

    $('#charitiesGrid').dxDataGrid({
        dataSource: data,
        columnResizingMode: 'widget',
        height: "200px",
        width: '100%',
        height: 500,
        showBorders: true,
        allowColumnResizing: true,
        allowColumnReordering: true,
        allowHeaderFiltering: true,
        elementAttr:{
            title: 'click on a row to open your charity in a new browser tab'
        },
        sorting: {
            mode: 'multiple'
        },
        headerFilter: {
            visible: false
        },
        filterRow: {
             visible: true
        },
        scrolling: {
            mode: "infinite"
        },
        loadPanel: {
            enabled: true
        },
        searchPanel: {
            highlightCaseSensitive: false,
            highlightSearchText: true,
            placeholder: "Search...",
            searchVisibleColumnsOnly: false,
            text: "",
            visible: true,
            width: "100%"
        },
        onContentReady: function(e) {
            if (ready) {
               e.component.searchByText(qs.search);
               ready = false;
            }
        },
        onRowClick: function(e) {
            window.open("https://" + e.data.link, '_blank');
        },
        columns: [
        {
            caption: "Region",
            dataField: "regions",
            dataType: "string",
            filterValues: typeof qs.regions === 'string' ? qs.regions.split(',') : [],
            width: '200px',
        },{
            caption: "Name",
            dataField: "name",
            dataType: "string",
            cellTemplate: function(container, options) {
                container.addClass("name-cell");
                container.append(options.data['name']);
            },
        },{
            caption: "Categories",
            dataField: "categories",
            width: '800px',
            dataType: "string",
            filterValues: typeof qs.categories === 'string' ? qs.categories.split(',') : [],
            headerFilter: {
                //TODO: put selected values on top of list
                dataSource: [{"value":"animals","text":"animals"},{"value":"alcohol","text":"alcohol"},{"value":"drugs","text":"drugs"},{"value":"culture","text":"culture"},{"value":"community","text":"community"},{"value":"disabled","text":"disabled"},{"value":"family","text":"family"},{"value":"youth","text":"youth"},{"value":"kids","text":"kids"},{"value":"sport","text":"sport"},{"value":"violence","text":"violence"},{"value":"education","text":"education"},{"value":"environment","text":"environment"},{"value":"health","text":"health"},{"value":"old age","text":"old age"},{"value":"unemployment","text":"unemployment"},{"value":"rights","text":"rights"},{"value":"religion","text":"religion"},{"value":"research","text":"research"}]
            },
            cellTemplate: function(container, options) {
                container.addClass("category-cell");

                var htmlString = '';

                for (var i in options.data['categories'])
                    htmlString += '<span class="category-tag ' + (options.column.filterValues && options.column.filterValues.indexOf(options.data['categories'][i].name) > -1 ? 'category-tag-primary' : '') + '">' + options.data['categories'][i].name + '</span>';

                container.append(htmlString);
            },
            calculateFilterExpression: function (value, operation, target) {
                var column = this;
                console.log(value);

                if (!value)
                    return;

                let filterExpression = [];

                for (let i = 0; i < column.filterValues.length; i++) {
                    if (i !== 0)
                        filterExpression.push("or")
                        // filterExpression.push("and")

                    filterExpression.push(["categories", "contains", column.filterValues[i]]);
                }

                return filterExpression;
            },
            calculateCellValue: function (data) {
                return $.map(data['categories'], function (o) {
                    return o.name;
                });
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