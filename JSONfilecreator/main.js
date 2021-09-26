const fs = require('fs');

var movies = [
	{
		title: 'Heathers',
		rating: '4.5 stars',
		hasWatched: true
	},
	{
		title: 'Europa Report',
		rating: '2.5 stars',
		hasWatched: false
	},
	{
		title: 'Fellowship of the Ring',
		rating: '5 stars',
		hasWatched: true
	},
	{
		title: 'Silver Linings Playbook',
		rating: '5 stars',
		hasWatched: true
	}
];

var movies_json_object = JSON.stringify(movies);

fs.writeFile("movies.json", movies_json_object, 'utf8', function (e) {
    if (e) {
        console.log("An error occured while writing JSON Object to File.");
        return console.log(err);
    }
 
    console.log("JSON file has been saved.");
});
