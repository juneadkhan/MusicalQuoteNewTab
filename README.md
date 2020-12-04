# **New Tab Page - Musical Quotes 🎶** 

####   Demo: https://juneadkhan.github.io/MusicalQuoteNewTab/ #### 

This is a **Webpage** that displays an inspirational quote from an artist's music along with an image. It also features the time of day and temperature at your location (customisable by adjusting Javascript code - see below). This project was forked and inspired by (https://github.com/jakke-korpelainen/newtab-angular) and used as a means to explore web development as part of a team. 



#### Built Using the following technologies:
- Programming Languages: **HTML, Javascript, CSS, Angular**
- Frameworks: **AngularJS, RequireJS, MomentJS**
- APIs: **OpenWeatherMap**

# Screenshots

![Demo1](DemoImage1.png)
![Demo2](DemoImage2.png)




# Customization
Customise to your liking by editing users.json file.
```javascript
{
	"locale" : "en",
	"name" : "Your Name",
	"location" : "Helsinki",
	"temperatureType" : 0,
	"dateformat" : "dddd DD.MM.YYYY"
}
```

* 'locale' is for localizing the datetime.
* 'name' is for the person to greet
* 'location' is the name of the city you want forecast
* 'temperatureType'
   * 0 : Celsius 
   * 1 : Fahrenheit
* 'dateformat', see [moment.js docs](http://momentjs.com/docs/#/displaying/) for help

# Appendix
Daily changing background, quote and a forecast from [OpenWeatherMap](http://openweathermap.org/api), data is cached to html5 localStorage and expires daily/hourly (forecast).
The "app" is powered by [AngularJs](https://angularjs.org/), [RequireJs](http://requirejs.org/) and [moment.js](http://momentjs.com/) (datetime localization). If you get tired of a background you can double click it to get a new one.
