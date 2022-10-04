import SpotifyApiRequestsConfig from "../network/SpotifyApiRequestsConfig"
import IGetApiTokenResponseDTO from "../network/dtos/IGetApiTokenResponseDTO"
import IErrorResponseDTO from "../network/dtos/IErrorResponseDTO"

export class ApiUtils {
    static async getToken(): Promise<IGetApiTokenResponseDTO | IErrorResponseDTO> {
        const response = await SpotifyApiRequestsConfig.getApiToken()

        return response
    }
}