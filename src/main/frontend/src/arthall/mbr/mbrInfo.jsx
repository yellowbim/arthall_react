import axios from "axios";

export function mbrInfo(id,pwd){
    const user = {
        "userId": id,
        "password":pwd
    };

    return dispatch => {
        dispatch(requestLogin());
        return axios.post('http://localhost:8083/mbr/login',user)
            .then(res => {
                dispatch(receiveLogin(res.data));
            });
    }
}