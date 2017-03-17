// turf.js = spatial joins on the front end in javascript
// can get very sliggish on the web-side
        // as long as you're avoiuding joins on big datasets, turf can work well to add features to your web apps
        // turfjs.org
// class example: the hexagonal grid heat map of crime data that Nathan showed us
        // the code is in Week-9/Examples
// you can also measure distance between points

// TURF VS. CARTO
    // carto is a back-end, has GIS extensions you would normally have to add yourself
          // can run arbitrary SQL queries on your datasets
          // can do joins in real time
    // if turf is acting sluggish, carto might be a better option
          // turf is lighter-weight
          // turf is free, it's just a library
          // turf is also easier
    // because Carto acts back and forth between a server, it can take more time
          // if you want a quickly-responsive user-interactive graphic, turf might be better
          // Look at: capital bikeshare + turf on mapbox blog

// D3 PACKAGE/LIBRARY IS REALLY COOL
        // can move points along lines
        // has a powerful projection system
