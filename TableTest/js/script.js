console.log('You are in ' + window.location);

const jsonString = '[{"city": "Moscow", "temp": 20}, {"city": "Samara", "temp": 30}]';

const jsObj = JSON.parse(jsonString);

console.log(jsObj[0].city); 

function fillTableWithJsonArray(tableID, tableName, jsObj)
{
    // Create table.
    var table = document.createElement(tableName);
    // Apply CSS for table
    //table.setAttribute('class', 'article');
    // Insert New Row for table at index '0'.
    var keys = Object.keys(jsObj[0]);
    var row1 = table.insertRow(0);
    var div = document.getElementById(tableID);
    for(keyId in keys) 
    {
        var row1col2 = row1.insertCell(keyId);
         row1col2.innerHTML = keys[keyId];
    }
    for(i in jsObj)
    {
        var row = table.insertRow(1);
        console.log(keys);
        for(keyId in keys) 
        {
            var cell = row.insertCell();
            cell.innerHTML = jsObj[i][keys[keyId]];
        }
    }



    div.appendChild(table);
    return table;
}

console.log(Object.keys(jsObj[0]));

table = fillTableWithJsonArray('divTable', 'table', jsObj)

table.setAttribute('width', '100%');         
/*
            // Insert New Column for Row1 at index '0'.
var row1col1 = row1.insertCell(0);




row1col1.innerHTML = 'Col1';
            // Insert New Column for Row1 at index '1'.
            var row1col2 = row1.insertCell(1);
            row1col2.innerHTML = 'Col2';
            // Insert New Column for Row1 at index '2'.
            var row1col3 = row1.insertCell(2);
            row1col3.innerHTML = 'Col3';
            // Append Table into div.


            console.log(div);*/
