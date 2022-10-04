interface IDefaultReturnObject {
    href: string | null
    limit: number
    next: string | null
    offset: number
    previous: string | null
    total: number
}

interface IImagesReturnObject {
    height: number
    url: string
    with: number
}

export interface IAlbumReturnObject {
    album_type: string
    artists: {
        external_urls: {
            spotify: string
        }
        href: string
        id: string
        name: string
        uri: string
    }[]
    available_markets: string[]
    external_urls: {
        spotify: string
    }
    href: string
    id: string
    images: IImagesReturnObject[]
    name: string
    release_date: string
    release_date_precision: string
    total_tracks: number
    type: string
    uri: string
}

interface IAlbumsReturnObject extends IDefaultReturnObject {
    items: IAlbumReturnObject[]
}

export interface IArtistReturnObject {
    external_urls: {
        spotify: string
    }
    followers: {
        href: string,
        total: number
    }
    genres: string[]
    href: string
    id: string
    images: IImagesReturnObject[]
    name: string
    popularity: number
    type: string
    uri: string
}

interface IArtistsReturnObject extends IDefaultReturnObject {
    items: IArtistReturnObject[]
}

export interface IPlaylistReturnObject {
    collaborative: boolean
    description: string
    external_urls: {
        spotify: string
    }
    href: string
    id: string
    images: IImagesReturnObject[]
    name: string
    owner: {
        display_name: string,
        external_urls: {
            spotify: string
        },
        href: string,
        id: string,
        type: string,
        uri: string
    }
    primary_color: string
    public: boolean
    snapshot_id: string
    tracks: {
        href: string,
        total: number
    }
    type: string
    uri: string
}

interface IPlaylistsReturnObject extends IDefaultReturnObject {
    items: IPlaylistReturnObject[]
}

export interface ITracksReturnObject extends IDefaultReturnObject {
    album: IAlbumReturnObject
    artists: IArtistReturnObject[]
    available_markets: string[]
    disc_number: number
    duration_ms: number
    explicit: boolean
    external_ids: {
        isrc: string
    }
    external_urls: {
        spotify: string
    }
    href: string
    id: string
    is_local: boolean
    name: string
    popularity: number
    preview_url: string
    track_number: number
    type: string
    uri: string
}

export default interface ISearchResponseDTO {
    albums: IAlbumsReturnObject[]
    artists: IArtistsReturnObject[]
    playlists: IPlaylistsReturnObject[]
    tracks: ITracksReturnObject[]
}