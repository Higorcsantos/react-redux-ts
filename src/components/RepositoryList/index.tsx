import { type } from 'node:os';
import React,{Component} from 'react';
import {connect} from 'react-redux'
import { bindActionCreators,Dispatch } from 'redux';
import {ApplicationState} from '../../store';
import {Repository} from '../../store/ducks/repositories/types'
import * as RepositoriesActions from '../../store/ducks/repositories/actions'
//vem do mapStateToProps
interface StateProps{
    repositories: Repository[],
};
//vem do dispatchToProps
interface DispatchProps{
    
};

//vem de algum componente pai
interface OwnProps{

};

type Props = StateProps & DispatchProps & OwnProps
 
class RepositoryList extends Component<Props>{
    render(){
        const {repositories} = this.props
        return(
            <ul>
                {repositories.map(
                    repository => repository.name
                )}
            </ul>
        )
    }
}
const mapStateToProps = (state:ApplicationState) => ({
    repositories: state.repositories.data
});
const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(RepositoriesActions,dispatch);
export default connect(mapStateToProps)(RepositoryList);