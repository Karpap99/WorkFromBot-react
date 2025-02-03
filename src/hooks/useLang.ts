import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { userSliceActions } from "../store/slices/user";


export const useLang = () => {
    const dispatch = useDispatch();

    const setLang = useCallback(
        (x: number) => {
            dispatch(userSliceActions.setLang(x));
        },
        [dispatch],
    );


    return { setLang }
}