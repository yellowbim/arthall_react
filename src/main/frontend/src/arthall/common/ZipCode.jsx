import React, {useState} from 'react';

// 우편번호 조회
import DaumPostcode from 'react-daum-postcode';
// css 스타일
import styled from 'styled-components';
// 천체 창으로 모달 씌우기
import ModalPortal from './../common/ModalPortal';

const MyModal = ({onClose}) => {


    // 마우스가 들어왔을때
    const onMouseOver = (e) => {
        if (e.target == e.currentTarget){
            console.log("바깥 영역 들어옴");
        }
    }

    // 우편번호 검색 시작
    const [isAddress, setIsAddress] = useState("");
    const [isZoneCode, setIsZoneCode] = useState("");

    const handleComplete = (data) => {
        let fullAddress = data.address;
        let extraAddress = "";

        if (data.addressType === "R") {
            if (data.bname !== "") {
                extraAddress += data.bname;
            }
            if (data.buildingName !== "") {
                extraAddress +=
                    extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
            }
            fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
        }
        setIsZoneCode(data.zonecode);
        setIsAddress(fullAddress);
    };
    
    
    // 모달 css 설정 (css를 다로 빼지 않음 => 파일이 많아져서 관리하기 힘듦)
    const MyModal = styled.div`
        background: rgba(0, 0, 0, 0.25);
        position: fixed;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    `
    const ModalContent = styled.div`
        background: white;
        padding: 1rem;
        width: 400px;
        height: 505px;
    `
    const ModalClose = styled.button`
        float: right;
    `

    return (
        <ModalPortal>
            <MyModal className="MyModal" onMouseOver={onMouseOver}>
                <ModalContent className="content">
                    <table border="1" width="100%" style={{textAlign:"center"}}>
                        <thead>
                            <tr>
                                <td>
                                    <span><strong>우편번호를 입력해주세요</strong></span>
                                    <ModalClose onClick={onClose}>X</ModalClose>
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <DaumPostcode onComplete={handleComplete}  width="100%" height="480px" style={{marginBottom:"0"}}/>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </ModalContent>
            </MyModal>
        </ModalPortal>
    );
};


export default MyModal;