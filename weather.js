$(function() {
  var handleWeatherResponse = function(data) {
    console.log(data);
    console.log(JSON.stringify(data));
    
    // Put your code here. Don't change any other code in this file. You will be sad.
    var markup = "Today: " + data.daily.data[0].summary + 
                  " Today's maximum temperature is " + data.daily.data[0].apparentTemperatureMax + ". " +
                  "Today's minimum temperature is " + data.daily.data[0].apparentTemperatureMin + ". " +
                  "Tomorrow: " + data.daily.data[1].summary +
                  " Tomorrow's maximum temperature is " + data.daily.data[1].apparentTemperatureMax + ". " +
                  "Tomorrow's minimum temperature is " + data.daily.data[1].apparentTemperatureMin + ". " +
                  "In 2 days: " + data.daily.data[2].summary +
                  " In 2 days, the maximum temparature is " + data.daily.data[2].apparentTemperatureMax +   ". " +
                  "In 2 days, the minimum temperature is " + data.daily.data[2].apparentTemperatureMin + ". " +
                  "In 3 days: " + data.daily.data[3].summary +
                  " In 3 days, the maximum temparature is " + data.daily.data[3].apparentTemperatureMax + ". " +
                  "In 3 days, the minimum temperature is " + data.daily.data[3].apparentTemperatureMin;
    // End of your code

    $('.weather-report').html(markup);
  }
  $('a.get-the-weather').on('click', function(event) {
    event.preventDefault();
    $.ajax({
      type: 'GET',
      url: 'https://api.forecast.io/forecast/6dbe98374cc5b8f9ea63d5ec73de9c04/42.056459,-87.675267?callback=?',
      dataType: 'jsonp',
      contentType: "application/json",
      success: handleWeatherResponse
    });
  });
});
