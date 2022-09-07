
type propstype = {
    email:string;
    password:string;
    name:string;
    reppass:string;
}

type returntype = {massage: string;} | false ;


export function validation({email,password, name ,reppass}:propstype):returntype{
    let testemail = checkemail(email)
    if (testemail) return testemail

    if (name.length<=4) return {massage: 'Имя должно содержать минимум 4 символа'}
    if (name.length>=10) return {massage: 'Пожалуйста ограничтесь 10 символами в вашем нике'}

    let testpassword = checkpassword(password)
    if (testpassword) return testpassword

    if (password!==reppass) return {massage: 'Пароли не совпадают'}
    return false;
}

export function checkemail(email:string):returntype{
    let regular = /^[a-zA-Z0-9\.]{6,20}@[a-z\.]{4,14}\.[a-z]{2,4}$/
    let res = regular.test(email);

    if (!res) return {massage: 'Кажется с имейлом что-то не то'};
    return false;
}

export function checkpassword(password:string):returntype{

    let test1 = /[A-Z]/.test(password)
    let test2 = /[0-9]/.test(password)
    let test3 = /[a-z]/.test(password)
    let test4 = (password.length >= 8)

    if (!test1 || !test2 || !test3 ){
        return {massage: 'Пароль должен содержать латинские заглавные буквы , строчные буквы и цифры'}
    }
    if (!test4) return {massage: 'Пароль должен содержать минимум 8 символов'}


    return false;
}































//