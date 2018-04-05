const PASTECLIPBOARD = '{kp : {"clpbrd": 2}}';




function SmPostClick()
{



    //$('input[name="title"]').focus();
    //$('input[name="title"]').select();
    //document.execCommand("copy");
    //$('.button').removeAttr("disabled");



    return 0;   



}



function SmFormatDescription()
{
    return 0;
}




function SmPostCategory(categorys)
{

    inputNameCategory = 'input[name="category"]';


    $(inputNameCategory).val(categorys);
    $().focus();
    $(inputNameCategory).select();
    document.execCommand("copy");
    $(inputNameCategory).val("");

    return 0;


}




function SmPostTitle(title)
{


    $('input[name="title"]').val(title);

    return 0;


}




function SmPostDescription(description)
{



    $('textarea[name="body"]').val(description);

    return 0;


}




function RestfulGetPost()
{


    $.ajax(
    {

        url: "http://localh0t/webapi-ostroker/api.php/data"
    }





    ).then(function(data)
    {

        //alert("Its done");


        $.each(data["data"]["records"], function(key, value)
        {



            artTitle = value[1];
            artLink = value[2];
            artDescription = value[3];
            tags = null;
            disclaimerFooter = null;
            disclaimerHeader = null;
            imgSeparator = null;
            formatDescription = null;





            //FormatDescription(formatDescription, imgSeparator, disclaimerHeader, disclaimerFooter, tags);





            //PagePostSm(artTitle, artDescription, tags);




            //console.log(artDescription);
          


        });



    }



    ).fail(function()
    {


        alert("[!] Error Restful connection");


    });




    return 0;
}



function WebSocketoStroker(payload)
{





    var wsUri = "ws://2.2.2.252:5463";
    var websocket;




    try {


        if (typeof MozWebSocket == 'function')
        {
            WebSocket = MozWebSocket;
        }
            



        if ( websocket && websocket.readyState == 1 )
        {
            websocket.close();
        }
            




        websocket = new WebSocket(wsUri);




        websocket.onopen = function (evt)
        {

            websocket.send(payload);
            //websocket.close();
            
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
        alert('[!] ERROR: CONNECTING ' + exception);
    }



}


$( document ).ready(function() {


    //RestfulGetPost();


    WebSocketoStroker(PASTECLIPBOARD);


    //SmPostCategory("linux gdb codigo abierto");
    //SmPostTitle("Que es esooo");
    //SmPostDescription("Ministerio");
    //SmPostClick();
    

});