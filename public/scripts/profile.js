const summary_info = document.getElementById('summary_info');
const info_list = document.getElementById('info_list');

summary_info.addEventListener('click',(e)=>{
    e.preventDefault();
    if(info_list.classList.contains('disappear_info')){

        info_list.classList.remove('disappear_info');
        info_list.classList.add('appear_info');
    }else{
        info_list.classList.remove('appear_info');
        info_list.classList.add('disappear_info');
    }
});

const body = document.querySelector('#info_div');
