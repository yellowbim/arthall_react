import React, {Component} from "react";

export default class Paging extends Component{
    constructor(props) {
        super(props);
        this.state = {
            totalPage:[],            // 페이징처리,
        }
    }

    render() {
        // rowSize 변경 시 부모태그 함수로 값 전달
        const onChange = (e) =>{
            this.props.getRowSize(e.target.value)

            // 부모함수를 실행시키면 자식 태그의 state에 저장하려함...
            // 어쩔 수 없이 부모태그로 rowSize, page를 넘기고 함수를 실행해야하나
        }

        // 페이징 처리
        for (let i = 0; i < (this.props.totalCnt/this.props.rowSize)+1; i++){
            this.state.totalPage[i] = i+1;
        }

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


