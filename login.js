function validasiform() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const pass = document.getElementById('pass').value;
    

    // Patterns for validation
    const namePattern = /^[A-Za-z\s]+$/;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const passPattern = /^[a-zA-Z0-9]{6,20}$/;

    // Validate Username
    if(username === ""){
        alert("Nama Tidak Boleh Kosong");
        return false;
    } else if(!namePattern.test(username)){
        alert("Nama Hanya Boleh Mengandung Huruf dan Spasi");
        return false;
    }

    // Validate Email
    if(email === ""){
        alert("Email Tidak Boleh Kosong");
        return false;
    } else if (!emailPattern.test(email)){
        alert("Email Tidak Valid");
        return false;
    }

    // Validate Password
    if(pass === ""){
        alert("Password Tidak Boleh Kosong");
        return false;
    } else if(!passPattern.test(pass)){
        alert("Password Harus Terdiri Dari 6-20 Karakter");
        return false;
    }

    // If all validations pass
    alert("Form Berhasil Disimpan!");
    window.location.href = "home/home.html";
    return true;
}
