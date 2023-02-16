const d=document;
const n=navigator;

export default function getGeolocation(id){
    const $id=d.getElementById(id);
    let options={
        enableHighAccuracy:true,
        timeout:5000,
        maximunAge:0,

    };
    const success=(position)=>{
        let coords=position.coords;
        $id.innerHTML=`
        <p>Tu posicion actual es :  
            <ul>
                <li>Latitud es : <b>${coords.latitude}</b>  </li>
                <li>Longitud es : <b>${coords.longitude}</b> </li>
                <li>Precision : <b>${coords.accuracy}</b> </li>
            </ul>
        </p>
        <a href="http://www.google.com/maps/@${coords.latitude},${coords.longitude},20z"> ver en google maps</a>
        `
            console.log(position);
    };
    const error=(err)=>{
        $id.innerHTML=`<p><mark>error${err.code}:${err.message}</mark></p>`
        //console.log(`error ${err.code} : ${err.message}`);
    };
    n.geolocation.getCurrentPosition(success,error,options);
}