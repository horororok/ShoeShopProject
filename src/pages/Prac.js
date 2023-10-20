import { useState, useTransition, useDeferredValue, useEffect } from "react";



let a = new Array(100000).fill(0)


function Prac() {
    let [name, setName] = useState('')
    let [isPending, startTransition] = useTransition()
    // let state = useDeferredValue(name) //name에 변동사항이 생기면 늦게 처리해줌


    let [count, setCount] = useState(0);
    let [age, setAge] = useState(20);


    useEffect(() => {
        if (count != 0 && count < 3) {
            setAge(age + 1)
        }
    }, [count])

    return (
        <div>

            {/* 
            useEffect는 컴포넌트가 렌더링/재렌더링 될때 실행되는 함수
            뒤에 대괄호안에 state를 넣으면 state가 변경되면 이 코드 실행해주세요 하는 의미
            1. count 라는 state가 변경되고 나서 2. age도 변경해주세요 식의 순차적 코드 실행 가능
            이렇게 써도 처음 페이지가 로드 될때에 한번 실행이 되기 때문에 의도치 않은 버그 발생가능
            -> 첫 페이지 로드시 useEffect실행을 막는 코드를 알아서 검색해서 적용해도 되고, count라는 state를 또 활용해도 된다.
            count가 0일때 내부코드를 동작시키지 않기
            */}
            <button onClick={() => {
                setCount(count + 1);
            }}>누르면한살먹기</button>



            {/* onChange() : 유저가 뭔가 입력하면 name에 저장해 주세요
                e.target.value : 유저가 입력한 값 
                setName() : name에 저장해주세요

            */}
            <input onChange={(e) => {
                //startTransition으로 문제의 state변경 감싸기
                startTransition(() => {
                    setName(e.target.value)
                })
            }} />
            {

                // 타이핑하면 name이 변경되고, name이 변경되면 이것도 렌더링해야한다.
                //isPending은 startTransition이 처리중일때 true로 변한다
                isPending ? "로딩중" :
                    a.map(() => {
                        return <div>{name}</div>
                    })
            }

        </div>
    );
}


//
// function Prac2() {

//     let [count, setCount] = useState(0);
//     let [age, setAge] = useState(20);

//     return (
//         <div>
//             <div>안녕하세요 저는 {age} 살 입니다 </div>
//             <button onClick={() => {
//                 setCount(count + 1);
//                 if (count < 3) {
//                     setAge(age + 1);
//                 }

//             }}>+</button>
//         </div>
//     )

// }

// function Prac3() {
//     useEffect(() => {
//         if (count != 0 && count < 3) {
//             setAge(age + 1)
//         }
//     }, [count])

//     return (
//         <div>
//             <button onClick={() => {

//                 setCount(count + 1);

//             }}>누르면한살먹기</button>
//         </div>
//     )
// }


export default Prac;