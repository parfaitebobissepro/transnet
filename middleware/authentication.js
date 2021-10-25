export default function({redirect,app}){
    var authCookies = app.$cookies.get('auth', { parseJSON: true });
    if (authCookies) {
        if (!authCookies.isLoggedIn) {
            // this.$router.push('/login');
            return redirect('/login');
        }
    }else{
        return redirect('/login');
    }
}