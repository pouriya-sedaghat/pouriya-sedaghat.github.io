import { Container, Row, Col, Input, Button } from 'reactstrap';
import Head from 'next/head';
import { useState } from 'react';
import { useCookies } from 'react-cookie';

function HomePage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [cookies, setCookie, removeCookie] = useCookies(['username', 'password']);
  const [data, setData] = useState({ username: 'none', password: 'none' });
  function setCookieHandler() {
    setCookie('username', username, { path: '/' });
    setCookie('password', password, { path: '/' });
    setUsername('');
    setPassword('');
  }
  function showCookieHandler() {
    setData(cookies);
  }
  function removeCookieHandler() {
    removeCookie('username');
    removeCookie('password');
    setData({ username: 'none', password: 'none' });
  }
  return (
    <>
      <Head>
        <meta charSet='UTF-8' />
        <meta name='author' content='p_co_st' />
        <meta name='keywords' content='Nextjs,Cookie,Layout' />
        <meta name='description' content='We Want TO Learn About, How Can Use Cookie And LayOut Component In Nextjs.' />
        <title>Home Page</title>
      </Head>
      <Container fluid>
        <Row>
          <Col xs={12}>
            <h2>Home Page</h2>
            <p>We Want TO Learn About, How Can Use Cookie And LayOut Component In Nextjs.</p>
          </Col>
          <Col xs={12}>
            <div className='my-2'>
              <label htmlFor='text'>Enter Username :</label>
              <Input value={username} onChange={(e) => setUsername(e.target.value)} className='text-reset' id='text' type='text' placeholder='username' />
              <label htmlFor='password'>Enter Password :</label>
              <Input value={password} onChange={(e) => setPassword(e.target.value)} className='text-reset' id='password' type='password' placeholder='password' />
            </div>
            <div className='btn-group my-2'>
              <Button onClick={setCookieHandler} color='outline-success'>Set Cookie</Button>
              <Button onClick={showCookieHandler} color='outline-warning'>Show Cookie</Button>
              <Button onClick={removeCookieHandler} color='outline-danger'>Remove Cookie</Button>
            </div>
          </Col>
          <Col xs={12}>
            {
              data && (
                <>
                  <p>Username : {data.username}</p>
                  <p>Password : {data.password}</p>
                </>
              )
            }
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default HomePage;