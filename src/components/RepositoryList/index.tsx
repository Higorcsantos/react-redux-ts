import { type } from 'node:os';
import React,{Component} from 'react';
import {connect} from 'react-redux'
import {ApplicationState} from '../../store';

interface StateProps{

};
interface DispatchProps{

};
interface OwnProps{

};

type props = StateProps & DispatchProps & OwnProps
 
class RepositoryList extends Component{
    render(){
        return(
            <div/>
        )
    }
}
const mapStateToProps = (state:ApplicationState) => ({
    repositories: state.repositories.data
})
export default connect(mapStateToProps)(RepositoryList);