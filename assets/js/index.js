


function toast({title = '', message = '', type = 'infor',duration = 3000}){
    const main = document.getElementById('toast')

    if(main) {
        const toast = document.createElement('div')

        const timeoutId = setTimeout(function() {
            main.removeChild(toast)
        },duration + 1000);

        toast.onclick = function(e){
            if(e.target.closest('.toast__close')){
                main.removeChild(toast);
                clearTimeout(timeoutId);
            }
        }

        const icons = {
            success: 'fas fa-check-circle',
            warning: 'fas fa-exclamation-triangle',
            error: 'fas fa-exclamation-triangle',
            info: 'fas fa-info-circle'
        }

        const icon = icons[type];

        toast.classList.add('toast',`toast--${type}`)

        toast.style.animation = `slideInLeft ease 0.5s, fadeOut linear 1s ${duration/1000}s both`;
      
        toast.innerHTML = `
            <div class="toast__icon">
                <i class="${icon}"></i>
            </div>
            <div class="toast__body">
                <div class="toast__title"> ${title} </div>
                <div class="toast__message">${message}</div>
            </div>
            <div class="toast__close">
                <i class="fas fa-close"></i>
            </div> `;

        main.appendChild(toast)

    }
}

function showSuccessToast (){
    toast({
        title: 'Thành công',
        message: 'Đăng ký hệ thống tại CKC!',
        type:'success',
        duration: 5000
    })
}


function showWarningToast (){
    toast({
        title: 'Cảnh báo',
        message: 'Bạn đang cố xâm nhập vào hệ thống. Vui lòng bạn huỷ tao tác ngay',
        type:'warning',
        duration: 5000
    })
}

function showErrorToast (){
    toast({
        title: 'Lỗi hệ thống',
        message: 'ERROR 404',
        type:'error',
        duration: 5000
    })
}