
const userinput = document.getElementById("city-name")
const btn = document.getElementById("btn")
const cname = document.getElementById("cityname")
const region = document.getElementById("region")
const country = document.getElementById("country")
const chumidity = document.getElementById("humidity")
const ctemperature = document.getElementById("Temperature")
const climate = document.getElementById("climate")
const img=document.getElementById("day-night")
const time=document.getElementById("localtime")
const errorlog=document.getElementById("error-log")



async function getinfo(name) {
    const result = await fetch(`http://api.weatherapi.com/v1/current.json?key=9f8a455c7c0344b081f165454232812&q=${name}&aqi=no`)

    return await result.json()
}




async function currentgetinfo(lat,long) {
    const currentresult = await fetch(`http://api.weatherapi.com/v1/current.json?key=9f8a455c7c0344b081f165454232812&q=${lat,long}&aqi=no`)

    return await currentresult.json()
}




const userlocation=navigator.geolocation.getCurrentPosition(getuserlocation,locationNotFound)



async function getuserlocation(position){
    const data=await currentgetinfo(position.coords.latitude,position.coords.longitude)
    
    cname.innerText = `City Name: ${data.location.name}`
    region.innerText = `1.Region: ${data.location.region}`
    country.innerText = `2.Country: ${data.location.country}`
    ctemperature.innerText = `3.Temperature in Celsius: ${data.current.temp_c} / Farenheit:${data.current.temp_f}`
    chumidity.innerText = `4.Humidity: ${data.current.humidity} `
    climate.innerText = `5.Climate: ${data.current.condition.text}`
    time.innerText=`Current-Time: ${data.location.localtime } / ${data.location.tz_id}`

    if (data.current.is_day) {
        img.src="sun.png"
    }
    if (!data.current.is_day) {
        img.src="half-moon.png"
    }

    console.log(data);
}


function locationNotFound(){
    console.log("error location");
}



btn.addEventListener('click', async () => {


    const userdata = userinput.value
    const info = await getinfo(userdata)

    cname.innerText = `City Name: ${info.location.name}`
    region.innerText = `1.Region: ${info.location.region}`
    country.innerText = `2.Country: ${info.location.country}`
    ctemperature.innerText = `3.Temperature in Celsius: ${info.current.temp_c} / Farenheit:${info.current.temp_f}`
    chumidity.innerText = `4.Humidity: ${info.current.humidity} `
    climate.innerText = `5.Climate: ${info.current.condition.text}`
    time.innerText=`Current-Time: ${info.location.localtime } / ${info.location.tz_id}`

    if (info.current.is_day) {
        img.src="sun.png"
    }
    if (!info.current.is_day) {
        img.src="half-moon.png"
    }

    console.log(info);



})





