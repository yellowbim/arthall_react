import './../CSS/login.css';
import './../CSS/reset.css';


export default function login(){
    return(
        <div id="wrap">
            <a href="/index.do" id="gomain">본문바로가기</a>
            <div className="sub__tit">
                <h2>로그인 &#183; 회원가입</h2>
            </div>
            <div className="sub__container cf">
                <main id="main">
                    <div className="main__content">
                        <section className="content__innerConts">
                            <h3 className="innerConts__tit">충무아트센터<br/> 멤버십 로그인</h3>
                            <p>로그인으로 충무아트센터의 멤버십혜택을 이용하실 수 있습니다.</p>
                            <div className="innerConts__cont">
                                <div className="cont__login">
                                    <form method="post" action="/member/login.do" name="loginForm" id="loginForm">
                                        <fieldset>
                                            <legend>로그인</legend>
                                            <div className="form__loginInfo">
                                                <ul className="loginInfo__inputs">
                                                    <li className="cf">
                                                        <label htmlFor="id">
                                                            <span className="hidden">이름</span>
                                                            <i className="fas fa-user"></i>
                                                        </label>
                                                        <input type="text" id="id" name="id" value="kdy7710"  placeholder="아이디 / ID"/>
                                                    </li>
                                                    <li className="cf">
                                                        <label htmlFor="pw">
                                                            <i className="fas fa-unlock"></i>
                                                        </label>
                                                        <input type="password" id="pw" name="pw" value="eodud123" placeholder="비밀번호 / Password"/>
                                                    </li>
                                                </ul>
                                            </div>
                                            <p className="form__findBtns">
                                                <a href="/member/findIDForm.do">아이디 찾기</a>/
                                                <a href="/member/findPasswordForm.do">비밀번호
                                                    찾기</a>
                                            </p>
                                            <button type="button" className="form__submit">로그인</button>
                                                <a href="/member/joinForm.do" className="form__joinBtn">회원가입</a>
                                        </fieldset>
                                    </form>
                                </div>
                            </div>
                        </section>
                    </div>
                </main>
                <a href="javascript:;" className="topBtn">TOP</a>
            </div>
        </div>
    )
}