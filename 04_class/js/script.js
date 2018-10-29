console.log('You are in ' + window.location);

const ball = document.querySelector('.ball');
const table = document.querySelector('.myTab');

console.log(table.getAttribute('class'));


console.log(ball.className);

ball.className;//+=' animated';

// Create table.
            //var table = document.createElement('table');
            // Apply CSS for table
            table.setAttribute('class', 'article');
            // Insert New Row for table at index '0'.
            var row1 = table.insertRow(0);
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
            var div = document.getElementById('divTable');
            div.appendChild(table);