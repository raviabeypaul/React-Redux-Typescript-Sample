import { LoginDTO } from "../dtos/LoginDTO";
import { ApiResponseDTO } from "../dtos/ResponseDTO";

export class AuthService {
  registerUser = async (loginDTO: LoginDTO) => {
    const response: ApiResponseDTO = {
      _status: {
        code: 200,
        error: [],
        message: "Signup was successful",
      },
      result: {},
    };
    return response;
  };
}
