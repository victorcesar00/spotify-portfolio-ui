export default class RequestConfig {
    private constructor() {} //private constructor to prevent instantiation

    /**
     * Make a get request
     *
     * @param {string} url
     */
    public static async get(url: string, token: string): Promise<any> {
        return await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }).then((response) => {
            return response.json().then((resp) => {
                return resp
            })
        })
    }
}