import React,{Component}    from 'react';
// connect componenent used to create connection with Provider  
import {connect} from 'react-redux';
import {selectSong} from '../actions';

class SongList extends Component {
   
    renderList(){
         // this.props === {songs: state.songs}
        return this.props.songs.map(song=>{
            return (
                <div className ="item" key={song.title}>
                    <div className="right floated content">
                        <button className="ui button primary" 
                        onClick = {()=>this.props.selectSong(song)}>Select</button>
                    </div>

                    <div className="content">{song.title}</div>
                </div>
            );
        });
    }

    render(){
       // props will include dispatch function from store  
     
        return (
            <div className=" ui divided list">
               {this.renderList()}
            </div>
        );
    }
}
// this is helper function to use for connect
// take all the data which is state from redux store 
// get the state from reducer
// function can be named anything
// it will pass state to props so that child component can render the state
const mapStateToProps = (state )=>{
    console.log(state); 
    //this will return objecs  {selectedSong, songs} from reducers
    // this.props === state
    return {songs: state.songs};
}   

// connect() return a function , the second () invokes the fuction that got return
//pass state, action from high order component:connect -> to the component need
//connect component call store.dispatch(selectSong) to the reducers
export default connect(mapStateToProps,{selectSong})(SongList);