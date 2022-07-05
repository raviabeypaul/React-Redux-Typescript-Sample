export interface ApiResponseDTO{
    _status : {
        code : number;
        message : string;
        error : any[]
    };
    result : any;
}

export interface ResponseDTO {
    statusCode : number;
    message : string;
    data : any
}