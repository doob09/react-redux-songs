import React,{Component}    from 'react';
// connect componenent used to create connection with Provider  
import {connect} from 'react-redux';


class SongList extends Component {
   
    renderList(){
     
        return this.props.songs.map(song =>{
            return (
                <div className ="item" key={song.title}>
                    <div className="right floated content">
                        <button className="ui button primary">Select</button>
                        
                    </div>

                    <div className="content">{song.title}</div>
                </div>
            );
        });
    }
    


    render(){
       // props will include dispatch function from store  
    //   console.log(this.props)
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
const mapStateToProps = state =>{
    // console.log(state); this will return objecs inclue : selectedSong, sngs
    // this.props = state
    return {songs: state.songs};
}   

// connect() return a function , the second () invokes the fuction that got return
export default connect(mapStateToProps)(SongList);