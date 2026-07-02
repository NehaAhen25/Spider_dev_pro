let products=[];

function addProduct(){

let name=document.getElementById("product").value;

let price=Number(document.getElementById("price").value);

let quantity=Number(document.getElementById("quantity").value);

if(name=="" || price<=0 || quantity<=0){

alert("Enter valid details");

return;

}

products.push({

name:name,

price:price,

quantity:quantity,

total:price*quantity

});

document.getElementById("product").value="";
document.getElementById("price").value="";
document.getElementById("quantity").value="";

alert("Product Added!");

}


function generateBill(){

if(products.length==0){

alert("Add at least one product");

return;

}

let total=0;

let bill="";

let expensive=products[0];

for(let i=0;i<products.length;i++){

bill+=`
<tr>
<td>${products[i].name}</td>
<td>${products[i].price}</td>
<td>${products[i].quantity}</td>
<td>${products[i].total}</td>
</tr>
`;

total+=products[i].total;

if(products[i].price>expensive.price){

expensive=products[i];

}

}


// Discount

let discount=0;

if(total>=5000){

discount=20;

}
else if(total>=3000){

discount=10;

}
else if(total>=1000){

discount=5;

}

let discountAmount=(discount/100)*total;

let afterDiscount=total-discountAmount;


// GST

let gst=afterDiscount*0.18;

let finalBill=afterDiscount+gst;


// Payment Method

let payment=document.getElementById("payment").value;

let paymentMessage="";

switch(payment){

case "Cash":

paymentMessage="Cash Payment Selected";

break;

case "UPI":

paymentMessage="Pay using QR Code";

break;

case "Card":

paymentMessage="Swipe or Tap Card";

break;

}


document.getElementById("bill").innerHTML=`

<h2>Final Bill</h2>

<table border="1" cellpadding="10">

<tr>

<th>Product</th>

<th>Price</th>

<th>Qty</th>

<th>Total</th>

</tr>

${bill}

</table>

<br>

<b>Total Amount:</b> ₹${total.toFixed(2)}<br>

<b>Discount:</b> ${discount}%<br>

<b>GST (18%):</b> ₹${gst.toFixed(2)}<br>

<b>Final Amount:</b> ₹${finalBill.toFixed(2)}<br>

<b>Most Expensive Product:</b> ${expensive.name}<br>

<b>Payment:</b> ${paymentMessage}

`;

}