var Airtable = require("airtable");

Airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: "key5tUPHlXqO2yf57"
});

var base = Airtable.base("app8970gPuPsnHk2l");

export const getSongs = (pageFunc) => {
  return new Promise((resolve, reject) => {
    base("Song List")
      .select({
				maxRecords: 200,
				pageSize: 100,
        view: "Grid view"
      })
      .eachPage(
        function page(records, fetchNextPage) {
					pageFunc(records)
          fetchNextPage();
        },
        function done(err) {
          if (err) {
            console.log(err);
            reject(err);
          }

          resolve('Success');
        }
      );
  });
};
