import  { ChangeEvent, useState } from "react";

type useInputArgs = {
    initialValue?: string;                      // Input에 들어갈 초기 값
    placeHolder?: string;                       // Input 태그에 들어갈 PlaceHolder 값
    validator?: (value: string) => boolean;     // value를 업데이트 하기 전에 유효한 값인지 확인하는 함수
}

const defaultArgs: useInputArgs = {
    initialValue: '',
    placeHolder: ''
}

const useInput = ({ 
    initialValue = '',
    placeHolder = '', 
    validator = undefined 
}: useInputArgs = defaultArgs
) => {

    const [ value, setValue ] = useState(initialValue);
    
    const onChange = (
        event: ChangeEvent<HTMLInputElement>
    ) => { 
        const { target: { value } } = event;
        const isVaildValue = validator ? validator(value) : true;
        if ( isVaildValue ) { setValue(value) }
    }

    return { value, placeHolder, onChange };
}

export default useInput;