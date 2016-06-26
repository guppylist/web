function init() {
  var callback = function() {
    var request = gapi.client.guppylist.guppylist.lists.list();
    request.then(function(response) {
      var lists = JSON.parse(response.body).lists;
    });
  };

  gapi.client.load('guppylist', 'v1', callback, 'http://localhost:8889/_ah/api');
}