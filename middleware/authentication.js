export default function({redirect,app}){
    var authCookies = app.$cookies.get('auth', { parseJSON: true });
    console.log(test);
    console.log('test a voir');
    if (authCookies) {
        if (!authCookies.isLoggedIn) {
            return redirect('/login');
        }
    }else{
        return redirect('/login');
    }
}