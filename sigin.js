function validasiform() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const pass = document.getElementById('pass').value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const ide = document.getElementById('ide').value;
    const day = document.getElementById('day').value;


    const namePattern = /^[A-Za-z\s]+$/;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const passPattern = /^[a-zA-Z0-9]{6,20}$/;

    if(username === ""){
        alert("Nama Tidak Boleh Kosong");
        return false;
    } else if(!namePattern.test(username)){
        alert("Nama Hanya Boleh Mengandung Huruf dan Spasi");
        return false;
    }

   
    if(email === ""){
        alert("Email Tidak Boleh Kosong");
        return false;
    } else if (!emailPattern.test(email)){
        alert("Email Tidak Valid");
        return false;
    }

    if(pass === ""){
        alert("Password Tidak Boleh Kosong");
        return false;
    } else if(!passPattern.test(pass)){
        alert("Password Harus Terdiri Dari 6-20 Karakter");
        return false;
    }

    if(!gender){
        alert("Pilih Jenis Kelamin");
        return false;
    }

    if(ide === ""){
        alert("Ide Tidak Boleh Kosong");
        return false;
    }


    if(day === ""){
        alert("Tanggal Lahir harus diisi!");
        document.getElementById('day').focus();
        return false;
    }


    alert("Form Berhasil Disimpan!");
    window.location.href = "home/home.html";
    return true;
}
