import { Table } from "react-bootstrap"
import { useSelector, useDispatch } from "react-redux"
import { changeName , increaseAge} from "./../store/userSlice.js"
import { addCount } from "../store.js"


function Cart() {
    //store 에 있던 state 가져와 주는 훅
    // useSelector(() => { return state })
    //redux store에 있건 state 남음
    //store 안에 있던 모든 state 안쓰려면 .user 해ㅐ줌
    // let a = useSelector((state)=>{return state})
    // let a = useSelector((state)=>{return state.stock})
    let state = useSelector((state) => state )

    let dispatch = useDispatch()
    console.log(state.cart)
    return (
        <div>
            <h6>{state.user.age} {state.user.name}의 장바구니</h6>
            <button onClick={()=>{dispatch(increaseAge(10))}}>더하기</button>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경하기</th>
                    </tr>
                </thead>
                {/* <tbody>
                    <tr>
                        <td>1</td>
                        <td>{a}</td>
                        <td>hi2</td>
                        <td>hi3</td>
                    </tr>
                </tbody> */}
                <tbody>
                    {/* <tr>
                        <td>1</td>
                        <td>{state.cart[0].name}</td>
                        <td>{state.cart[1].name}</td>
                        <td>hi</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>{state.cart[1].name}</td>
                        <td>{state.cart[1].name}</td>
                        <td>hi</td>
                    </tr> */}

                    {
                        state.cart.map((a, i) => {
                            return <tr key={'userlist ' + i}>
                                <td>1</td>
                                <td>{state.cart[i].name}</td>
                                <td>{state.cart[i].count}</td>
                                <td>
                                    <button onClick = {()=>{
                                        dispatch(changeName())
                                    }}>cn</button>
                                    <button onClick={()=> {
                                        // dispatch(addCount(i))
                                        //id를 state변경합수로 전송
                                        dispatch(addCount(state.cart[i].id))
                                    }}>+</button>
                                </td>
                            </tr>
                        }
                        )
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default Cart