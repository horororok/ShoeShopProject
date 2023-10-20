import { useParams } from 'react-router-dom'
import { useState } from 'react';
import { useEffect } from 'react';
import { Nav } from 'react-bootstrap';
import { addItem } from '../store';
import { useDispatch } from 'react-redux';

function Detail(props) {

    let dispatch = useDispatch()

    let [fadei, setFadei] = useState('')
    useEffect(()=>{
        setFadei('end')
        return ()=>{
            setFadei('')
        }
    }, [])

    let { id } = useParams();
    let 찾은상품 = props.shoes.find(function (x) {
        return x.id == id
    });

    //localstorage로 만드는 최근본 상품
    useEffect(()=>{
        let 꺼낸거 = localStorage.getItem('watched')
        꺼낸거 = JSON.parse(꺼낸거)
        꺼낸거.push(찾은상품.id)
        꺼낸거 = new Set(꺼낸거)
        꺼낸거 = Array.from(꺼낸거)
        localStorage.setItem('watched', JSON.stringify(꺼낸거))
    }, [])


    let [alerti, setAlerti] = useState(true)
    useEffect(() => {
        let a = setTimeout(() => { setAlerti(false) }, 2000)
        return () => {
            clearTimeout(a)
        }
    }, [])


    let [num, setNum] = useState('')
    useEffect(() => {
        if (isNaN(num) == true) {
            alert('숫자만입력')
        }
    }, [num])
    // return (
    //     <input onChange={(e) => { setNum(e.target.value) }} />
    // )


    let [탭, 탭변경] = useState(0)

    return (
//{`container start ${fadei}`}
        <div className={"container start "+ fadei}>

            {
                alerti == true ? <div className="alert alert-warning">2초이내클릭</div> : null
            }
            <a>수량</a>
            {
                <input id="numonly" onChange={(e) => { setNum(e.target.value) }} />
                //    <label htmlFor="numonly">수량</label>
            }
            <div className="row">
                <div className="col-md-6">
                    <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{찾은상품.title}</h4>
                    <p>{찾은상품.content}</p>
                    <p>{찾은상품.price}</p>
                    <button className="btn btn-danger" onClick={()=>{
                        //현재 페이지에 있는 id, name, 가지고 오도록 만들기
                        dispatch(addItem({id : 1, name : 'Red Knit', count : 1}))
                    }}>주문하기</button>
                </div>
            </div>

            <Nav variant="tabs" defaultActiveKey="link0">
                <Nav.Item>
                    <Nav.Link onClick={() => { 탭변경(0) }} eventKey="link0">버튼0</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={() => { 탭변경(1) }} eventKey="link1">버튼1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={() => { 탭변경(2) }} eventKey="link2">버튼2</Nav.Link>
                </Nav.Item>
            </Nav>
            <TabContent 탭={탭} />
            {/* {
                탭 == 0?<div>내용0</div> : null
            }
            {
                탭 == 1?<div>내용1</div> : null
            }
            {
                탭 == 2?<div>내용2</div> : null
            } */}

            {/* <div>내용0</div>
            <div>내용1</div>
            <div>내용2</div> */}

        </div>

    )
}


// function TabContent(props) {
//     if (props.탭 == 0) {
//         return <div>내용0</div>
//     }
//     if (props.탭 == 1) {
//         return <div>내용1</div>
//     }
//     if (props.탭 == 2) {
//         return <div>내용2</div>
//     }
// }

// function TabContent({ 탭 }) {
//     if (탭 == 0) {
//         return <div>내용0</div>
//     }
//     if (탭 == 1) {
//         return <div>내용1</div>
//     }
//     if (탭 == 2) {
//         return <div>내용2</div>
//     }
// }

function TabContent({ 탭 }) {
    
    let [fade, setFade] = useState('')
    //탭 state가 변할때 end 뗐다가 부착
    useEffect(()=>{
        setTimeout(()=>{setFade('end') }, 100)
        //cleanup function : useeffect 실행전 특정 코드 실행
        return ()=>{
            setFade('')
        }
    }, [탭])
//{'start ' + fade} or 백틱 사용
    return (<div className={`start ${fade}`}>   
        {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][탭]}
    </div>)
}


// if(탭 == 0){
//     <div>내용0</div>
// }else if(탭 ==1){
//     <div>내용1</div>
// }else if(탭 ==2){
//     <div>내용2</div>
// }
// if(탭 == 1){
//     <div>내용1</div>
// }
// if(탭 == 1){
//     <div>내용0</div>
// }


export default Detail;