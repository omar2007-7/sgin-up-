
const user_input = $("#user_input");
const email_input = $("#email_input");
const password_input = $("#password_input");
const save_button = $("#save_button");
const Delete_button = $("#Delete_button");
const user_h6 = $("h6#user");
const email_h6 = $("h6#email");
const password_h6 = $("h6#password");


const path_login = "./assets/json/login.json"




save_button.on('click',()=>{

    let user = user_input.val();
    let email = email_input.val();
    let password = password_input.val();

    if((user !== "") && (email !== "" )&& (password !== "")){
            let user_info = new Create(user,email,password);
            addTOinfo(user_info,user_h6,email_h6,password_h6);
    }
    
})
Delete_button.on('click',()=>{
    deleteInfo(user_h6,email_h6,password_h6);
})

function Create(user_input,email_input,password_input){
    this.user = user_input;
    this.email = email_input;
    this.password = password_input;
}


function addTOinfo(data,users,emails,passwords){
    users.text(data.user);
    emails.text(data.email);
    passwords.text(data.password);
}

function deleteInfo(users,emails,passwords){
    users.text("");
    emails.text("");
    passwords.text("");
}