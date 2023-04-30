import { Button, Col, Form, Input, Row, message } from "antd";
import React from 'react';
import { useAuth } from "../../context/AuthProvider/useAuth";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
    const auth = useAuth()
    const history = useNavigate()

    async function onFinish  (values: {username: string, email: string, password: string})  {
        console.log(values)
        try {
           await auth.createuser(values.username, values.email, values.password)

           history("/" , {replace: true})
        } catch (error) {
            message.error((error as any).message)
        }

    }

    return (
        <Row
            justify='center'
            align='middle'
            style={{
                height: '100vh'
            }}
        >
            <Col span={12}>
                <Form
                    name="basic"
                    labelCol={{span: 8}}
                    wrapperCol={{span: 16}}
                    onFinish={onFinish}
                >
                    <Form.Item
                    label='Nome de Usuário'
                    name='username'
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                    label='Email'
                    name='email'
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                    label='Password'
                    name='password'
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16}}>
                        <Button type="primary" htmlType="submit">
                            Criar uma conta
                        </Button>
                    </Form.Item>
                </Form>
            </Col>

        </Row>
    )

}

//https://reqres.in/api-docs/#/default/post_register