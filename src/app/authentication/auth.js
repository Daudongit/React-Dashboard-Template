
class Auth{

    // constructor(){
    //     this.authentication = false
    // }

    login(token,expiration,cb){
        this.setToken(token,expiration)
        cb()
    }

    logout(cb){
        this.destroyToken()
        cb()
    }

    setToken(token,expiration){
        localStorage.setItem('token',token)
        localStorage.setItem('expiration',expiration)
    }

    getToken(){
        const token = localStorage.getItem('token')
        const expiration = localStorage.getItem('expiration')

        if(!token || !expiration)
            return null
        if(Date.now() > parseInt(expiration)){
            this.destroyToken()
            return null
        }else{
            return token
        }
    }

    destroyToken(){
        localStorage.removeItem('token')
        localStorage.removeItem('expiration')
    }

    isAuthenticated(){
        if(this.getToken()){
            return true
        }else{
            return false
        }
    }
}

export default new Auth()