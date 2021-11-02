import React from 'react';
import { Formik, Form } from 'formik';
import * as Bootstrap from 'react-bootstrap'
import * as Yup from 'yup';
import { repository } from '../utiles/repository';
import { useDispatch } from 'react-redux';
import { Login } from '../redux/actionMethodes/User/index'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Toast,ToastContainer} from 'react-bootstrap'
import {useHistory} from 'react-router-dom'
const DisplayingErrorMessagesSchema = Yup.object().shape({

    email: Yup.string()
        .required('Required'),
    password: Yup.string()
        .required('Required'),
  
});


const MyLogin = () => {
    const dispatch = useDispatch();
    const history=useHistory();
    const [message,setmessage]=React.useState(undefined);
    const [showmessage,setshowmessage]=React.useState(false);
    const login_now = async (datapost) => {

        (async () => {

            setshowmessage(true)
            const { data, status } = await repository.register({
                email: datapost.email,
                password: datapost.password
            }).then(x => x);
            if (status == 200) {
                setshowmessage(false)
                history.replace('/')

                setTimeout(()=>{
                    setmessage(undefined);
                },2000)

            }
            else{
                setshowmessage(false)
                setmessage(data.message);
                setTimeout(()=>{
                    setmessage(undefined);
                },2000)
                
            }
        })()


    }

    return <Formik
        initialValues={{
            email: '',
            password: '',
            city: '',
        }}
        validationSchema={DisplayingErrorMessagesSchema}
        onSubmit={async (values, { setSubmitting }) => {
            await login_now(values)
        }}
    >
        {({ errors, touched, getFieldProps, handleSubmit }) => {
            // cstErrors = errors;

            return (
                <>
                {message!=undefined? <ToastContainer position="top-end" >
                <Toast >
                    <Toast.Header closeButton={false}>
                        <strong className="me-auto">Weather App</strong>
                       </Toast.Header>
                    <Toast.Body>{message}</Toast.Body>
                </Toast>
                </ToastContainer>:<></>}
               
             
                    <Form>



                        <div id="login">
                            <h3 className="head-welcome">Welcome Register now</h3>
                            <p className="head-subtitle">Tell us about yourself</p>

                            <div className="mt-c68">
                                <TextField {...getFieldProps("email")} label="Your email" variant="filled" />
                                {touched.email && errors.email && <div style={{ color: 'red', marginTop: 10 }}>{errors.email}</div>}

                            </div>
                            <div className="mt-2">
                                <TextField {...getFieldProps("password")} label="Your password" type="password" variant="filled" />
                                {touched.password && errors.password && <div style={{ color: 'red', marginTop: 10 }}>{errors.password}</div>}

                            </div>
                           

                            <div className="mt-c30">
                                <Button onClick={handleSubmit} disabled={showmessage} variant="contained" color="primary">
                                    Register
                                </Button>
                            </div>
                        </div>

                    </Form>
                </>

            )

        }}
    </Formik>

}
export default MyLogin;