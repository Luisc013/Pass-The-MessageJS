    const form = document.getElementById("message-form")
    form.addEventListener('submit', () => {
        const message = document.getElementById('message')
        const feedback = document.querySelector('.feedback')
        const messageContent = document.querySelector('.message-content')
        if (message.value === ''){
            feedback.classList.add('show')
        } else {
            messageContent.textContent = message.value
             if(feedback.classList.contains('show')){
                feedback.classList.remove('show')
             }
             message.value = '';
        }
    })