
var fs = require('fs'),
    mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Listing = require('./ListingSchema.js'),
    config = require('./config.js');

mongoose.connect(config.db.uri);

var findLibraryWest = function() {
    Listing.find( {name: "Library West"}, function(err, libWestdata) {
      if (err) throw err;
      console.log('\n\n\nLibrary West Information:\n\n' + libWestdata);
   });
};

var removeCable = function() {
    Listing.findOneAndRemove( {code: "CABL"}, function(err) { 
      if (err) throw err;
      console.log('\n\n\nDeleted the listing!');
    });
};

var updatePhelpsMemorial = function() {
    Listing.findOneAndUpdate({name: "Phelps Laboratory"}, {address: "Phelps Lab, Gainesville, FL 32603, United States"}, {'new': true}, function(err, phelps) {
      if (err) throw err;
      console.log("\n\n\nUpdated Phelps:\n\n" + phelps);
    });
};

var retrieveAllListings = function() {
    Listing.find({}, function(err, allData) {
      if (err) throw err;
      console.log('\n\n\nDatabase Information:\n\n' + allData);
   });
};

findLibraryWest();
removeCable();
updatePhelpsMemorial();
retrieveAllListings();


