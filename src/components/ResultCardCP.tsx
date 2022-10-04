import React from 'react'
import { Card } from 'antd'
import styled from 'styled-components'
import { IAlbumReturnObject, IArtistReturnObject, IPlaylistReturnObject, ITracksReturnObject } from '../network/dtos/ISearchResponseDTO'

interface IResultCardCPProps {
    data: IAlbumReturnObject | IArtistReturnObject | IPlaylistReturnObject | ITracksReturnObject
}

export default function ResultCardCP(props: IResultCardCPProps): JSX.Element {
    console.log(props.data)

    return (
        <CardSCP>
            {props.data.name}
        </CardSCP>
    )
}

const CardSCP = styled(Card)`
    width: 120px;
    height: 135px;
    border-radius: 8px;
    background-color: #181818;
    color: white;
    border-width: 0px;
`