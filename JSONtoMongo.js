'use strict';
/*
  Import modules/files you may need to correctly run the script.
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Listing = require('./ListingSchema.js'),
    config = require('./config.js');

/* Connect to your database */
mongoose.connect('mongodb://janedoe:janedoe@ds047315.mongolab.com:47315/software-engineering2');

/*
  Instantiate a mongoose model for each listing object in the JSON file,
  and then save it to your Mongo database
 */
var listingData = fs.readFile( 'listings.json', (err, data) );
var entires = listingData.entries;

function fillData () {
    for (i = 0; i < listingData.entries.length; i++){
        var newEntry = new Listing ({
            code: entries[i].code,
            name: entries[i].name,
            coordinates: {
                latitude: entries[i].coordinates.latitude,
                longitude: entries[i].coordinates.longitude
            },
            address: entries[i].address
        });

        newEntry.save();
    }
}

/*
  Once you've written + run the script, check out your MongoLab database to ensure that
  it saved everything correctly.
 */
