import React, {useState} from "react";


const Paging2 = ({totalCnt, page, rowSize, getPage ,getRowSize}) =>{
    // useState는 최상위에서 선언되어야함!!!!!!!!!!
    // if, else 처럼 분기에서는 사용할 수 없음!!!!!!
    const [ChPage, setChPage] = useState(0);
    const [ChRowSize, setChRowSize] = useState(0);
    const [ChPaging, setChPaging] = useState([]);
    if (totalCnt === 0){
        return (<><div style={{fontSize:"large",fontWeight:"bold",textAlign:"center"}}>보여줄 목록이 없습니다.</div></>)
    } else {
        console.log('전체페이지', totalCnt)
        console.log('페이지', page)
        console.log('열수', rowSize)
        const array = []

        const onClick = (e) => {
            console.log('타겟', e.target.value)
            console.log('페이지 개수', e.target.value)
            getPage(e.target.value);
        }

        const onChange = (e) => {
            console.log('rowSize', e.target.value)
            console.log('마지막 페이지', array)
            getRowSize(e.target.value)

        }

        for (let i = 0; i < Math.floor(totalCnt / rowSize) + 1; i++) {
            array[i] = i + 1
        }


        console.log('array', array)
        return (
            <>
                <div align="center">
                    <input type="button" value="<<"/>
                    <input type="button" value="<"/>
                    {
                        array.map(
                            page =>
                                <input type="button" value={page} onClick={onClick}/>
                        )
                    }
                    <input type="button" value=">"/>
                    <input type="button" value=">>"/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <select id="rowSize" onChange={onChange}>
                        <option value="3">3</option>
                        <option value="10">10</option>
                        <option value="30">30</option>
                    </select>
                </div>
            </>
        )
    }
}

export default Paging2;