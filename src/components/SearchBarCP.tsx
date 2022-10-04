import React from 'react'
import { Input } from 'antd'
import styled from 'styled-components'
import { SearchOutlined } from '@ant-design/icons'
import SpotifyApiRequestsConfig from '../network/SpotifyApiRequestsConfig'
import IGetApiTokenResponseDTO from '../network/dtos/IGetApiTokenResponseDTO'
import ISearchResponseDTO from '../network/dtos/ISearchResponseDTO'
import IErrorResponseDTO from '../network/dtos/IErrorResponseDTO'
import { ApiUtils } from '../utils/ApiUtils'

interface ISearchBarCPProps {
    getApiTokenResponse: IGetApiTokenResponseDTO
    setSearchResponse: (response: ISearchResponseDTO | IErrorResponseDTO) => void
    setGetApiTokenResponse: (response: IGetApiTokenResponseDTO | IErrorResponseDTO) => void
}

export default function SearchBarCP(props: ISearchBarCPProps): JSX.Element {
    let typingTimer

    async function getToken() {
        const tokenResponse = await ApiUtils.getToken()

        props.setGetApiTokenResponse(tokenResponse)
    }

    async function makeSearch(searchString: string) {
        const searchResponse = await SpotifyApiRequestsConfig.search(searchString, props.getApiTokenResponse.access_token)

        if(searchResponse && 'error' in searchResponse) {
            await getToken()
            makeSearch(searchString)
        } else {
            props.setSearchResponse(searchResponse)
        }
    }

    return (
        <InputSCP
            placeholder={'Search'}
            prefix={<SearchOutlined style={{ fontSize: 20 }}/>}
            onKeyUp={(event) => {
                //Default KeyboardEventHandler doesn't have a value property mapped, because not all elements have a value property.
                //But as we are dealing with a text input, there's no problem in doing this cast
                if((event.target  as HTMLInputElement).value !== '') {
                    clearTimeout(typingTimer)

                    typingTimer = setTimeout(() => makeSearch((event.target as HTMLInputElement).value), 200)
                }
            }}
            //once a key is pressed, cancels onKeyUp timer
            onKeyDown={() => clearTimeout(typingTimer)}
        />
    )
}

const InputSCP = styled(Input)`
    width: 500px;
    height: 35px;
    border-radius: 50px;
    border-width: 0px !important;
`
