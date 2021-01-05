import React, { useState } from "react";


const testVaildID = (id: string): boolean => {
    console.log('id' + id);
    return id.search('@') !== -1;   // id에 @가 있으면 true 없으면 false
}

const testValidPW = (pw: string): boolean => {
    console.log('pw' + pw);
    return pw.length >= 6;
}

function LoginInput () {

    const [id, setID] = useState<string>('');
    const [pw, setPW] = useState<string>('');

    const isValidID = testVaildID(id);
    const isVaildPW = testValidPW(pw);

    return (
        <div>
            <input type='text' id='id' value={id} onChange={(e) => setID(e.target.value)} />
            {!isValidID && '이메일 형식의 아이디를 입력해주세요'}
            <input type='text' id='pw' value={pw} onChange={(e) => setPW(e.target.value)} />
            {!isVaildPW && '비밀번호는 6자리 이상으로 해주세요'}
        </div>
    )

}

export default LoginInput;