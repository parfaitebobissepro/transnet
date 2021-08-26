export default function({redirect,app}){
    var test = app.$cookies.get('auth', { parseJSON: true });
    console.log(test);
    console.log('test a voir');
    if (test) {
        if (!test.isLoggedIn) {
            return redirect('/login');
        }
    }else{
        return redirect('/login');
    }
}