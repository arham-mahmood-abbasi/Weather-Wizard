document.getElementById('fetchData').addEventListener('click',function(){
    var city = document.getElementById('cityInput').value;
    var xhr = new XMLHttpRequest();
    var url = 'https://api.weatherapi.com/v1/current.json?key=1460985eca504c47b9c145922222508&q='+city;
    xhr.open('GET',url,true)
    xhr.onload=function(){
        if(xhr.status ==200){
            var data=JSON.parse(xhr.responseText);
            document.getElementById("weatherContainer").innerHTML="<h2>Weather Conditions in "+city+"</h2>"+"<div style='border: 2px solid black; border-radius: 20px; text-align: left;margin-left:40%;margin-right:60%;padding-left:2px'><div><strong>Country:</strong>"+data.location.country+"</div><div><strong>Region:</strong>:"+data.location.region+"</div><div><strong>Temperature:</strong>:"+data.current.temp_c+'*C'+"</div><div><strong>Feelslike:</strong>:"+data.current.feelslike_c+'*C'+"</div><div><strong>Humidity:</strong>:"+data.current.humidity+"</div></div>";

        }
        else {
            document.getElementById("weatherContainer").innerHTML = "<p>Error fetching weather data. Please try again.</p>";
        }
    }
    xhr.send();
})