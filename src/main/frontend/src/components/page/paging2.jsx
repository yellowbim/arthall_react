import React, {useState} from "react";


export default function Paging2(){
    const [totalPage, setTotalPage] = useState([])

    const onChange = (e) =>{
        this.props.getRowSize(e.target.value)

        // 부모함수를 실행시키면 자식 태그의 state에 저장하려함...
        // 어쩔 수 없이 부모태그로 rowSize, page를 넘기고 함수를 실행해야하나
    }

    const onClick = (e) =>{
        this.props.getPage(e.target.value-1);
    }


    return(
        <>
            <div align="center">
                <input type="button" value="<<"/>
                <input type="button" value="<"/>

                {}

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
    )

}