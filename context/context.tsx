import { createContext,  useState } from 'react';
import { ARTIST_TOKEN, TRACKS_TOKEN } from '../utils/constant';

type ResponseType = {
    artists: {
        items: [
            {
                id: string;
                images: [];
            }
        ]
    },
    tracks: [
        {
            name: string
        }
    ]
}

type ArtistType = {
    items: [
        {
            id: string;
            images: [];
        }
    ]
}

type ImageTypes = {
    url: string;
}

type TracksType = {
    tracks: [
        {
            name: string
        }
    ]
}
type ContextProps = {
    artistData: ArtistType
    artistId: string
    //artistProfile: ImageTypes
    topTracks: TracksType
    inputValue: string
    setInputValue?: (input: string) => void
    searchFunction: any
};



const GlobalContext = createContext<ContextProps>({
    artistData: {
        items: [
            {
                id: '',
                images: []
            }
        ]
    },
    artistId: '',
   // artistProfile: '',
    topTracks:{
        tracks: [
            {
                name: ''
            }
        ]
    },
    inputValue: '',
    setInputValue: () => alert(''),
    searchFunction: () => alert('')
});

type SongProviderProps = {
    children: React.ReactNode;
}

const options = {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${ARTIST_TOKEN}`
    }
}
const options2 = {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${TRACKS_TOKEN}`
    }
}

export async function fetchData(endpoint: string, options: {}): Promise<ResponseType | undefined> {
    try {
        const res = await fetch(endpoint, options);
        const response = await res.json();
        return response;
    }
    catch (err) {
        console.log(err);
    }
}

export const SongProvider: React.FC<SongProviderProps> = ({
    children,

}) => {
    // states

    const [inputValue, setInputValue] = useState('');
    const [artistId, setArtistId] = useState('');
    const [artistProfile, setArtistProfile] = useState<ImageTypes[]>([{
        url: ''
    }]);

    const [artistData, setArtistData] = useState<ArtistType>({
        items: [
            {
                id: '',
                images: []
            }
        ]
    });

    const [topTracks, setTopTracks] = useState<TracksType>({
        tracks: [
            {
                name: ''
            }
        ]
    })


    async function submitSearch(inputText: string, event?: React.FormEvent<HTMLElement>): Promise<void> {
        console.log(inputText);
        event?.preventDefault();

        const artistEndpoint = `https://api.spotify.com/v1/search?q=${inputText}&type=artist&limit=1`;
        const fetchedArtist = await fetchData(artistEndpoint, options);
        fetchedArtist && setArtistData(fetchedArtist?.artists);
        fetchedArtist && setArtistId(fetchedArtist?.artists?.items?.[0]?.id);
        fetchedArtist && setArtistProfile(fetchedArtist?.artists?.items?.[0]?.images);
    }

    async function fetchTracks() {
        console.log(artistId, 'ID');
        const albumsEndpoint = `https://api.spotify.com/v1/artists/${artistId}/top-tracks?market=ES`;

        const tracksData = await fetchData(albumsEndpoint, options2);
        console.log(tracksData, 'tracks');
        tracksData && setTopTracks(tracksData);
    }

    function searchFunction() {
        submitSearch(inputValue)
        if (artistId) {
            fetchTracks()
        }
    }

    console.log(artistProfile, 'allllllll')
    const contextValues = {
        artistData,
        artistId,
       // artistProfile,
        topTracks,
        setInputValue,
        inputValue,
        searchFunction,
    };

    return (
        <GlobalContext.Provider value={contextValues}>
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalContext;