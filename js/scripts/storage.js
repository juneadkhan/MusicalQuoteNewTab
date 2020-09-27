define(['angularAMD'], function (angularAMD) {
	var services = angular.module('services', []);
	services.factory("LS", function($window, $http, $q, $rootScope) {
	  var userPath = 'new-tab-user',
		  storagePath = 'new-tab-storage';

  	  return {
	    setData: function(val) {
    	  $window.localStorage && $window.localStorage.setItem(storagePath, val);
	      return this;
	    },
	    getData: function() {
	      return JSON.parse($window.localStorage.getItem(storagePath));
	    },
	    hasDateExpired : function(dayVal) {
	      var storedFiles = JSON.parse($window.localStorage.getItem(storagePath)) || {};
      	  return (typeof storedFiles.date === "undefined" || storedFiles.date < dayVal);
	    },
	    hasHourExpired : function(hourVal) {
		  var storedFiles = JSON.parse($window.localStorage.getItem(storagePath)) || {};
      	  return (typeof storedFiles.hour === "undefined" || storedFiles.hour < hourVal);
	    },
	    loadUser: function() {
	    	var promise = $http.get('user.json');

			promise.then(function(response) {
				$window.localStorage.setItem(userPath, JSON.stringify(response.data));
				return response.data;
			});

			return promise;
	    },
	    getUser: function() {
	      return JSON.parse($window.localStorage.getItem(userPath));
	    },
	    getQuotes : function() {
	    	var promise = $http.get('quotes.json');
	    	promise.then(function(response) {
    			return response.data;
	    	});

	    	return promise;
	    },

	var lat, lng;
	function handle_geolocation_query(position){
	    lat = position.coords.latitude;
	    lng =  position.coords.longitude;
	}

	    getWeather : function(location)
	    {
				navigator.geolocation.getCurrentPosition(handle_geolocation_query);

	    	//var promise = $http.get('http://api.openweathermap.org/data/2.5/weather?q=' + location);
				// var promise = $http.get('https://api.openweathermap.org/data/2.5/weather?q='+location+'&appid=f36e366463c261985623b04441c510f8');
				//var promise = $http.get('https://api.openweathermap.org/data/2.5/weather?q='+location+'&appid=f36e366463c261985623b04441c510f8');
				var promise = $http.get('api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lng+'&appid=f36e366463c261985623b04441c510f8');
	    	promise.then(function(response) {
	    		return response.data;
	    	});

	    	return promise;
	    }
	  };
	});
});
