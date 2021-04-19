import React, {Component} from 'react';
import axios from "axios";


export default class ImgTest extends Component {
    constructor(porps) {
        super(porps);
        this.state = {
            file:"",
            fileList:[]
        }
    }

    componentDidMount() {
        axios.post("http://localhost:8083/main/fileList").then((res) => {
            console.log(res);
            this.setState({fileList:res.data})
        });
    }

    bigImg = (e) => {
        console.log(e.target.src)
        // window.open()
    }

    render(){
        const onChange1 = (e) => {
            this.state.file = e.target.files[0]
        }

        const onClick = () => {
            const formData = new FormData();
            formData.append('file', this.state.file);
            // 서버의 upload API 호출
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

        return(
            <>
                {/*<div className="App">*/}

                {/*    <input type="file" onChange={onChange}/>*/}
                {/*    */}
                {/*</div>*/}
                <form encType="multipart/form-data">
                    <input multiple="multiple" type="file" name="filename" onChange={onChange1} formEncType="multipart/form-data"/>
                    <button onClick={onClick}>제출</button>
                </form>

                <div>
                    <h2 className="text-center">Boards List</h2>
                    <div className ="row">
                        <table className="table table-striped table-bordered" border={1}>
                            <thead className="thead">
                            <tr className="td10">
                                <th>순서</th>
                                <th>파일경로</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                this.state.fileList.map(
                                    fileList =>
                                        <tr key = {fileList.seq}>
                                            <td> {fileList.seq} </td>
                                            <td > {fileList.fileName} </td>
                                            <td> <img src={require('./../imgUpload/' + fileList.fileName)} style={{width:"80px", height:"80px"}}/></td>
                                        </tr>
                                )
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </>
        )
    }
}