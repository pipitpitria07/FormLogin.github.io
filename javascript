function Login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if (username == "mimin" && password == "mimin123") {
        alert ("selamat datang mimin, anda administrator");
    } else if (username == "budi" && password == "budi123") {
        alert ("selamat datang budi, anda operator");
    } else {
        alert ("mohon maaf anda gagal login");
    }
}
