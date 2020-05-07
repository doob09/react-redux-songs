import {combineReducers} from 'redux';

const songsReducer = ()=>{
// static state just for simple example
// array of object
    return [
        {title: 'song 1', duration: '2:30'},
        {title: 'song 2', duration: '3:10'},
        {title: 'song 3', duration: '4:05'},
        {title: 'song 4', duration: '2:05'},
    ];
};

const selectedSongReducer = (selectedSong = null, action)=>{
    if(action.type === 'SELECTED_SONG'){
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
   songs: songsReducer,
   selectedSong: selectedSongReducer
});