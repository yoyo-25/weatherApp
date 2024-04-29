document.addEventListener("DOMContentLoaded", ()=> {
    document.getElementById("forweathercard").innerHTML = `<div id="weathercard">
            <div id="locationdisplay">Welcome to weatherApp</div>
            <div class="forimg">
                <img class="weatherimg" src="assets/dust.png" alt="img">
            </div>
            <div id="forinitialdisplay">Enter your location</div>
        </div>`
        const forinitialdisplayhere = document.getElementById("forinitialdisplay")
        Object.assign(weathercard.style, {
            backgroundColor: "black",
          });
        Object.assign(forinitialdisplayhere.style, {
            height: "30%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "30px",
            fontFamily: "Google Sans, Helvetica Neue, sans-serif",
            fontWeight: "100",
            color: "whitesmoke"
          });


    document.getElementById("weatherForm").addEventListener("submit", async (event)=>{
        event.preventDefault()
        const locationInput = document.getElementById("location")
        const location = locationInput.value

        try{ 
            const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=c8efde8f669517786f2a00fd008f6f7e`)
            displayWeatherData(location,response.data);

        } catch(error){
            console.log("error fetching weather data", error)
            document.getElementById("forweathercard").innerHTML = `<div id="weathercard">
            <div id="locationdisplay">Invalid location</div>
            <div class="forimg">
                <img class="weatherimg" src="assets/error-404.png" alt="img">
            </div>
        </div>` 
            Object.assign(weathercard.style, {
                backgroundColor: "red",
              });
        }

    })
})
function displayWeatherData(location, data) {
    console.log(data.weather[0].main)
    if(data.weather[0].main==="Clouds"){
        document.getElementById("forweathercard").innerHTML = `<div id="weathercard">
            <div id="locationdisplay">${data.name}</div>
            <div class="forimg">
                <img class="weatherimg" src="assets/cloudy.png" alt="img">
            </div>
            <div class="weatherdata">
                <div id="temp">${Math.round(data.main.temp - 273.15)}&degC</div>
                <div id="weathercondition">${data.weather[0].main}</div>
            </div>
        </div>` 
        const forweathercardcolor = document.getElementById("weathercard")

        Object.assign(forweathercardcolor.style, {
            backgroundColor: "orange",
          });
    }
    else if(data.weather[0].main==="Clear"){
        document.getElementById("forweathercard").innerHTML = `<div id="weathercard">
            <div id="locationdisplay">${data.name}</div>
            <div class="forimg">
                <img class="weatherimg" src="assets/sun.png" alt="img">
            </div>
            <div class="weatherdata">
                <div id="temp">${Math.round(data.main.temp - 273.15)}&degC</div>
                <div id="weathercondition">${data.weather[0].main}</div>
            </div>
        </div>` 
        const forweathercardcolor = document.getElementById("weathercard")

        Object.assign(forweathercardcolor.style, {
            backgroundColor: "rgb(17, 178, 242)",
          });
    }
    else if(data.weather[0].main==="Haze"){
        document.getElementById("forweathercard").innerHTML = `<div id="weathercard">
            <div id="locationdisplay">${data.name}</div>
            <div class="forimg">
                <img class="weatherimg" src="assets/haze.png" alt="img">
            </div>
            <div class="weatherdata">
                <div id="temp">${Math.round(data.main.temp - 273.15)}&degC</div>
                <div id="weathercondition">${data.weather[0].main}</div>
            </div>
        </div>` 
        const forweathercardcolor = document.getElementById("weathercard")

        Object.assign(forweathercardcolor.style, {
            backgroundColor: "rgb(133, 132, 132)",
          });
    }
    else if(data.weather[0].main==="Fog" || data.weather[0].main==="Mist" || data.weather[0].main==="Smoke"){
        document.getElementById("forweathercard").innerHTML = `<div id="weathercard">
            <div id="locationdisplay">${data.name}</div>
            <div class="forimg">
                <img class="weatherimg" src="assets/mist.png" alt="img">
            </div>
            <div class="weatherdata">
                <div id="temp">${Math.round(data.main.temp - 273.15)}&degC</div>
                <div id="weathercondition">${data.weather[0].main}</div>
            </div>
        </div>` 
        const forweathercardcolor = document.getElementById("weathercard")
        const forlocationstyling = document.getElementById("locationdisplay")
        const fortempstyling= document.getElementById("temp")
        const formainstyling = document.getElementById("weathercondition")
        Object.assign(forweathercardcolor.style, {
            backgroundColor: "rgb(236, 230, 230)",
          });
        Object.assign(forlocationstyling.style, {
            color: "rgb(76, 75, 75)",
            fontWeight: "bold"
          });
        Object.assign(fortempstyling.style, {
            color: "rgb(76, 75, 75)",
            fontWeight: "bold"
          });
        Object.assign(formainstyling.style, {
            color: "rgb(76, 75, 75)",
            fontWeight: "bold"
          });
    }
    else if(data.weather[0].main==="Dust"){
        document.getElementById("forweathercard").innerHTML = `<div id="weathercard">
            <div id="locationdisplay">${data.name}</div>
            <div class="forimg">
                <img class="weatherimg" src="assets/Dust.png" alt="img">
            </div>
            <div class="weatherdata">
                <div id="temp">${Math.round(data.main.temp - 273.15)}&degC</div>
                <div id="weathercondition">${data.weather[0].main}</div>
            </div>
        </div>` 
        const forweathercardcolor = document.getElementById("weathercard")
        const forlocationstyling = document.getElementById("locationdisplay")
        const fortempstyling= document.getElementById("temp")
        const formainstyling = document.getElementById("weathercondition")
        Object.assign(forweathercardcolor.style, {
            backgroundColor: "rgb(236, 230, 230)",
          });
        Object.assign(forlocationstyling.style, {
            color: "rgb(76, 75, 75)",
            fontWeight: "bold"
          });
        Object.assign(fortempstyling.style, {
            color: "rgb(76, 75, 75)",
            fontWeight: "bold"
          });
        Object.assign(formainstyling.style, {
            color: "rgb(76, 75, 75)",
            fontWeight: "bold"
          });
    }
    else if(data.weather[0].main==="Rain" || data.weather[0].main==="Drizzle"){
        document.getElementById("forweathercard").innerHTML = `<div id="weathercard">
            <div id="locationdisplay">${data.name}</div>
            <div class="forimg">
                <img class="weatherimg" src="assets/heavy-rain.png" alt="img">
            </div>
            <div class="weatherdata">
                <div id="temp">${Math.round(data.main.temp - 273.15)}&degC</div>
                <div id="weathercondition">${data.weather[0].main}</div>
            </div>
        </div>` 
        const forweathercardcolor = document.getElementById("weathercard")
        // const forlocationstyling = document.getElementById("locationdisplay")
        // const fortempstyling= document.getElementById("temp")
        // const formainstyling = document.getElementById("weathercondition")
        Object.assign(forweathercardcolor.style, {
            backgroundColor: "rgb(0, 79, 197)",
          });
        // Object.assign(forlocationstyling.style, {
        //     color: "rgb(76, 75, 75)",
        //     fontWeight: "bold"
        //   });
        // Object.assign(fortempstyling.style, {
        //     color: "rgb(76, 75, 75)",
        //     fontWeight: "bold"
        //   });
        // Object.assign(formainstyling.style, {
        //     color: "rgb(76, 75, 75)",
        //     fontWeight: "bold"
        //   });
    }
    else if(data.weather[0].main==="Thunderstorm" || data.weather[0].main==="Storm"){
        document.getElementById("forweathercard").innerHTML = `<div id="weathercard">
            <div id="locationdisplay">${data.name}</div>
            <div class="forimg">
                <img class="weatherimg" src="assets/storm1.png" alt="img">
            </div>
            <div class="weatherdata">
                <div id="temp">${Math.round(data.main.temp - 273.15)}&degC</div>
                <div id="weathercondition">${data.weather[0].main}</div>
            </div>
        </div>` 
        const forweathercardcolor = document.getElementById("weathercard")
        // const forlocationstyling = document.getElementById("locationdisplay")
        // const fortempstyling= document.getElementById("temp")
        // const formainstyling = document.getElementById("weathercondition")
        Object.assign(forweathercardcolor.style, {
            backgroundColor: "rgb(67, 43, 248)",
          });
        // Object.assign(forlocationstyling.style, {
        //     color: "rgb(76, 75, 75)",
        //     fontWeight: "bold"
        //   });
        // Object.assign(fortempstyling.style, {
        //     color: "rgb(76, 75, 75)",
        //     fontWeight: "bold"
        //   });
        // Object.assign(formainstyling.style, {
        //     color: "rgb(76, 75, 75)",
        //     fontWeight: "bold"
        //   });
    }
    else if(data.weather[0].main==="Snow"){
        document.getElementById("forweathercard").innerHTML = `<div id="weathercard">
            <div id="locationdisplay">${data.name}</div>
            <div class="forimg">
                <img class="weatherimg" src="assets/snowy.png" alt="img">
            </div>
            <div class="weatherdata">
                <div id="temp">${Math.round(data.main.temp - 273.15)}&degC</div>
                <div id="weathercondition">${data.weather[0].main}</div>
            </div>
        </div>` 
        const forweathercardcolor = document.getElementById("weathercard")
        // const forlocationstyling = document.getElementById("locationdisplay")
        // const fortempstyling= document.getElementById("temp")
        // const formainstyling = document.getElementById("weathercondition")
        Object.assign(forweathercardcolor.style, {
            backgroundColor: "rgb(110, 212, 249)",
          });
        // Object.assign(forlocationstyling.style, {
        //     color: "rgb(76, 75, 75)",
        //     fontWeight: "bold"
        //   });
        // Object.assign(fortempstyling.style, {
        //     color: "rgb(76, 75, 75)",
        //     fontWeight: "bold"
        //   });
        // Object.assign(formainstyling.style, {
        //     color: "rgb(76, 75, 75)",
        //     fontWeight: "bold"
        //   });
    } else{
        document.getElementById("forweathercard").innerHTML = `<div id="weathercard">
            <div id="locationdisplay">${data.name}</div>
            <div class="forimg">
                <img class="weatherimg" src="assets/elsecloud.png" alt="img">
            </div>
            <div class="weatherdata">
                <div id="temp">${Math.round(data.main.temp - 273.15)}&degC</div>
                <div id="weathercondition">${data.weather[0].main}</div>
            </div>
        </div>` 
        const forweathercardcolor = document.getElementById("weathercard")
        // const forlocationstyling = document.getElementById("locationdisplay")
        // const fortempstyling= document.getElementById("temp")
        // const formainstyling = document.getElementById("weathercondition")
        Object.assign(forweathercardcolor.style, {
            backgroundColor: "grey",
          });
        // Object.assign(forlocationstyling.style, {
        //     color: "rgb(76, 75, 75)",
        //     fontWeight: "bold"
        //   });
        // Object.assign(fortempstyling.style, {
        //     color: "rgb(76, 75, 75)",
        //     fontWeight: "bold"
        //   });
        // Object.assign(formainstyling.style, {
        //     color: "rgb(76, 75, 75)",
        //     fontWeight: "bold"
        //   });
    }
}