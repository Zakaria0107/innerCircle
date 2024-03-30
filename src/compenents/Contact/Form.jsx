import React, { useEffect } from 'react';
import ContactImg from '../../images/contact.png';

const Form = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = '//embed.typeform.com/next/embed.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className='w-screen min-h-screen'>
            <div className='form-container' data-tf-live="01HSC8GM4NG7PQJ3P5JCFKFEER"></div>
        </div>
    );
};

export default Form;

