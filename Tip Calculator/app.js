window.onload = () => {
        document.querySelector('#calculate').onclick = calculateTip;
    }
 
function calculateTip() {
    
    let amount = document.querySelector('#amount').value;
    let persons = document.querySelector('#persons').value;
    let service = document.querySelector('#services').value;
    
    // if amonut input or options are not selected then we will alert the user
    if (amount === '' && service === 'Select') {
        alert("Please enter valid values");
        return;
    }
 
    // if only one person is there we dont need to show each text
    if (persons === '1')
    
        document.querySelector('#each').style.display = 'none';
    else
   
        document.querySelector('#each').style.display = 'block';
 
    
    let total = (amount * service) / persons;
    total = total.toFixed(2);
 
    // here we blocking our css display property
    document.querySelector('.tip').style.display = 'block';

    // finally display total tip 
    document.querySelector('#total').innerHTML = total;
}