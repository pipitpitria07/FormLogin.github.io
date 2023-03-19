function Login() {
    let Email = document.getElementById("Email").value;
    let Password = document.getElementById("Password").value;
    if (Email == "Mimin" && Password == "Mimin123") {
        alert ("Selamat Datang " + Email + " Anda Administrator");
    } else if (Email == "Budi" && Password == "Budi123") {
        alert ("Selamat Datang " + Email + " Anda Operator");
    } else {
        alert ("Mohon Maaf Anda Gagal Login");
    }
}