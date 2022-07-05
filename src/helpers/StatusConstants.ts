export class StatusConstants{
    static STATUS_CODE_SUCCESS = 200;
    static STATUS_CODE_INVALID_LOGIN_PARAMTERS = 601;
    static API_STATUS_CODE_SUCCESS = 2000;
    static API_CODE_ESIM_NOT_SCANNED = 2005;
    static API_CODE_ESIM_SCANNED_INCORRECT_DEVICE = 2006;

    static getStatusMessages (statusCode : number){
        let message = ""
        switch(statusCode){
            case this.STATUS_CODE_SUCCESS:{
                message = "success";
                break;
            }
            case this.STATUS_CODE_INVALID_LOGIN_PARAMTERS:{
                message = "Login paramters is invalid";
                break;
            }
            case this.API_CODE_ESIM_NOT_SCANNED : {
                message = "Please scan to activate eSim"
                break;
            }
            default:{
                message = ''
            }
        }
        return message;
    }
}