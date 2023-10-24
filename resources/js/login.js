document.getElementById("submit").onclick = send

function send(){
    let email = document.getElementById("email").value ;
    let pass = document.getElementById("pas").value ;

    let checkmail = /^[a-zA-z0-9._-]+@gmail\.com$/;

    if(email.trim() ===""){
        alert("Email không được để trống");
        return;
    }

    if(!email.match(checkmail)){
        alert("Email cần được nhập đúng định dạng");
        return ;
    }
   
    if(pass.trim()==""){
        alert("Mật khẩu không được bỏ trống");
        return;
    }
    
    if(pass.length < 8){
        alert("Mật khẩu phải có ít nhất 8 kí tự");
        return;
    }
}

