import React, {useState} from 'react';
import axios from 'axios';

function ImgUpload() {
    const [img, setImage] = useState(null);
    const [file, setFile] = useState(null);


    const onChange1 = (e) => {
        setFile(e.target.files[0]);
    }

    const onClick = async () => {
        console.log('이미지 이름',file);
        const formData = new FormData();
        formData.append('file', file);
        // 서버의 upload API 호출
        console.log('폼 내용',formData.entries());
        const config = {
            headers: {
                "username" : "user_id",
                "password" : "user_pw"
            }
        }

        axios.post("http://localhost:8083/main/fileUpload", formData).then((res) => {
            console.log(res);
        });
    }




    return (
        <>
            {/*<div className="App">*/}

            {/*    <input type="file" onChange={onChange}/>*/}
            {/*    */}
            {/*</div>*/}
            <form encType="multipart/form-data" onSubmit={onClick}>
                <input multiple="multiple" type="file" name="filename" onChange={onChange1} formEncType="multipart/form-data"/>
                <button onClick={() => onClick}>제출</button>
            </form>
        </>
    );
}

export default ImgUpload;