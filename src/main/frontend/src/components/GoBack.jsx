import React from "react";


export default function GoBack({history}) {
    const goBack = () => {
        console.log("여기는 히스토리",history)

        history.goBack();
    } // test

    const goMain = () => {
        history.push("/")
    }

    // useEffect(() => {
    //     console.log("여기는 히스토리",history)
    //     const unblock = window.history.block("히스토리 블럭")
    //     return() => {
    //         unblock()
    //     };
    // },[history])

    return(
        <>
            <button onClick={() => goBack}>뒤로가기</button>
            <button onClick={() => goMain}>메인페이지</button>
        </>
    )
}