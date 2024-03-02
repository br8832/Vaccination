import React, { Fragment, useEffect } from "react";
import { useLocation } from "react-router-dom";
//import QRCode from 'exports-loader?exports=QRCode/sqrcode'
import  QRCode  from "qrcode";

export default function Payment(){
    let location = useLocation()
    let app = JSON.stringify(location.state)
    useEffect(()=>{
        console.log(app)
    // Print the QR code to terminal
    // QRCode.toString(app,
    // function (err, QRcode) {

    // if(err) {return console.log(err)}
    
    // document.getElementById("qrcode").innerHTML=QRcode
    // // Printing the generated code
    
    // })
        
    // Converting the data into base64 
    QRCode.toCanvas(app, function (err, code) {
    if(err) return console.log(err)
    console.log(code)
    document.getElementById("qrcode").append(code)
    // Printing the code
    //console.log(code)
})
    },[])
    


    return (<Fragment> 
        <p><strong>Thank you for paying. Here is your code to scan</strong></p>
     <div id="qrcode"></div>

    </Fragment>)
}
