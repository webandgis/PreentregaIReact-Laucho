import React from 'react'
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';

const CheckForm = () => {
    return (
        <>
          <h2 style={{color:'purple',textAlign:'center',fontWeight:'bold'}}>Formulario de Compra</h2>
          <Form.Control type="text" placeholder="Nombre" style={{width:'50%', textAlign:'center', marginLeft:'30%'}} />
          <br />
          <Form.Control type="text" placeholder="Apellido" style={{width:'50%', textAlign:'center', marginLeft:'30%'}} />
          <br />
          <Form.Control type="text" placeholder="garzamora@gmail.com" style={{width:'50%', textAlign:'center', marginLeft:'30%'}} />
          <br />
          <Form.Control type="text" placeholder="099-000-000" style={{width:'50%', textAlign:'center', marginLeft:'30%'}} />
         
          <Button
          style={{
            backgroundColor: '#cfbcf3',
            color: 'purple',
            border: 'none',
            fontWeight: 'bold',
            marginTop:'5px',
            marginBottom:'5px',
            marginLeft:'50%'
          }}         
        >
          Enviar
        </Button>
         
          <br />
      
        </>
      );
}

export default CheckForm