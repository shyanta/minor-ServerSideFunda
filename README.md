# minor-ServerSideFunda

## About the project
In this project I learned to write a server sided application. With the use of Node.JS and express I build
the app. This project is build with multiple routes and view. With the use of Node.JS I tell the app which
view to use on which route.
The app is made for Funda. Funda is a big thing in the Netherlands. Basically all the houses that are for sale.
Are being sold through Funda.

### How to install the project
If you want to run this project on your own computer, follow the following steps:

Clone the project to your own computer: <br/>
`git clone https://github.com/shyanta/minor-ServerSideFunda.git`

Run npm Install to download the dependencies from node<br/>
`npm install`

To get data from the API you have to add the API-KEY in a `.env` file in the following way:<br/>
`KEY = YOUR API-KEY`<br/>
Place the `.env` file in the root of your app. In this case that is beside the `app.js` and the `.gitignore`

In my `package.json` I've already added multiple scripts

`npm start`<br/>
This will run the app at `localhost:3000`. Because I used Nodemon, the localhost will be updated, everytime
you make a change in one of the files.

`npm run expose`<br/>
This will run your app at a livelink. This way you can use this link on other devices or at PageSpeed Insights,
to check the site performance.

`npm run build`<br/>
The build will use Browserify to compile the static javascript files. If you make any changes in the javascript
files, that aren't `build.js`. You will have to run this script, otherwise it won't be loaded in the application.

## Optimalisation
Before I did anything to optimize the application. The pageload at 2G Regular is 13.99 seconds.
![First Page Load](/screenshots/first-load.jpg)

I ran the application through PageSpeed Insights and that said to optimize the images and scripts
![PageSpeed Insights](/screenshots/80-100PageSpeed.jpg)
Sadly, optimizing the Images is a bit hard, because they are rendered from the api, so I can't comprimise them.
They are rendered from another site, and downloading the images, can't be done. This because Funda has about
500 thousand items, with each 20 or more images.

By using Compression I can compress the images that are loaded in the public folder.
Compression is installed through npm and it works with gzip. This brought the pageload down to 12.57.
![Compression](/screenshots/compression.jpg)

After that I used a CSS Minifier to create a minified output.

## Sources
- http://stackoverflow.com/questions/282670/easiest-way-to-sort-dom-nodes
- https://github.com/Teun/thenBy.js
- https://github.com/TimoVerkroost/minor-performance-matters-funda
