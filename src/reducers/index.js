import {combineReducers} from 'redux';

const songsReducers = ()=>{
    return [
            {title: "No Scrubs"  , duration: "4:05"},
            {title: "Mara"  , duration: "2:05"},
            {title: "All Star"  , duration: "3:05"},
            {title: "I want"  , duration: "1:05"},
        ]
    ;
};

const selectedSongReducers = (selectedSong = null, action)=>{
    if(action === 'SONG_SELECTED'){
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers ({
    songs: songsReducers,
    selectedSong:selectedSongReducers
});