let checkmail = /^[a-zA-z0-9._-]+@gmail\.com$/;

document.getElementById("submit-signin").onclick = send;
document.getElementById("submit-signup").onclick = send1;


function send(){
    let email = document.getElementById("email").value ;
    let pass = document.getElementById("pas").value ;


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
    else{
        alert("Đăng nhập thành công");
        return;
    }
}

function send1(){
    let name=document.getElementById("name");
    let email=document.getElementById("email2");
    let mk=document.getElementById("matkhau");
    let checkpass=document.getElementById("checkpass")
    let gender=document.querySelectorAll("option.option-item");
    let sdt=document.getElementById("sdt");
    let check=document.getElementById("checkcamket");
    let date=document.getElementById("date");
   
    if(name.value.trim()===""){
        alert("Vui lòng điền tên");
        return;
    }
    if(email.value.trim() ===""){
        alert("Email không được để trống");
        return;
    }

    if(!email.value.match(checkmail)){
        alert("Email cần được nhập đúng định dạng");
        return ;
    }
    if(mk.value.trim()==""){
        alert("Mật khẩu không được bỏ trống");
        return;
    }
    
    if(mk.value.length < 8){
        alert("Mật khẩu phải có ít nhất 8 kí tự");
        return;
    }
    if(checkpass.value != mk.value){
        alert("Điền sai phần xác nhận mật khẩu");
        return;
    }
    if(date.value==""){
        alert("Vui lòng nhập ngày sinh của bạn");
        return;
    }
   if(!gender[1].selected && !gender[2].selected){
    alert("Bạn vui lòng cho biết giới tính của mình");
    return;
   }
    if(sdt.value.trim()==""){
        alert("Số điện thoại không được bỏ trống");
        return;
    }
    if(sdt.value.length  != 10){
        alert("Số điện thoại có 10 số");
        return;
    }
    if(!check.checked){
        alert("Vui lòng đồng ý chính sách và bảo mật của chúng tôi");
        return 0;
    }
    alert("Đăng ký thành công");
}

