import React, {Component} from 'react';
import BoardService from '../service/BoardService';
import './test.css';
import GoBack from "./GoBack";

class ListBoardComponent extends Component {
    // 1
    constructor(props){
        super(props)

        this.state = {
            boards:[]
        }
    }

    componentDidMount() {
        BoardService.getTests(this.props).then((res) => {
            console.log('props',this.props)
            this.setState({boards: res.data})
        });
    }

    goDetailContents = (no) => {
        console.log('no',no);
        this.props.history.push('/detailContents?no='+no);
    }




    render() {
        console.log('state',this.state);
        return (
            <div>
                <h2 className="text-center">Boards List</h2>
                <div className ="row">
                    <table className="table table-striped table-bordered" border={1}>
                        <thead className="thead">
                            <tr className="td10">
                                <th>글 번호</th>
                                <th>타이틀 </th>
                                <th>작성자 </th>
                                <th>작성일 </th>
                                <th>갱신일 </th>
                                <th>좋아요수</th>
                                <th>조회수</th>
                                <th>상세보기</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            this.state.boards.map(
                                board =>
                                    <tr className="td10" key = {board.no}>
                                        <td> {board.no} </td>
                                        <td > {board.title} </td>
                                        <td> {board.writer} </td>
                                        <td> {board.ins_date} </td>
                                        <td> {board.upd_date} </td>
                                        <td> {board.likes} </td>
                                        <td> {board.counts} </td>
                                        {/*<td> <Route path="/detailContents:no" component={board.no}></Route> 상세보기</td>*/}
                                        <td><button className="test" onClick={() => this.goDetailContents(board.no)}>상세보기</button></td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
                <GoBack/>
            </div>
        );
    }
}

export default ListBoardComponent;