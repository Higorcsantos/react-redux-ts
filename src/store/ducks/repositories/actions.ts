import {action} from 'typesafe-actions';
import {RepositoriesTypes,Repository} from './types';

export const loadRequest = () => action(RepositoriesTypes.LOAD_REQUEST);

export const loadFailure = () => action(RepositoriesTypes.LOAD_FAILURE);

export const loadSucces = (data: Repository) => (RepositoriesTypes.LOAD_SUCCESS, {data});