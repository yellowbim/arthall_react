import React, {Component} from "react";
import $ from 'jquery';

export default class jquery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            val:''
        }


    }
    render() {
        const valChk = (e) => {
            alert($('.target').val());
        }


        return(
            <>
                <div>jquery 테스트</div>
                <input className="target" type="text" style={{backgroundColor:"black", color:"white"}}/>
                <button onClick={valChk}>값 확인하기</button>
            </>
        )
    }
}
