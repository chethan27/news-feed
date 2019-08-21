import {FETCH_NEWS} from "./types";
import axios from 'axios';

export const fetchNews = () => async dispatch => {
        await axios
        .get("https://api.myjson.com/bins/10ijyt")
        .then(res => dispatch({
            type : FETCH_NEWS,
            payload : res
        })      
        )
        .catch(e => console.log(e));
    }

