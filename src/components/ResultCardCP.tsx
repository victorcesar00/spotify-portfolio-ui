import React from 'react'
import { Card } from 'antd'
import styled from 'styled-components'
import ExplicitIconCP from './icons/ExplicitIconCP'
import { HeartOutlined } from '@ant-design/icons'

interface IResultCardCPProps {
    imageUrl: string
    title: string
    explicit?: boolean
    subTitle?: string | string[]
}

export default function ResultCardCP(props: IResultCardCPProps): JSX.Element {
    return (
        <CardSCP>
                <img
                    src={props.imageUrl}
                    width={180}
                    style={{ alignSelf: 'center', marginBottom: 10 }}
                    alt={props.title}
                />
                <BottomContainerSCP>
                    <LeftSideContainer>
                        <b>{props.title}</b>
                        <ExplicitIconAndArtistNameContainerSCP>
                            {props.explicit && <ExplicitIconCP/>}
                            {props.subTitle && <p> {props.subTitle} </p>}
                        </ExplicitIconAndArtistNameContainerSCP>
                    </LeftSideContainer>
                    <HeartOutlined
                        style={{ fontSize: 25, alignSelf: 'center', width: '10%' }}
                    />
                </BottomContainerSCP>
        </CardSCP>
    )
}

const CardSCP = styled(Card)`
    width: 230px;
    height: 310px;
    border-radius: 8px;
    background-color: #181818;
    color: white;
    border-width: 0px;
    font-family: CircularBook;
    font-size: 16px;

    p {
        font-size: 14px;
        color: #a6a6a6;
    }

    .ant-card-body {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }
`

const BottomContainerSCP = styled.div`
    display: flex;
    align-content: space-between;
    height: 80px;
`

const LeftSideContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
    height: 100%;
    width: 90%;
    padding-right: 10px;

    p, b {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
`

const ExplicitIconAndArtistNameContainerSCP = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    width: 100%;
    height: 35px;

    div {
        width: 10%;
    }

    p {
        width: 90%;
    }
`
