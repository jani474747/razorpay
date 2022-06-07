export default async function displayRazor(){

    const data = await fetch("http://localhost:5000/razorpay",{
        method:"POST"
    }).then((t)=>t.json())

console.log(data)

 const options = {
   key: "rzp_test_sWnSYKJEidnzo6",
    currency: data.currency  ,
    amount:data.amount,
    description:"Wallet Transaction",
    image:"http://localhost:5000/logo.jpg",
    order_id:data.id,
    handler:function(response){
        alert("PAYMENT ID:"+response.razor_payment_id)
        alert("ORDER ID :"+response.razorpay_order_id)
    },
    prefill:{
        name:"AYUSHI JAIN",
        EMAIL:"ayushi@gmail.com",
        contact:"8349343983"
    }
 }
 const paymentObject= new window.Razorpay(options)
 paymentObject.open()
}