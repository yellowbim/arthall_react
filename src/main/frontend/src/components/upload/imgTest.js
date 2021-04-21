import React, {Component} from 'react';
import axios from "axios";
import Paging from './../page/paging';

export default class ImgTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            file:"",
            totalCnt:0,
            rowSize:3,      // 3이 default
            page:0,         // 1페이지가 default
            fileList:[]
        }
    }

    componentDidMount() {
        this.getImgList()
    }

    getImgList(){
        // state에 있는 값을 가지고 값 전송
        const formData = new FormData();
        formData.append("page",this.state.page)
        formData.append("rowSize",this.state.rowSize)

        // formData값 로그
        for(let pair of formData.entries()) {
            console.log(pair[0]+ ', '+ pair[1]);
        }
        // 파일 전체 개수
        axios.post("http://localhost:8083/main/fileCnt",formData).then((res) => {
            console.log('파일 전체 개수',res.data)
            this.setState({totalCnt:res.data})
        });
        // 파일 목록
        axios.post("http://localhost:8083/main/fileList",formData).then((res) => {
            console.log('처음 조회 결과값',res);
            this.setState({fileList:res.data})
        });
    }

    render(){


        // 파일  첨부
        const onChange1 = (e) => {
            this.state.file = e.target.files[0]
        }

        // 파일 저장
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

            axios.post("http://localhost:8083/main/fileUpload", formData).then( (res) => {
                console.log(res);
            });
        }

        // rowSize 값 가져오기
        const getRowSize = (data) => {
            // setState는 비동기 함수여서 랜더링이 되기 전에 불러오면 기존 정보를 가져옴.
            // ==> 콜백 함수를 실행
            this.setState({rowSize:data}, () => {return this.getImgList()});
        }

        // page 값 가져오기
        const getPage = (data) => {
            console.log('페이지 값 : ',data);
            this.setState({page:(data*this.state.rowSize)},() =>{return this.getImgList()});

        }

        // 이미지, 동영상 파일 구분
        function imgVideo(fileName){
            const gubun = fileName.substr(fileName.indexOf('.')+1);
            if (gubun == "mp4"){
                return <video src={require('./../imgUpload/'+fileName)} style={{width:"80px", height:"80px"}}/>;
            } else {
                return <img src={require('./../imgUpload/'+fileName)} style={{width:"80px", height:"80px"}} />;
            }
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
                        <table className="table table-striped table-bordered" border={1} style={{width:"100%"}}>
                            <thead className="thead">
                            <tr className="td10">
                                <th>순서</th>
                                <th>파일경로</th>
                                <th>이미지 미리보기</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                this.state.fileList.map(
                                    fileList =>
                                        <tr key = {fileList.seq}>
                                            <td> {fileList.seq} </td>
                                            <td > {fileList.fileName} </td>
                                            <td> {imgVideo(fileList.fileName)}</td>
                                        </tr>
                                )
                            }
                            </tbody>
                        </table>
                        <Paging totalCnt={this.state.totalCnt} page={this.state.page} rowSize={this.state.rowSize} getRowSize={getRowSize} getPage={getPage}/>
                    </div>
                </div>
            </>
        )
    }
}