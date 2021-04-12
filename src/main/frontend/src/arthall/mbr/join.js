import {useEffect, useState} from "react";
import './../CSS/join.css';
import axios from "axios";

// 우편번호 modal
import ZipCode from './../common/ZipCode';


export default function Join() {

    let JoinId, JoinPwd, ConfirmPwd, CellNo, Birth, EmailId, EmailAdd  = null;

    // 우편번호 찾기 모달 기본 설정
    const [Modal, setModal] = useState(false);

    const [inputs, setInputs] = useState({
        // 입력받은 값
        id:'',
        pwd:'',
        cfPwd:'',
        birth:'',
        cellNo:'',
        sex:'1',
        addr:'',
        addrDetail:'',
        emailId:'',
        emailAdd:'',
        emailSel:'',
        email:'',
        emailConfirm:'',
        maketing1:'',
        maketing2:'',
        member:[],
        Address:[]
    });

    useEffect(() => { // useEffect 적용!
        console.log('렌더링이 완료되었습니다!');
        console.log("아이디",id,"비밀번호", pwd,"비밀번호 확인", cfPwd, "이메일",emailId, emailAdd );
    });

    // input 박스에 값을 넣어주는 경우만 사용
    const {id, pwd, cfPwd, emailId, emailAdd} = inputs;

    const onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value.trim().replace(/[^a-zA-Z0-9]/gi,'');

        setInputs({
            ...inputs,                      // 이게 정확히 무슨 의미일까
            [name]:value
        })
    }


    // 중복 확인 처리 함수
    const onClick = (e) => {
        if (id == ""){alert("아이디를 입력해주세요"); return false;}
        axios.get("http://localhost:8083/mbr/valChk",{params:{mbrId:id}}).then((res) => {
            // 중복 확인은 결과를 담을 필요가 없음
            if (res.data == '1111'){
                alert("사용중인 아이디 입니다.\n아이디를 다시 입력해주세요");
                JoinId.focus();
            }
        });
    }

    const openZipCode = () => {
        setModal(true)
        document.body.style.overflow="hidden";
    }
    const closeZipCode = (data) => {
        if (data != ""){
            setInputs({
                ...inputs,
                Address:data
            })
        }

        setModal(false)
        document.body.style.overflow="unset";
    }

    // 성별 radio 박스 변경
    const SexChange = (e) => {
        const {name, value} = e.target;
        setInputs({
            ...inputs,
            sex:value
        })
    }

    // 이메일 도메인 변경
    const EmailChange = (e) =>{
        let {value, name} = e.target;
        if (value == ""){inputs.emailAdd = ""}
        setInputs({
            ...inputs,
            emailSel:value,
            emailAdd:value
        })
    }

    // 이메일 인증 발송
    const ComfirmEmail = (e) =>{
        const certiCode = "";
        const email= emailId + '@' + inputs.emailAdd;
        let url = ""
        axios.get("http://localhost:8083/mbr/sendMail",{params:{email:email}}).then((res) => {
            console.log(res.data);
        });
    }

    const ConfirmPhone =(e) =>{
        const certiCode = "";
        console.log("휴대폰번호",inputs.cellNo);
        axios.get("http://localhost:8083/mbr/sendSms",{params:{cellNo:inputs.cellNo}}).then((res) => {
            console.log(res.data);
        });
    }

    return(

        <>
            <div id="wrap">
                <a href="#" id="gomain">본문바로가기</a>
                <div className="sub__tit">
                    <h2>충무아트센터 회원가입</h2>
                </div>
                <div className="sub__container cf">
                    <main id="main">
                        <div className="main__content">
                            <div className="content__innerConts">
                                <h3 className="innerConts__tit">충무아트센터 회원가입</h3>
                                <p>회원가입을 통해 충무아트센터의 멤버십혜택을 누려보세요.</p>
                                <div className="innerConts__cont">
                                    {/*<div className="join_form">*/}
                                    <form className="join_form" id="join_form" name="join_form">
                                        <fieldse>
                                            <legend></legend>
                                            <div className="form_list">
                                                <span className="star">*필수기입항목</span>
                                                <ul>
                                                    <li>
                                                        <label for="id"><span>* </span>아이디</label>
                                                        <input type="text" name="id" id="id" placeholder="첫글자는 영문이며 4~12자의 영문 대소문자와 숫자로만 입력해주세요." onChange={onChange} value={id} ref={(ref) => {JoinId=ref}}/>
                                                            <button type={"button"} onClick={onClick}  ><span>중복확인</span></button>
                                                    </li>
                                                    <li>
                                                        <label for="pw"><span>* </span>비밀번호</label>
                                                        <input type="password" name="pwd" id="pwd" placeholder="첫글자는 영문이며 4~12자의 영문 대소문자와 숫자로만 입력해주세요." onChange={onChange} value={pwd} ref={(ref) => {JoinPwd=ref}}/>
                                                    </li>
                                                    <li>
                                                        <label for="pw2"><span>* </span>비밀번호확인</label>
                                                        <input type="password" name="cfPwd" id="cfPwd" placeholder="비밀번호를 다시 한 번 입력해주세요" onChange={onChange} value={cfPwd} ref={(ref) => {ConfirmPwd=ref}}/>
                                                    </li>
                                                    <li>
                                                        <label for="name"><span>* </span>이름</label>
                                                        <input type="text" name="name" id="name" placeholder="이름을 입력해 주세요"/>
                                                    </li>
                                                    <li>
                                                        <label for="gender"><span>* </span>성별</label>
                                                        <div className="sex">
                                                            <input type="radio"     name="sex_man" id="sex_man"     value="1" onClick={SexChange} checked={inputs.sex== "1" ? true: false}/><label for="sex_man">남성</label>
                                                            <input type="radio"     name="sex_women" id="sex_women"   value="2" onClick={SexChange} checked={inputs.sex== "2" ? true: false}/><label for="sex_women">여성</label>
                                                            <input type="radio"     name="sex_none" id="sex_none"    value="3" onClick={SexChange} checked={inputs.sex== "3" ? true: false}/><label for="sex_none">기재원치않음</label>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <label for="datepicker"><span>* </span>생년월일</label>
                                                        <input type="text" className="datepicker" id="birth" name="birth" placeholder="년도 / 월 / 일을 입력해주세요 (ex: 19920510)" onChange={onChange} value={Birth} ref={(ref) => {Birth=ref}}/>
                                                    </li>
                                                    <li>
                                                        <label for="cellNo"><span>* </span>연락처</label>
                                                        <input type="tel" name="cellNo" id="cellNo" placeholder="숫자만 입력해주세요" onChange={onChange} value={CellNo} ref={(ref) => {CellNo=ref}}/>
                                                        <button type="button" id="mailFuncSend" onClick={ConfirmPhone}>인증번호 발송</button>
                                                    </li>

                                                    <li className="add_area">
                                                        <label for="sample4_postcode"><span>* </span>주소</label>
                                                        <input type="text" id="sample4_postcode" name="sample4_postcode" placeholder="우편번호" value={inputs.Address.ZipCode} disabled="disabled"/>
                                                        <input type="button" onClick={openZipCode} value="우편번호 찾기" id="post_btn"/>
                                                        {
                                                            Modal && <ZipCode onClose={closeZipCode}/>
                                                        }
                                                        <input type="text" id="sample4_roadAddress" name="sample4_roadAddress" placeholder="주소" value={inputs.Address.SelectType == "J" ? inputs.Address.FullAddress : inputs.Address.JiBunAddress} readOnly disabled="disabled"/>
                                                        <input type="text" id="sample4_detailAddress" name="sample4_detailAddress" placeholder="상세주소" />
                                                    </li>

                                                    <li className="email_area">
                                                        <label for="email"><span>* </span>이메일</label>
                                                        <input type="text" name="emailId" id="emailId" onChange={onChange} value={EmailId} ref={(ref) => {EmailId=ref}}/>
                                                            <span>@</span>
                                                            <input type="text" name="emailAdd" id="emailAdd" value={inputs.emailSel=="" ? inputs.emailAdd:inputs.emailSel} onChange={inputs.emailSel == "" ?onChange:null}/>
                                                                <select className="email_sel" name="email_sel" id="email_sel" onChange={EmailChange}>
                                                                    <option value="" selected>직접입력</option>
                                                                    <option value="naver.com">네이버</option>
                                                                    <option value="hanmail.com">다음</option>
                                                                    <option value="gmail.com">구글</option>
                                                                </select>
                                                                <button type="button" id="mailFuncSend" onClick={ComfirmEmail}>인증번호 발송</button>
                                                    </li>
                                                    <li className="email_conf_area">
                                                        <label for="emailConfirm"><span>* </span>이메일 인증 확인</label>
                                                        <input type="text" name="emailConfirm" id="emailConfirm" placeholder="인증번호를 입력하신 후 확인을 눌러주세요"/>
                                                        <button type="button" id="mailFuncConf" onClick="return email_Conf();">인증번호 확인</button>
                                                    </li>

                                                    <li className="chk-1 chk_area">
                                                        <input type="checkbox" name="chk1" id="chk1"/>
                                                            <label for="chk1">충무아트센터에서 제공하는 정보를 메일로 받아보시겠습니까? (선택)</label>
                                                            <input type="hidden" name="ad_email" id="ad_email"/>
                                                    </li>
                                                    <li className="chk-2 chk_area">
                                                        <input type="checkbox" name="chk2" id="chk2"/>
                                                            <label for="chk2">충무아트센터에서 제공하는 정보를 SMS로 받아보시겠습니까? (선택)</label>
                                                            <input type="hidden" name="ad_tel" id="ad_tel"/>
                                                    </li>
                                                </ul>
                                                <div className="btn_yn">
                                                    <button id="joinRegist" ><span>확인</span>
                                                    </button>
                                                    <button id="joinCancle"><span>취소</span></button>
                                                </div>
                                            </div>
                                        </fieldse>
                                    {/*</div>*/}
                                    </form>
                                </div>
                            </div>
                        </div>
                        >
                    </main>
                    <a href="#" className="topBtn">TOP</a>
                </div>
            </div>
        </>
    )
}