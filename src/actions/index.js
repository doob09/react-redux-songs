// Actions Creators
// named export to  export functions from single file
export const SelectSong = (song)=>{
    // return an action
    return {
        type: "SONG_SELECTED",
        payload: song
    };
}