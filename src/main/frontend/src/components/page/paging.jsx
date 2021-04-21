import React, {Component} from "react";

export default class Paging extends Component{
    constructor(props) {
        super(props);
        this.state = {
            totalPage:[1],            // 페이징처리,
        }
    }


    render() {
        // rowSize 변경 시 부모태그 함수로 값 전달
        const onChange = (e) =>{
            this.props.getRowSize(e.target.value)

            // 부모함수를 실행시키면 자식 태그의 state에 저장하려함...
            // 어쩔 수 없이 부모태그로 rowSize, page를 넘기고 함수를 실행해야하나
        }

        // 페이징
        console.log('부모에서 받은 값 : ',this.props.totalCnt, this.props.rowSize)
        const thisState = this.state.totalPage;
        for (let i = 2; i <= (Math.floor(this.props.totalCnt/this.props.rowSize))+1; i++){
            console.log('나누기 안하누', Math.floor(this.props.totalCnt/this.props.rowSize))
            console.log('i값 ', i)
            this.state.totalPage[i-1] = i
        }
        console.log('===========배열을 넣은 state 상태', this.state.totalPage)

        const onClick = (e) =>{
            this.props.getPage(e.target.value-1);
        }

        return (
            <>
                <div align="center">
                    <input type="button" value="<<"/>
                    <input type="button" value="<"/>
                    {
                        this.state.totalPage.map(
                            cnt =>
                                <input type="button" value={cnt} onClick={onClick}/>
                        )
                    }
                    <input type="button" value=">"/>
                    <input type="button" value=">>"/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <select id="rowSize" onChange={onChange} >
                        <option value="3" >3</option>
                        <option value="10">10</option>
                        <option value="30">30</option>
                    </select>
                </div>
                <div style={{float:"right"}}>

                </div>
            </>
        );
    }
}


