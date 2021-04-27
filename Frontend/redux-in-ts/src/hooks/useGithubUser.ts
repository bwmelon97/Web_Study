import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../modules";
import { getGithubUserThunk } from "../modules/githubUser";

const useGithubUser = () => {
    const githubUser = useSelector( (state: RootState) => state.githubUser.githubUser )
    
    const dispatch = useDispatch();
    const getGithubUser = useCallback(
        (username: string) => dispatch(getGithubUserThunk(username)), 
    [dispatch])

    return { githubUser, getGithubUser }
}

export default useGithubUser