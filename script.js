console.log('hey')

//get current position
function currentSuccess(pos){
    const coords = pos.coords;
    console.log(pos)
    console.log(coords)
    console.log(`latitude is ${coords.latitude} , longitude is ${coords.longitude} and accuracy is ${coords.accuracy} meters` )

}

function currentError(error){
    console.log(`error: ${error.code} - ${error.message}`)
}

const currentOptions = {
    enableHighAccuracy: true,//enable gps if available
    timeout: 5000,//time to wait to stop trying for location
    maxAge: 0 //do not use a cached position
};

navigator.geolocation.getCurrentPosition(currentSuccess,currentError,currentOptions)//3arguments: success, error, options

const target = {
    latitude: 17.4583908 ,
    longitude: 78.5014648
}
//watch position
function watchSuccess(pos){//fires when our location changes
    const coords = pos.coords;
    console.log(pos)
    console.log(coords)
    console.log(`latitude is ${coords.latitude} , longitude is ${coords.longitude} and accuracy is ${coords.accuracy} meters` )

    if(target.latitude == coords.latitude && target.longitude == coords.longitude){
        console.log(`you have reached your destination`);
        navigator.geolocation.clearWatch(id);
    }

}

function watchError(error){
    console.log(`error: ${error.code} - ${error.message}`)
}

const watchOptions = {
    enableHighAccuracy: true,//enable gps if available
    timeout: 5000,//time to wait to stop trying for location
    maxAge: 0 //do not use a cached position
};

const id = navigator.geolocation.getCurrentPosition(watchSuccess,watchError,watchOptions)//3arguments: success, error, options