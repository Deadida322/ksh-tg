const nameInput = document.querySelector("#name");
const phoneInput = document.querySelector("#phone");
const btn = document.querySelector("#btnSend");
const phoneMask = new IMask(phoneInput, {
    mask: "+{7}(000)000-00-00",
});

const validate = (data) => {
    if (data.name && /\+7\(\d{3}\)\d{3}-\d{2}-\d{2}/.test(data.phone)) {
        return true
    }
    return false
};

const onFormSubmit = (e) => {
    e.preventDefault();

    let data = {
        name: nameInput.value,
        phone: phoneInput.value,
    };

    const token = "5864751099:AAEC-_kd81-A-QODFVs6DpIuXEgjHpRC80Y";
    const chat_id = -777757462;

    if(validate(data)){
        fetch(
            `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&parse_mode=html&text=${JSON.stringify(
                data
            )}`,
            {
                method: "post",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            }
        ).then((response) => {
            Swal.fire({
                title: 'Отлично!',
                text: 'Ваша заявка отправлена',
                icon: 'success',
                confirmButtonText: 'ок'
              })
        });
    }
    else{
        Swal.fire({
            title: 'Ошибка!',
            text: 'Заполните форму правильно',
            icon: 'error',
            confirmButtonText: 'ок'
          })
    }

}


btn.onclick = onFormSubmit;
// const onFormSubmit = (nm, ph) => {
//     const data = {
//         name: nm.value,
//         phone: ph.value,
//     };
//     if (validate(data)) {
//         const text = `Пользователь *` + data.name +  "* отправил заявку с номером *" + data.phone + "*"
//         const request = `https://api.telegram.org/bot6215536718:AAHdANrs6spkN1KIuFvKIV1rYVYlRD7btig/sendMessage?chat_id=-833639716&parse_mode=Markdown&text=` + text
//         fetch(request,
//             {
//                 method: "post",
//                 headers: {
//                     "Content-Type": "application/json;charset=utf-8",
//                 },
//             }
//         )
//             .then((response) => {
//                 Swal.fire({
//                     title: "Отлично!",
//                     text: "Ваша заявка отправлена",
//                     icon: "success",
//                     confirmButtonText: "ок",
//                 });
//             })
//             .catch((err) => {
//                 Swal.fire({
//                     title: "Ошибка!",
//                     text: "Произошла ошибка на сервере",
//                     icon: "error",
//                     confirmButtonText: "ок",
//                 });
//             }).finally(()=>{
//                 ph.value = ""
//                 nm.value = ""
//             })
//     } else {
//         Swal.fire({
//             title: "Ошибка!",
//             text: "Заполните форму правильно",
//             icon: "error",
//             confirmButtonText: "ок",
//         });
//     }
// };

// const validate = (data) => {
//     if (data.name && /\+7\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}/.test(data.phone)) {
//         return true;
//     }
//     return false;
// };

// const forms = document.querySelectorAll(".form");

// forms.forEach((form, index) => {
//     const nm = form.querySelector(`#name-${index + 1}`);
//     const ph = form.querySelector(`#phone-${index + 1}`);
//     console.log(form.querySelector(".d-flex.justify-content-center"));
//     form.querySelector(
//         ".d-flex.justify-content-center"
//     ).innerHTML = `<div class="btn-all">Отправить</div>`;
//     const btn = form.querySelector(`.btn-all`);
//     btn.onclick = () => {
//         onFormSubmit(nm, ph);
//     };
//     form.method = false;
//     form.action = false;
// });
