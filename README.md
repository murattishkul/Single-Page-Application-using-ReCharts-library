## This repo is specially for Chanyoung Kwon @ Aizen

Instead of "hardcoding" the data right into charts, here I have mimicked server's behaviour and data handling behaviour as in a real production development.

API.js provides server response functionality and exports JSON object, that's passed from database. Json objects contain props type, that can be either lineChart or barChart, and data, that contains axes and points array of objects. This simple, although arbitrary, approach allowed me to mimick server response and data handling behaviours.


App.js contains data handling functionality. It parses JSON object and fetches data to ReChart Components in appropriate way as an object,
that is destructured upon imoprting to index.js, in order to be rendered.

Map.js maps components such as LineCount, LineTotal and BarTotal to Index.js. Aforementioned components it contains, are the implementation of all charts.

Index.js is the main file.

As had been said, the most important task is to label x-axis into 2 rows. In order to label x-axis in two rows, CustomizedAxisTick component was created, whose goal was to change tick prop of xAxis Component. Tick prop of xAxis Component allows us to perform this task.

## Available Scripts

In the project directory, you can run:
### `npm install`

To intall all corresponding dependencies.

### `npm start`

To run the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser


If you have any questions regarding implementation of this assignment, please contact me. Thank you!
