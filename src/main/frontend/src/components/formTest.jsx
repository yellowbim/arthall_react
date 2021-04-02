import React, {Component} from 'react';
import axios from "axios";
import './test.css';


class FormTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mbrId:'',
            mbrPwd:''

        }
        this.handleFormSubmit = this.handleFormSubmit.bind(this)
        this.handleFileChange = this.handleFileChange.bind(this)
        this.handleValueChange = this.handleValueChange.bind(this)
        this.addCustomer = this.addCustomer.bind(this)
    }

    handleFormSubmit(e) {
        e.preventDefault()
        this.addCustomer()
            .then((response) => {
                console.log(response.data);
            })
    }

    handleFileChange(e) {
        this.setState({
            mbrId: e.target.files[0],
            mbrPwd: e.target.value
        });
    }

    handleValueChange(e) {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    // 어차피 여기서 다 넣어주니까 굳이 따로 함수를 만들어 놓을 필요는 없을듯? 하지만 짧게 만들어놓는다
    addCustomer(){
        const url = 'http://localhost:8083/mbr/login';
        const formData = new FormData();
        formData.append('mbrId', this.state.mbrId)          // 현재 state에 있는 mbrId를 가져옴
        formData.append('mbrPwd', this.state.mbrPwd)        // 현재 state에 있는 mbrPwd를 가져옴

        const config = {
            // headers: {
            //     'content-type': 'multipart/form-data'
            // }
        }
        return axios.post(url, formData, config)
    }


    render() {
        console.log('List  State',this.state);
        return (
            <form onSubmit={this.handleFormSubmit}>
                <h1>고객 추가</h1>
                이름: <input type="text" name="mbrId" value={this.state.mbrId} onChange={this.handleValueChange} /><br/>
                비밀번호: <input type="text" name="mbrPwd" value={this.state.mbrPwd} onChange={this.handleValueChange} /><br/>
                <button type="submit">추가하기</button>
            </form>
        );
    }
}

export default FormTest;