import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import SearchBarCP from './components/SearchBarCP'
import 'antd/dist/antd.css'
import './index.css'
import IGetApiTokenResponseDTO from './network/dtos/IGetApiTokenResponseDTO'
import IErrorResponseDTO from './network/dtos/IErrorResponseDTO'
import { ApiUtils } from './utils/ApiUtils'
import ResultCardCP from './components/ResultCardCP'
import 
    ISearchResponseDTO,
    {
        IAlbumReturnObject,
        IArtistReturnObject,
        IPlaylistReturnObject,
        ITracksReturnObject
    } from './network/dtos/ISearchResponseDTO'

export default function App() {
    const [getApiTokenResponse, setGetApiTokenResponse] = useState<IGetApiTokenResponseDTO | IErrorResponseDTO>()
    const [searchResponse, setSearchResponse] = useState<ISearchResponseDTO | IErrorResponseDTO>()

    useEffect(() => {
        getToken()
    }, [])

    async function getToken() {
        const tokenResponse = await ApiUtils.getToken()

        setGetApiTokenResponse(tokenResponse)
    }

    return (
        <AppSCP>
            {getApiTokenResponse && !('error' in getApiTokenResponse) &&
                <SearchBarCP
                    getApiTokenResponse={getApiTokenResponse}
                    setSearchResponse={setSearchResponse}
                    setGetApiTokenResponse={setGetApiTokenResponse}
                />
            }
            <ContentContainerSCP>
                {searchResponse ?
                    <ResultsColumnSCP>
                        <ResultsRowSCP>
                            <TitleSCP>Tracks</TitleSCP>
                            <ResultCardCP data={(searchResponse as ISearchResponseDTO).tracks[1] as ITracksReturnObject}/>
                        </ResultsRowSCP>
                        <ResultsRowSCP>
                            <TitleSCP>Albums</TitleSCP>
                        </ResultsRowSCP>
                        <ResultsRowSCP>
                            <TitleSCP>Artists</TitleSCP>
                        </ResultsRowSCP>
                        <ResultsRowSCP>
                            <TitleSCP>Playlists</TitleSCP>
                        </ResultsRowSCP>
                    </ResultsColumnSCP>
                    :
                    <FirstMessageH1SCP>
                        {getApiTokenResponse !== undefined && 'error' in getApiTokenResponse ?
                            <>
                                There was an error while connecting to the Spotify API.
                                <br/>
                                Try again later :(
                            </>
                            :
                            'Type something on the search bar to start'
                        }
                    </FirstMessageH1SCP>
                }
            </ContentContainerSCP>
        </AppSCP>
    )
}

const AppSCP = styled.div`
    width: 100vw;
    height: 100vh;
    background: #212121;
    padding: 30px;
`

const ContentContainerSCP = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100% - 30px);
    width: 100%;
`

const FirstMessageH1SCP = styled.h1`
    font-family: CircularBlack;
    color: white;
    font-size: 50px;
    width: 80%;
    text-align: center;
`

const ResultsColumnSCP = styled.div`
    height: 100%;
    width: 100%;
    padding-top: 30px;
`

const ResultsRowSCP = styled.div`
    height: 25%;
`

const TitleSCP = styled.h1`
    font-family: CircularBlack;
    color: white;
`
