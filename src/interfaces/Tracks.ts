export interface Tracks {
    album:{
        name: string,
        release_date: string,
        type: string
        images:{
            height: number,
            url: string,
            width: number,
        }[]
    }
    artists:{
        href: string,
        id: string,
        name: string,
        type: string,
        url: string,
    }[]
    name: string,
    id: string,
    popularity: number,
    url: string
}