import { useRef, useState } from "react";
import { Button, Table, Form } from 'react-bootstrap';

import AdressList from "./AdressList";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function AdressBook() {
    const [keyword, setKeyword] = useState("");
    const addrList = [
        {no:1, name: "홍길동", phone: "010-1111-1111"},
        {no:2, name: "아무개", phone: "010-2222-2222"}
    ]

    const optRef = useRef();

    function checkOption() {
        // select 태그(요소)의 선택된 항목(option)의 value 값
        //console.log(document.querySelector("select").value);
        console.log(optRef.current.value);
        const option = optRef.current.value;
        // option => name, 입력값: 홍길동 ... "홍길동의 연락처는 010-1111-1111"
        addrList.forEach(function(address){
            // address 객체 안에 option=>"name" 이라는 속성 값
            /*
            address[option]     // option에 저장된 값에 따라 객체의 속성에 접근
                => address["name"]
                => address["phone"]
            */
            if(option in address &&
                address[option] == keyword) {
                console.log(`${address.name}의 연락처는 ${address.phone}`);
                return;
            }
        });
        // 결과가 있으면 해당 내용을 출력.(콘솔창, alert)
    }

    return (
        <>
            <Form.Select ref={optRef} size="sm">
                <option value={"name"}>이름</option>
                <option value={"phone"}>연락처</option>
            </Form.Select>
            &nbsp;
            <input type="text" value={keyword}
                   onChange={(e)=>setKeyword(e.target.value)} 
                   placeholder="검색어를 입력하세요"/>
            &nbsp;
            {/* <button onClick={checkOption}>검색</button> */}
            <Button  variant="dark" onClick={checkOption}>검색</Button>
            <br/><br/>
            <Table bordered hover striped >
                <colgroup>
                    <col></col>
                    <col width={"40%"}></col>
                    <col width={"50%"}></col>
                </colgroup>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>이름</th>
                        <th>연락처</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        addrList.map(function(adress){
                            return (
                                <AdressList key={adress.no}
                                            no={adress.no}
                                            name={adress.name}
                                            phone={adress.phone} />
                            )
                        })
                    }
                </tbody>
            </Table>
            <br/><br/>
            <input type="text" placeholder="이름" />
            &nbsp;
            <input type="text" placeholder="연락처" />
            &nbsp;
            <button>추가</button>
        </>
    )
}