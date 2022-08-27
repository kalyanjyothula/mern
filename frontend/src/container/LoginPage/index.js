import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { LoginPageContainer } from './elements'
import { Button, Form, Spinner } from 'react-bootstrap'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { changeUserDetails, loginPageSeclector, loginUser } from './reducer'


export default function LoginPage() {

  const dispatch = useDispatch();
  const navigate = useNavigate()

  const { loading, isError, useDetails, isSuccess, email, password } = useSelector(loginPageSeclector)

  useEffect(() => {
    if (isError) {
      toast.error("something went wrong !")
    }

    if (isSuccess || useDetails) {
      navigate('/app')
    }

  }, [isSuccess, navigate, isError, useDetails])


  const handleChange = (e) => {
    console.log(e.target.name, e.target.value)
    const { name, value } = e.target
    dispatch(changeUserDetails({ name, value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }))
  }

  return (
    <LoginPageContainer>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email </Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter Email" onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Enter Password"
            onChange={handleChange} />
        </Form.Group>
        <Button variant="primary" type="submit" size="lg" className="ml-4" disabled={loading}>
          {loading ? <Spinner animation="border" /> : 'Submit'}
        </Button>
      </Form>
    </LoginPageContainer>
  )
}
