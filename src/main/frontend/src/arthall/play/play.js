import React, {Component} from "react";
import './../common/CSS/perf-exhi_info.css';

export default class Play extends Component{
    constructor(props) {
        super(props);
        this.state ={
            search:'',
            totalCnt:0,
            page:1,         // 페이지
            rowSize:12,     // 보여줄 총 개수
            playList:[]
        }
    }

    componentDidMount() {
        this.axiosSearchPlay('')
    }

    // data : 구분자 : ,    타입 : String
    axiosSearchPlay(data) {
        const formData = new FormData;
        const test = {name1:"이정준", name2:"김용선"};

        console.log(Object.keys(test));

        // for (let i = 0; i < data.length; i++){
        //     formData.append()
        // }


        // formData
        // axios.post("http://localhost:8083/play/playList", formData).then((res) => {
        //     console.log('검색 공연 목록',res.data);
        //     this.setState({
        //         playList:res.data,
        //         totalCnt:res.data[0].totalCnt
        //     })
        // })
    }


    render() {
        // 키보드 클릭 시 값 변경 이벤트 & 엔터 클릭 시 검색 이벤트
        const changeSearch = (e) => {

            // 엔터 입력 시 검색
            if (e.key === 'Enter'){
                this.axiosSearchPlay(e.target.value)
                // 부모 이벤트 발생 중지(페이지 새로고침)
                e.preventDefault()
            }

            // 값이 변했을때 state에 변한 값을 넣어줌
            this.setState({
                search:e.target.value
            })
        }


        // 검색 이벤트
        const clickSearchPlay = (e) => {
            if (this.state.search == ''){
                alert('공연명을 입력해주세요.');
                return;
            }
            this.axiosSearchPlay(this.state.search)
            // 부모 이벤트 발생 중지(페이지 새로고침)
            e.preventDefault()
        }

        const moveTop = (e) => {
            e.preventDefault()
            window.scrollTo({
                behavior:'smooth',
                top:0
            })
        }


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
                                <form className="result_search">
                                    <input type="search" name="search" className="t_box" placeholder=" 공연명을 입력해주세요" value={this.state.search} onChange={changeSearch} onKeyPress={changeSearch}/>
                                        <button type="button" className="submit" onClick={clickSearchPlay}><i className="fa fa-search"/></button>
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
                                                                <a href="#" className="ticketingBtn" >예매하기</a>
                                                                <a href="performance01.html">상세정보</a>
                                                            </div>
                                                        </div>
                                                    </li>
                                            )
                                        }
                                    </ul>
                                </div>
                                <div className="pagination">
                                    {/*<Paging totalPage={this.state.totalCnt}/>*/}




                                    {/*<a href="#" className="firstpage pbtn"><img src={require('./../../img/btn_firstpage.png')} alt="첫 페이지로 이동"/></a>*/}
                                    {/*<a href="#"><span className="pagenum currentpage">1</span></a>*/}
                                    {/*<a href="#"><span className="pagenum">2</span></a>*/}
                                    {/*<a href="#"><span className="pagenum">3</span></a>*/}
                                    {/*<a href="#"><span className="pagenum">4</span></a>*/}
                                    {/*<a href="#"><span className="pagenum">5</span></a>*/}
                                    {/*<a href="#" className="lastpage pbtn"><img src={require('./../../img/btn_lastpage.png')} alt="마지막 페이지로 이동"/></a>*/}
                                </div>
                            </div>
                        </main>
                        {/*<a href="" className="topBtn" onClick={moveTop}>TOP</a>*/}
                    </div>
                </div>
            </>
        )
    }
}