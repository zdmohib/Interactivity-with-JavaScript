/*Add the JavaScript here for the function billingFunction().  It is responsible for setting and clearing the fields in Billing Information */

function billingFunction(){
  
    if (document.getElementById('same').checked){
      var name=document.getElementById('shippingName').value;
      var zip=document.getElementById('shippingZip').value;
      
      document.getElementById('billingName').value = name; 
      document.getElementById('billingZip').value = zip;
      
    }else{
      document.getElementById('billingName').value = '';
      document.getElementById('billingZip').value =  '';
    }
  
}