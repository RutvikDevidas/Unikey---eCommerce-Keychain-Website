function getData() {
  const urlParams = new URLSearchParams(window.location.search);
  const n = urlParams.get('name');
  const img = urlParams.get('image');
  const p = urlParams.get('price');

  if (n && img && p) {
    document.getElementById('product-name').innerText = n;
    document.getElementById('product-image').src = img;
    document.getElementById('product-price').innerText = p;
    document.getElementById('productNameInput').value = n;
    document.getElementById('productPriceInput').value = p;
  }
}

function calculateTotal() {
  const priceText = document
    .getElementById('product-price')
    .innerText.replace('₹', '')
    .trim();
  const price = parseFloat(priceText);
  const qty = parseInt(document.getElementById('qty').value);

  if (!isNaN(price) && !isNaN(qty)) {
    const total = qty * price;
    document.getElementById('totalP').innerHTML = total;
    document.getElementById('totalPInput').value = total;
  } else {
    document.getElementById('totalP').innerHTML = '';
    document.getElementById('totalPInput').value = '';
  }
}

function val() {
  let fn = document.orderForm.fullName.value;
  let ph = document.orderForm.phone.value;
  let em = document.orderForm.email.value;
  let vil = document.orderForm.village.value;
  let talu = document.orderForm.taluka.value;
  let st = document.orderForm.state.value;
  let pin = document.orderForm.pin.value;
  let qty = document.orderForm.qty.value;

  let nameChk = /^[A-Za-z\.',\s]{3,}$/;
  let phChk = /^[0-9]{10}$/;
  let emChk = /^[a-zA-Z0-9\.]+@[a-z]+\.[a-z]{2,10}$/;
  let pinChk = /^[0-9]{6}$/;

  // Full name
  if (fn === '') {
    document.getElementById('nameEr').innerHTML = 'Please Enter Your Full Name';
    return false;
  } else if (!nameChk.test(fn)) {
    document.getElementById('nameEr').innerHTML =
      'NAME SHOULD CONSIST OF ALPHABETS ONLY!';
    document.getElementById('fullName').style.color = 'red';
    return false;
  } else {
    document.getElementById('nameEr').innerHTML = '';
    document.getElementById('fullName').style.color = 'black';
  }

  // Phone
  if (ph === '') {
    document.getElementById('phoneEr').innerHTML =
      'Please Enter Your Contact Number!';
    return false;
  } else if (!phChk.test(ph)) {
    document.getElementById('phone').style.color = 'red';
    document.getElementById('phoneEr').innerHTML =
      'Enter a valid 10 digit number!';
    return false;
  } else {
    document.getElementById('phone').style.color = 'black';
    document.getElementById('phoneEr').innerHTML = '';
  }

  // Email
  if (em === '') {
    document.getElementById('emailEr').innerHTML =
      'Please Enter Your Email Address!';
    return false;
  } else if (!emChk.test(em)) {
    document.getElementById('email').style.color = 'red';
    document.getElementById('emailEr').innerHTML =
      'Enter a valid Email Id e.g. abc@gmail.com';
    return false;
  } else {
    document.getElementById('email').style.color = 'black';
    document.getElementById('emailEr').innerHTML = '';
  }

  // Village
  if (vil === '') {
    document.getElementById('vEr').innerHTML = 'Enter Your Village Name';
    return false;
  } else if (!nameChk.test(vil)) {
    document.getElementById('village').style.color = 'red';
    document.getElementById('vEr').innerHTML =
      'Village Name should consist of alphabets.';
    return false;
  } else {
    document.getElementById('vEr').innerHTML = '';
    document.getElementById('village').style.color = 'black';
  }

  // Taluka
  if (talu === '') {
    document.getElementById('tEr').innerHTML = 'Enter Your Taluka Name';
    return false;
  } else if (!nameChk.test(talu)) {
    document.getElementById('taluka').style.color = 'red';
    document.getElementById('tEr').innerHTML =
      'Taluka Name should consist of alphabets.';
    return false;
  } else {
    document.getElementById('tEr').innerHTML = '';
    document.getElementById('taluka').style.color = 'black';
  }

  // State
  if (st === '') {
    document.getElementById('sEr').innerHTML = 'Enter Your State Name';
    return false;
  } else if (!nameChk.test(st)) {
    document.getElementById('state').style.color = 'red';
    document.getElementById('sEr').innerHTML =
      'State Name should consist of alphabets.';
    return false;
  } else {
    document.getElementById('sEr').innerHTML = '';
    document.getElementById('state').style.color = 'black';
  }

  // Pincode
  if (pin === '') {
    document.getElementById('pinEr').innerHTML = 'Enter Your Postal Code';
    return false;
  } else if (!pinChk.test(pin)) {
    document.getElementById('pin').style.color = 'red';
    document.getElementById('pinEr').innerHTML =
      'Enter a correct 6-digit pin code.';
    return false;
  } else {
    document.getElementById('pinEr').innerHTML = '';
    document.getElementById('pin').style.color = 'black';
  }

  // Quantity
  if (qty === '') {
    document.getElementById('qtyEr').innerHTML = 'Select Quantity';
    return false;
  } else {
    document.getElementById('qtyEr').innerHTML = '';
  }

  return true;
}
