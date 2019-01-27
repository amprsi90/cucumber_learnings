const request = require('request');

module.exports = {
	fetchDate : function() {
		const options = {
		  method: 'GET',
		  url: 'https://parsify-format.p.mashape.com/api/format/time',
		  headers: {
			  'X-Mashape-Key': '903AHNBH457398573985LHBDS237479A782',
			  'Accept': 'application/json'
		  }
		};
	return request(options)
	  .then(function (response) {
			console.log('response  :  ', response);
			const resp = JSON.parse(response.body);
			return resp.formatted.full.split(resp.time.year)[0].concat(resp.time.year);
	  })
	  .catch(function (err) {
			console.log('encountered error  :  ', err);
			throw new Error('fetching of date didn\'t work');
	  })
	},
};