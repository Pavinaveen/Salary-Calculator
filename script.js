document.addEventListener('DOMContentLoaded', function(){
 const salaryInput =document.getElementById('basic-salary');
 const balanceDisplay = document.getElementById("bal-amt");
 const expenseDisplay = document.getElementById("Exp-amt");
 const productInput = document.getElementById("product-name");
 const priceInput = document.getElementById("expense-list");
 const productList = document.getElementById("product-list");
 const alertMessage = document.getElementById("alert-message");
 const addButton=document.getElementById('btn');

 let balance=0;
 let salary=0;
 let totalExpenses=0;

 salaryInput.addEventListener('input', function(){
  salary=parseFloat(salaryInput.value);
  balance=salary;
  totalExpenses=0;
  balanceDisplay.textContent=balance.toFixed(1);
  expenseDisplay.textContent=totalExpenses.toFixed(1);
  alertMessage.textContent='';
 });

 addButton.addEventListener('click',function(){
  const productName= productInput.value.trim();
  const productPrice =parseFloat(priceInput.value);

 
  if(balance- productPrice<0){
    alert('Not valid Balance');
    productInput.value = "";
    priceInput.value = "";
    return;
  }
   
  
  balance = balance-productPrice;
  totalExpenses=totalExpenses+productPrice;
  balanceDisplay.textContent=balance.toFixed(1);
  expenseDisplay.textContent=totalExpenses.toFixed(1);

  const lis =document.createElement("li");
  lis.textContent=productName+" "+productPrice;
  productList.appendChild(lis);

  productInput.value="";
  priceInput.value="";

  if(balance<0.2 *salary){
    alert("Warning your balance is less than 20%");
  }

 });

});