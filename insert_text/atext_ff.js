$( document ).ready(function() {



function InitWs(payload)
{



    var wsUri = "ws://2.2.2.2:5463";
    var websocket;


    try {


        if (typeof MozWebSocket == 'function')
            WebSocket = MozWebSocket;


        if ( websocket && websocket.readyState == 1 )
            websocket.close();



        websocket = new WebSocket(wsUri);


        websocket.onopen = function (evt)
        {

            websocket.send(payload);
            
        };




        websocket.onclose = function (evt)
        {
            //alert("[!] Disconnect server");
        };



        websocket.onmessage = function (evt)
        {
            alert("[+] Message received : " + evt.data);
        };



        
        websocket.onerror = function (evt)
        {
            alert('[!] onerror');
        };

    } 


    catch (exception)
    {
        //alert('[!] ERROR: CONNECTING');
    }

}




//var strPayload = '{ "kp" : { "txt":"oPen syLar" , "dly":10 }}'; 



keyS = "Fucking ass =)";



var strRaw = '{"kp" : { "txt": "' + keyS + '", "dly": 2 }}';


//var strPayload = JSON.stringify(strRaw);



InitWs(strRaw);



//$('input[name="password"]').val("pepeeee");



$('.button').each(function(i, obj) {
    

    //alert($(obj).text());


	if($(obj).text()=="Login")
	{
		//$(obj).removeAttr("disabled");
		$(obj).click();
		alert("click press");

	}



});



});
