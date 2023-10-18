
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Container, Nav, Row, Col } from 'react-bootstrap';

import { useState } from 'react';

import data from './data.js';

import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'

import Detail from './pages/Detail.js'

import Cart from "./pages/Cart.js"


function App() {

  let [shoes] = useState(data)

  let navigate = useNavigate();

  return (
    <div className="App">






      <Navbar className="topbar" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Project X</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/detail">Features</Nav.Link>
            <Nav.Link onClick={() => { navigate('/detail') }}>Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Link to="/">홈</Link>
      <Link to="/detail">  상세 페이지</Link>




      <Routes>
        <Route path="/" element={
          <>
            <div className="main-bg" ></div>

            <Container>
              <Row>
                <Col sm>
                  <Card shoes={shoes[0]} i={1} />
                </Col>
                <Col sm>
                  <Card shoes={shoes[1]} i={2} />
                </Col>
                <Col sm>
                  <Card shoes={shoes[2]} i={3} />
                </Col>
              </Row>

              <Row>  {
                shoes.map((a, i) => {
                  return (
                    <Card shoes={shoes[i]} i={i + 1} />
                  )
                })
              }</Row>
            </Container>

          </>
        } />
        <Route path="/detail/:id" element={<Detail shoes ={shoes}/>} />
        {/* <Route path="/detail/1" element={<Detail shoes ={shoes}/>} />
        <Route path="/detail/2" element={<Detail shoes ={shoes}/>} /> */}
        

        <Route path="/about" element={<About/>} >
          <Route path="member" element={<div>멤버</div>} />
          <Route path="location" element={<div>z</div>} />
        </Route>

        <Route path = "/event" element = {<Event/>}>
          <Route path = "one" element = {<div>첫 주문시 양배추즙 서비스</div>}/>
          <Route path = "two" element = {<div>생일기념 쿠폰받기</div>}/>
        </Route>


        <Route path="*" element={<div>없는 페이지</div>} />

        <Route path = "/cart" element={<Cart/> }/>
        
        

      </Routes>

    </div>
  );
}

function Event(){
  return(
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  )
}


function About() {
  return (

    <div>
      <h1>회사정보임</h1>
      <Outlet></Outlet>
    </div>

  )
}


function Card(props) {
  return (
    <Col sm>
      <div className="sm">
        <img src={'https://codingapple1.github.io/shop/shoes' + props.i + '.jpg'} width="80%" />
        <h4>{props.shoes.title}</h4>
        <p>{props.shoes.content}</p>
        <p>{props.shoes.price}</p>

      </div>
    </Col>
  )
}


export default App;
