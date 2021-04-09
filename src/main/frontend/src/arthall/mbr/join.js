import {useEffect, useState} from "react";
import './../CSS/join.css';
import axios from "axios";

// 우편번호 modal
import ZipCode from './../common/ZipCode';


export default function Join() {

    let JoinId = null;

    // 우편번호 찾기 모달 기본 설정
    const [Modal, setModal] = useState(false);

    const [inputs, setInputs] = useState({
        // 입력받은 값
        id:'',
        password:'',
        passwordConfirm:'',
        name:'',
        sex:'',
        birth:'',
        cellNo:'',
        addr:'',
        addrDetail:'',
        email:'',
        emailConfirm:'',
        maketing1:'',
        maketing2:'',
        member:[]
    });

    useEffect(() => { // useEffect 적용!
        console.log('렌더링이 완료되었습니다!');
        console.log('code는 ',inputs.code);
        console.log({
            id
        });
    });

    const {id, password} = inputs;

    const onChange = (e) => {
        const {value,name} = e.target;      // 태그의 속성을 가져외서 value, tag_name을 담아줌
        setInputs({
            ...inputs,                      // 이게 정확히 무슨 의미일까
            [name]:value
        })
    }

    // 중복 확인 처리 함수
    const onClick = (e) => {
        axios.get("http://localhost:8083/mbr/valChk",{params:{mbrId:id}}).then((res) => {
            console.log('응답 결과',res.data);
            // 중복 확인은 결과를 담을 필요가 없음
            if (res.data == '1111'){
                alert("사용중인 아이디 입니다.\n아이디를 다시 입력해주세요");
                JoinId.focus();
            }
        });
    }

    const openZipCode = () => {
        setModal(true)
    }
    const closeZipCode = () => {
        setModal(false)
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
                                                        <label htmlFor="id"><span>* </span>아이디</label>
                                                        <input type="text" name="id" id="id" placeholder="첫글자는 영문이며 4~12자의 영문 대소문자와 숫자로만 입력해주세요." onChange={onChange} value={id} ref={(ref) => {JoinId=ref}}/>
                                                            <button type={"button"} onClick={onClick}  ><span>중복확인</span></button>
                                                    </li>
                                                    <li>
                                                        <label htmlFor="pw"><span>* </span>비밀번호</label>
                                                        <input type="password" name="pw" id="pw" placeholder="첫글자는 영문이며 4~12자의 영문 대소문자와 숫자로만 입력해주세요."/>
                                                    </li>
                                                    <li>
                                                        <label htmlFor="pw2"><span>* </span>비밀번호확인</label>
                                                        <input type="password" name="pw2" id="pw2" placeholder="비밀번호를 다시 한 번 입력해주세요"/>
                                                    </li>
                                                    <li>
                                                        <label htmlFor="name"><span>* </span>이름</label>
                                                        <input type="text" name="name" id="name" placeholder="이름을 입력해 주세요"/>
                                                    </li>
                                                    <li>
                                                        <label htmlFor="gender"><span>* </span>성별</label>
                                                        <div className="sex">
                                                            <input type="radio" name="sex" id="sex_man" value="1"/><label htmlFor="sex_man">남성</label>
                                                            <input type="radio" name="sex" id="sex_women" value="2"/><label htmlFor="sex_three">여성</label>
                                                            <input type="radio" name="sex" id="sex_three" value="3"/><label htmlFor="sex_three">제 3의성</label>
                                                            <input type="radio" name="sex" id="sex_none" value="4" checked="checked"/><label htmlFor="sex_none">기재원치않음</label>
                                                            <input type="hidden" name="gender" id="gender"/>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <label htmlFor="datepicker"><span>* </span>생년월일</label>
                                                        <input type="text" className="datepicker" id="birth" name="birth" placeholder="년도 / 월 / 일을 입력해주세요 (ex: 19920510)"/>
                                                    </li>
                                                    <li>
                                                        <label htmlFor="tel"><span>* </span>연락처</label>
                                                        <input type="tel" name="tel" id="tel" placeholder="숫자만 입력해주세요"/>
                                                    </li>

                                                    <li className="add_area">
                                                        <label htmlFor="sample4_postcode"><span>* </span>주소</label>
                                                        <input type="text" id="sample4_postcode" name="sample4_postcode" placeholder="우편번호" disabled="disabled"/>
                                                        <input type="button" onClick={openZipCode} value="우편번호 찾기" id="post_btn"/>
                                                        {
                                                            Modal && <ZipCode onClose={closeZipCode}/>
                                                        }
                                                        <input type="text" id="sample4_roadAddress" name="sample4_roadAddress" placeholder="도로명주소" readOnly/>
                                                        <input type="text" id="sample4_jibunAddress" name="sample4_jibunAddress" placeholder="지번주소" readOnly/>
                                                        <input type="text" id="sample4_detailAddress" name="sample4_detailAddress" placeholder="상세주소"/>
                                                    </li>

                                                    <li className="email_area">
                                                        <label htmlFor="email"><span>* </span>이메일</label>
                                                        <input type="text" name="email_id" id="email_id"/>
                                                            <span>@</span>
                                                            <input type="text" name="email_add" id="email_add"/>
                                                                <select className="email_sel" name="email_sel" id="email_sel">
                                                                    <option value="" selected>직접입력</option>
                                                                    <option value="naver.com">네이버</option>
                                                                    <option value="hanmail.com">다음</option>
                                                                    <option value="gmail.com">구글</option>
                                                                </select>
                                                                <button id="mailFuncSend" onClick="return sendMail();">인증번호 발송</button>
                                                    </li>
                                                    <li className="email_conf_area">
                                                        <label htmlFor="emailConfirm"><span>* </span>이메일 인증 확인</label>
                                                        <input type="text" name="emailConfirm" id="emailConfirm" placeholder="인증번호를 입력하신 후 확인을 눌러주세요"/>
                                                        <button id="mailFuncConf" onClick="return email_Conf();">인증번호 확인</button>
                                                    </li>

                                                    <li className="chk-1 chk_area">
                                                        <input type="checkbox" name="chk1" id="chk1"/>
                                                            <label htmlFor="chk1">충무아트센터에서 제공하는 정보를 메일로 받아보시겠습니까? (선택)</label>
                                                            <input type="hidden" name="ad_email" id="ad_email"/>
                                                    </li>
                                                    <li className="chk-2 chk_area">
                                                        <input type="checkbox" name="chk2" id="chk2"/>
                                                            <label htmlFor="chk2">충무아트센터에서 제공하는 정보를 SMS로 받아보시겠습니까? (선택)</label>
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