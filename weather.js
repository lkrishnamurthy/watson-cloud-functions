/**
  *
  * main() will be invoked when you Run This Action
  *
  * @param key  => Weather.com API Key
  * @param location  => User Text input
  *
  * @return The output of this action, which must be a JSON object.
  *
  *
*/
function main(params) {
    var request = require('request');
    var key  = params.key
    var location = params.location
    var url = 'https://api.weather.com/v3/location/search'
    var model = params.model || null

    var qs =
    { query: location,
      locationType:'city',
      language:'en-US',
      countryCode:'US',
      format:'json',
      apiKey: key
    };

    var options = { method: 'GET',
                   url,qs};
    var promise = new Promise(function(resolve, reject) {
        request(options, function (error, response, body) {
            if (!error && response.statusCode === 200) {
                var j = JSON.parse(body);
                resolve(j);
            } else {
                console.log('body:', body);
                reject({
                    error: error,
                    response: response,
                    body: body
                });
            }
        });
    });
    return promise;
}
