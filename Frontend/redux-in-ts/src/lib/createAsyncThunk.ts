import { Dispatch } from 'redux';
import { AsyncActionCreatorBuilder } from 'typesafe-actions';

type AnyAsyncActionCreator = AsyncActionCreatorBuilder<any, any, any>

export default function createAsyncThunk<
    A extends AnyAsyncActionCreator, 
    F extends (...params: any[]) => Promise<any> 
> ( asyncActionCreator: A, promiseCreator: F ) {
    type Params = Parameters<F>
    return (...param: Params) => async (dispatch: Dispatch) => {
        const { request, success, failure } = asyncActionCreator;
        dispatch( request(undefined) );
        try {
            const data = await promiseCreator(...param);
            dispatch( success(data) )
        } catch (error) {
            dispatch( failure(error) )
        }
    }
}