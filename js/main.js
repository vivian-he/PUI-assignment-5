
 var bun_amt = new Array();
 bun_amt["one"]=20;
 bun_amt["three"]=25;
 bun_amt["six"]=35;
 bun_amt["twelve"]=75;
 
 
function getBunPrice()
{  
    // clicked = true;
    var amountPrice=0;
    //Get a reference to the form id="bunform"
    var theForm = document.forms["bunform"];
    //Get a reference to the cake the user Chooses name=selectedAmt":
    var selectedAmt = theForm.elements["selectedamount"];

    for(var i = 0; i < selectedAmt.length; i++)
    {
        //if the radio button is checked
        if(selectedAmt[i].checked)
        {

            amountPrice = bun_amt[selectedAmt[i].value];

            break;
        }
    }
    //We return the amountPrice
    return amountPrice;
}



function calculateTotal()
{

    
    var amtPrice = getBunPrice() 
    
    //display the result
    var divobj = document.getElementById('totalPrice');
    divobj.style.display='block';
    divobj.innerHTML = "<h3>$ "+amtPrice+"</h3>";



}
