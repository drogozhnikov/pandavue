import authService from "@/services/auth.service";
import router from "@/router/router";

class ErrorHandler {

    handle(error){
        console.log(error)
        if(error.response.status === 500){
            console.log(error.message)
        }
        if(error.response.status === 401){
            authService.logout()
            router.push("/")
        }
        else{
            console.log(error.response.data)
        }
    }

}

export default new ErrorHandler();