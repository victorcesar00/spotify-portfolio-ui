import IErrorResponseDTO from './dtos/IErrorResponseDTO';
import IGetApiTokenResponseDTO from './dtos/IGetApiTokenResponseDTO';
import ISearchResponseDTO from './dtos/ISearchResponseDTO';
import RequestConfig from './RequestConfig';

export default class SpotifyApiRequestsConfig {
    private static BASE_URL = 'https://api.spotify.com/v1';

    private constructor() {} //private constructor to prevent instantiation

    public static async getApiToken(): Promise<IGetApiTokenResponseDTO | IErrorResponseDTO> {
        return await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + btoa(`${process.env.REACT_APP_SPOTIFY_CLIENT_ID}:${process.env.REACT_APP_SPOTIFY_CLIENT_SECRET}`)
            },
            body: 'grant_type=client_credentials'
        }).then((response) => {
            return response.json().then((resp) => {
                return resp
            })
        })
    }

    public static async search(searchString: string, token: string): Promise<ISearchResponseDTO | IErrorResponseDTO> {
        const query = new URLSearchParams({
            q: searchString,
            type: 'track,album,artist,playlist',
            limit: '10'
        })

        const response = RequestConfig.get(`${this.BASE_URL}/search?${query}`, token)

        return response
    }
}
