var currentTemperature = +prompt(
  "Enter Temperature and hover to see temperature in fahrenheit"
);
document.write("<body style= >" + "</body>");
if (currentTemperature <= 38 && currentTemperature >= 33) {
  document.write(
    "<div class='card' style='width: 21rem; height:21rem;padding:20px; display:flex; align-items:center; margin:auto; margin-top:14%; box-shadow: rgba(0, 0, 0, 0.65) 0px 5px 15px; '>" +
      "<img style='clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%); width: 244px; height: 197px;' src='assets/veryhot.png' class='card-img-top' alt='...>" +
      " <div class='card-body'>" +
      "<p class='card-text'>" +
      "<h1 style='margin:auto; font-size:2rem;'>" +
      "<span>" +
      currentTemperature +
      "&#176;" +
      "C" +
      "</span>" +
      "</h1>" +
      "</p>" +
      "<h4 class='card-text'>" +
      "Very Hot turn on your A.C" +
      "</h4>" +
      "</div>" +
      " </div>"
  );
} else if (currentTemperature <= 32 && currentTemperature >= 27) {
  document.write(
    "<div class='card' style='width: 21rem; height:21rem;padding:20px; display:flex; align-items:center; margin:auto; margin-top:14%;box-shadow: rgba(0, 0, 0, 0.65) 0px 5px 15px; '>" +
      "<img  style='clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%); width: 244px; height: 197px;' src='assets/hot.png' style ='width:11rem; margin:auto;' class='card-img-top' alt='...>" +
      " <div class='card-body'>" +
      "<p class='card-text'>" +
      "<h1 style='margin:auto; font-size:2rem;'>" +
      "<span>" +
      currentTemperature +
      "&#176;" +
      "C" +
      "</span>" +
      "</h1>" +
      "</p>" +
      "<h4 class='card-text'>" +
      "Hot" +
      "</h4>" +
      "</div>" +
      " </div>"
  );
} else if (currentTemperature <= 26 && currentTemperature >= 23) {
  document.write(
    "<div class='card' style='width: 21rem; height:21rem;padding:20px; display:flex; align-items:center; margin:auto; margin-top:14%;box-shadow: rgba(0, 0, 0, 0.65) 0px 5px 15px; '>" +
      "<img style='clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%); width: 244px;height: 197px;' src='assets/warm.png' style ='width:13rem; margin:auto;' class='card-img-top' alt='...>" +
      " <div class='card-body'>" +
      "<p class='card-text'>" +
      "<h1 style='margin:auto; font-size:2rem;'>" +
      "<span>" +
      currentTemperature +
      "&#176;" +
      "C" +
      "</span>" +
      "</h1>" +
      "</p>" +
      "<h4 class='card-text'>" +
      "Warm" +
      "</h4>" +
      "</div>" +
      " </div>"
  );
} else if (currentTemperature <= 22 && currentTemperature >= 16) {
  document.write(
    "<div class='card' style='width: 21rem; height:21rem;padding:20px; display:flex; align-items:center; margin:auto; margin-top:14%;box-shadow: rgba(0, 0, 0, 0.65) 0px 5px 15px; '>" +
      "<img style='clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%); width: 244px;height: 197px;' src='assets/pleasant.png' style ='width:18rem; margin:auto; scale:-2; ' class='card-img-top' alt='...>" +
      " <div class='card-body'>" +
      "<p class='card-text'>" +
      "<h1 style='margin:auto; font-size:2rem;'>" +
      "<span>" +
      currentTemperature +
      "&#176;" +
      "C" +
      "</span>" +
      "</h1>" +
      "</p>" +
      "<h4 class='card-text'>" +
      "Pleasent Warm" +
      "</h4>" +
      "</div>" +
      " </div>"
  );
} else if (currentTemperature <= 15 && currentTemperature >= 11) {
  document.write(
    "<div class='card' style='width: 21rem; height:21rem;padding:20px; display:flex; align-items:center; margin:auto; margin-top:14%;box-shadow: rgba(0, 0, 0, 0.65) 0px 5px 15px; '>" +
      "<img style='clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%); width: 244px;height: 197px;' src='assets/cool.png' style ='width:12rem; margin:auto;' class='card-img-top' alt='...>" +
      " <div class='card-body'>" +
      "<p class='card-text'>" +
      "<h1 style='margin:auto; font-size:2rem;'>" +
      "<span>" +
      currentTemperature +
      "&#176;" +
      "C" +
      "</span>" +
      "</h1>" +
      "</p>" +
      "<h4 class='card-text'>" +
      "Cool" +
      "</h4>" +
      "</div>" +
      " </div>"
  );
} else if (currentTemperature <= 10 && currentTemperature >= 5) {
  document.write(
    "<div class='card' style='width: 21rem; height:21rem;padding:20px; display:flex; align-items:center; margin:auto; margin-top:14%;box-shadow: rgba(0, 0, 0, 0.65) 0px 5px 15px; '>" +
      "<img style='clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%); width: 244px;height: 197px;' src='assets/very-cold.png' style ='width:12rem; margin:auto;' class='card-img-top' alt='...>" +
      " <div class='card-body'>" +
      "<p class='card-text'>" +
      "<h1  style='margin:auto; font-size:2rem;'>" +
      "<span>" +
      currentTemperature +
      "&#176;" +
      "C" +
      "</span>" +
      "</h1>" +
      "</p>" +
      "<h4 class='card-text'>" +
      "Very cold" +
      "</h4>" +
      "</div>" +
      " </div>"
  );
} else if (currentTemperature <= 4 && currentTemperature >= 0) {
  document.write(
    "<div class='card' style='width: 21rem; height:21rem;padding:20px; display:flex; align-items:center; margin:auto; margin-top:14%;box-shadow: rgba(0, 0, 0, 0.65) 0px 5px 15px; '>" +
      "<img style='clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%); width: 244px;height: 197px;' src='assets/freezing.png' style ='width:12rem; margin:auto;' class='card-img-top' alt='...>" +
      " <div class='card-body'>" +
      "<h4 class='card-text'>" +
      "<h1 style='margin:auto; font-size:2rem;'>" +
      "<span>" +
      currentTemperature +
      "C" +
      "&#176;" +
      "</span>" +
      "</h1>" +
      "</h4>" +
      "<h4 class='card-text'>" +
      "Its freezing, need a heater" +
      "</h4>" +
      "</div>" +
      " </div>"
  );
} else {
  document.write(
    "<div class='card' style='width: 21rem; height:21rem;padding:20px; display:flex; align-items:center; margin:auto; margin-top:14%;box-shadow: rgba(0, 0, 0, 0.65) 0px 5px 15px; '>" +
      "<img src='assets/error.png' style ='width:13rem; margin:auto;' class='card-img-top' alt='...>" +
      " <div class='card-body'>" +
      "<p class='card-text'>" +
      "<h2 style='margin:auto; font-size:2rem;'>" +
      "Not in our Database" +
      "</h2>" +
      "</p>" +
      "</div>" +
      " </div>"
  );
}
