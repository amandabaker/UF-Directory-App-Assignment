/* Fill out these functions using Mongoose queries*/

var fs = require('fs'),
    mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Listing = require('./ListingSchema.js'),
    config = require('./config.js');


var findLibraryWest = function() {
  /*
    Find the document that contains data corresponding to Library West,
    then log it to the console.
   */

   var libWestdata = Listing.find( { name: "Library West" } );

   console.log('Library West Information:\n' + libWestdata);


};
var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console.
   */
   //var cable = Listing.find(  );

   Listing.findOneAndRemove( { code: "CABL" }, function(err) { if (err) throw err; } );

   console.log('Deleted the listing!');
};
var updatePhelpsMemorial = function() {
  /*
    Phelps Memorial Hospital Center's address is incorrect. Find the listing, update it, and then
    log the updated document to the console.
   */
   var PMHC_update = Listing.find( { code: "Phelps Laboratory" } );

   Listing.findOneAndUpdate( { code: "Phelps Laboratory" }, { address: "TEST ADDRESSS SDFSDFNSFS:LD 1234"} )

   console.log('Updated Phelps Memorial Hospital Centers address:\n' + PMHC_update);
};
var retrieveAllListings = function() {
  /*
    Retrieve all listings in the database, and log them to the console.
   */

   var everything = Listing.find();

   console.log('Listings Database:\n' + everything);
};

findLibraryWest();
removeCable();
updatePhelpsMemorial();
retrieveAllListings();

