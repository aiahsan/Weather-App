import React from 'react';
import { Formik, Form } from 'formik';
import * as Bootstrap from 'react-bootstrap'
import * as Yup from 'yup';
import { repository } from '../utiles/repository';
import { useDispatch } from 'react-redux';
import { Login } from '../redux/actionMethodes/User/index'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const DisplayingErrorMessagesSchema = Yup.object().shape({

    name: Yup.string()
        .required('Required'),
    city: Yup.string()
        .required('Required'),
});


const MyLogin = () => {
    const dispatch = useDispatch();

    const login_now = async (datapost) => {

        // remove these 2 line
        dispatch(Login({ name: datapost.name, city: datapost.city }));


    }

    return <Formik
        initialValues={{
            name: '',
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
                <Form>



                    <div id="login">
                        <h3 className="head-welcome">Welcome</h3>
                        <p className="head-subtitle">Tell us about yourself</p>

                        <div className="mt-c68">
                            <TextField {...getFieldProps("name")} label="Your name" variant="filled" />
                            {touched.name && errors.name && <div style={{ color: 'red', marginTop: 10 }}>{errors.name}</div>}

                        </div>
                        <div className="mt-c30" >
                            <TextField {...getFieldProps("city")} label="Location" variant="filled" />
                            {touched.city && errors.city && <div style={{ color: 'red', marginTop: 10 }}>{errors.city}</div>}

                        </div>

                        <div className="mt-c30">
                            <Button onClick={handleSubmit} variant="contained" color="primary">
                                Continue
</Button>
                        </div>
                    </div>

                </Form>
            )

        }}
    </Formik>

}
export default MyLogin;