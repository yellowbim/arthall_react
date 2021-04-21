import React, {Component} from "react";
import './../CSS/perf-exhi_info.css';
import axios from 'axios';

export default class Play extends Component{
    constructor(props) {
        super(props);
        this.state ={
            playList:[]
        }
    }
    componentDidMount() {
        axios.post("http://localhost:8083/play/playList").then((res) => {
            console.log('공연 목록',res.data);
            this.setState({
                playList:res.data
            })
        })
    }


    render() {
        return(
            <>
                <div id="wrap">
                    <div className="sub__tit">
                        <h2>공연정보</h2>
                    </div>
                    <div className="sub__container cf">
                        <aside className="container__subClass">
                            <h3 className="subClass__tit"><i className="fas fa-guitar"></i><br/>공연&middot;전시&middot;행사</h3>
                            <nav className="subClass__list">
                                <ul>
                                    <li><a href="./calendar.html">캘린더</a></li>
                                    <li><a href="<%=request.getContextPath()%>/play/performList.do">공연정보</a></li>
                                    <li><a href="<%=request.getContextPath()%>/play/exhibitList.do">전시정보</a></li>
                                    <li><a href="./event_info.html">행사정보</a></li>
                                </ul>
                            </nav>
                        </aside>
                        <main id="main">
                            <div className="main__content">
                                <form className="result_search" action="action_page.php">
                                    <input type="search" name="search" className="t_box" placeholder=" 공연명을 입력해주세요"/>
                                        <button type="submit" className="submit"><i className="fa fa-search"/></button>
                                </form>
                                <div className="perf_list">
                                    <div className="order_list">
                                        <a href="#">최신순</a>
                                        <a href="#">인기순</a>
                                    </div>
                                    <div className="perf_list_count">
                                        <span>총 <strong>0</strong>건</span>
                                    </div>
                                </div>
                                <div className="perf_view">
                                    <ul>
                                        {
                                            this.state.playList.map(
                                                play =>
                                                    <li>
                                                        <div className="perf_view_wrap">
                                                            {/*<img src={require('./../../img/per/'+play.fileName)} alt="perf_img"/>*/}
                                                            <div className="perf_view_wrap_des">
                                                                <input type="hidden" value="${play.no}"/>
                                                                <h3>{play.playName}</h3>
                                                                <h4>장소 : {play.hallName}</h4>
                                                                <span>
                                                                    {play.frDttm} ~ {play.toDttm}
                                                                </span>
                                                                <span>{play.subTitle}</span>
                                                            </div>
                                                            <div className="perf_view_wrap_mh">
                                                                <a href="#" className="ticketingBtn" onClick="">예매하기</a>
                                                                <a href="performance01.html">상세정보</a>
                                                            </div>
                                                        </div>
                                                    </li>
                                            )
                                        }
                                    </ul>
                                </div>
                                <div className="pagination">
                                    <a href="#" className="firstpage pbtn"><img src={require('./../../img/btn_firstpage.png')} alt="첫 페이지로 이동"/></a>
                                    <a href="#"><span className="pagenum currentpage">1</span></a>
                                    <a href="#"><span className="pagenum">2</span></a>
                                    <a href="#"><span className="pagenum">3</span></a>
                                    <a href="#"><span className="pagenum">4</span></a>
                                    <a href="#"><span className="pagenum">5</span></a>
                                    <a href="#" className="lastpage pbtn"><img src={require('./../../img/btn_lastpage.png')} alt="마지막 페이지로 이동"/></a>
                                </div>
                            </div>
                        </main>
                        <a href="" className="topBtn">TOP</a>
                    </div>
                </div>
            </>
        )
    }
}