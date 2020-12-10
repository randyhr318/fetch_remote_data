printAllCities();




async function printAllCities() {
  for (const city of [ 'New Orleans', 'Baton Rouge', 'New Iberia', 'Grand Isle' ]) {
    await printLatitudeAndLongitude(city);
  }
}


async function printLatitudeAndLongitude(city) {
    const url = `https://geocode.xyz/${city}?json=1`;
  
  let res = await fetch(url);
  
  if (res.status != 200) {
    res = await new Promise(x => setTimeout(async () => {
        const tmpRes = await fetch(url);
        x(tmpRes);
      }, 2000));
  }

    const json = await res.json();
  const output = `${json.standard.city} - Latitude: ${json.latt}, Longitude: ${json.longt}`;
  console.log(output);
  htmlLog(output);
}

function htmlLog(logData) {
    const li = document.createElement('li');
  li.innerText = logData.toString();
   
}