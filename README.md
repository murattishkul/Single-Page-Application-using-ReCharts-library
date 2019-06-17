## This repo is specially for Chanyoung Kwon @ Aizen

I nstead of hardcoding everything right into charts, here I have mimicked server's behaviour and data handling behaviour.

API.js provides server response functionality and exports JSON object, that's passed from database.
App.js contains data handling functionality. It parses JSON object and fetches data to ReChart Components in appropriate way.
Map.js maps components such as LineCount, LineTotal and BarTotal to Index.js. It contains all implementation of all charts.
Index.js is the main fail.

In order to label x-axis in two rows, CustomizedAxisTick component was created, mainly to change tick prop of xAxis Component.

## Available Scripts

In the project directory, you can run:
### `npm install`

To intall all corresponding dependencies.

### `npm start`

To run the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
