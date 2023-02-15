const d=document;
const n =navigator;
const ua=n.userAgent;



export default function userDeviceInfo(id){
    const $id=d.getElementById(id);
    let isMobile={
        android:()=>ua.match(/Android/i),
        ios:()=>ua.match(/Iphone|ipad|Ipod/i),
        windows:()=>ua.match(/Windows phone/i),
        any:function(){
            return this.android()||this.ios()||this.windows();
        }
    };
    let isDesktop={
        linux:()=>ua.match(/linux/i),
        mac:()=>ua.match(/mac os/i),
        windows:()=>ua.match(/Windows NT/i),
        any:function(){
            return this.linux()||this.mac()||this.windows();
        }

    };
    let isBrowser={
        chrome:()=>ua.match(/Chrome/i),
        safari:()=>ua.match(/Safari/i),
        firefox:()=>ua.match(/Firefox/i),
        opera:()=>ua.match(/Opera|Opera mini/i),
        ie:()=>ua.match(/msie|iemobile/i),
        edge:()=>ua.match(/edge/i),
        any:function(){
            return(this.ie()||this.edge()||this.chrome()||this.safari()||this.firefox()||this.opera());
        },

    };

    
    $id.innerHTML=`
    <ul>
        <li>User Agent <b>${ua} </b> </li>
        <li>Plataforma: <b>${isMobile.any()?isMobile.any():isDesktop.any()} </b> </li>
        <li>Navegador  <b>${isBrowser.any()} </b> </li>
    </ul>
    `;
}
