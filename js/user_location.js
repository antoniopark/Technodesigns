class UserLocation{
	
	constructor(callback){
		if(navigator.geolocation){
			navigator.geolocation.getCurrentPosition((location)=>{
				this.latitude = location.coords.lat;
				this.longitude = location.coords.lng;
				callback();
			});
		}
	}
}