import React, {useState} from "react";
import axios from "axios";
import XLSX from "xlsx";


export default function SpringExcelUpload() {
    const [fileList, setFileList] = useState([]);

    // 서버 조회 후 엑셀 다운로드
    const serverExcelDown = (e) => {
        const formData = new FormData;
        formData.append("page",1);
        formData.append("rowSize",3);
        const config = {
            headers: {
                "username" : "user_id",
                "password" : "user_pw"
            }
        }
        return axios.post("http://localhost:8083/main/excelDown", formData)
    }



    // 리엑트 자체 엑셀 다운로드
    const reactExcelDown =(e) => {
        axios.post("http://localhost:8083/main/fileList?page=1&rowSize=3").then((res) =>{
            console.log('파일리스트 ',res.data);
            // setFileList(res.data);

        })


        // 엑셀 워크시트 형식으로 json을 보내줌
        const dataWs = XLSX.utils.json_to_sheet([{seq:1,img:'http://localhost:8083/static/media/1619415852816다운로드.feb2af43.gif'}]);
        console.log('dataWs', dataWs);
        // 새로운워크북 생성
        const wb = XLSX.utils.book_new();
        // 시트명
        XLSX.utils.book_append_sheet(wb, dataWs, "testSheet");
        XLSX.writeFile(wb,"example.xlsx");
    }

    return (
        <>
            <form action="http://localhost:8083/main/excelDown?page=1&rowSize=3" method="post">
                <button type="submit">엑셀 다운로드</button>
            </form>

            <button type="button" style={{border:"10px", fontWeight:"bold"}} onClick={serverExcelDown}>서버에서 조회 후 <br/> 엑셀 다운로드</button>
            <button type="button" style={{border:"10px", fontWeight:"bold"}} onClick={reactExcelDown}>react 자체 엑셀 다운로드</button>
        </>
    )
}