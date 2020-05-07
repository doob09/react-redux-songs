// Actions Creators

// named export to  export functions from single file
export const selectSong = ()=>{
    // return object action: {type, payload}
    return {
        type: 'SELECTED_SONG',
        payload: song,
    }
};