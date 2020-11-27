let reverseGeocode= require("./modules/geocode.js");
let StatusClima= require("./modules/clima.js");

let coordenada ={
    lat: 19.264962,
    lon: -103.716204
}

reverseGeocode(coordenada,(error,dataResponse)=>{
    if(error){
        console.log('ocurrio un error');
    }
    else{
        console.log(dataResponse.state);
        StatusClima(dataResponse.state,(error,climaResponse)=>{
            if(error){
                console.log("se presentó un error");
            }
            else{
                console.log(climaResponse.temperature);
                //console.log(climaResponse.current.temperature); es incorrecto ya que la estructura del objeto climaResponse ya provee la parte de current
            }
        })
    }
});
