import React from 'react'

const Title = () => {
    const titleStyle = {
        color: 'purple',    textAlign: 'center',

       
      };
  return (
    <div style={titleStyle}>
        
          <h1 style={{fontWeight:'bold'}}>Nuestro Menú</h1>
          <p className="descripp">Vamos a comer bonito</p>
      
    </div>
  )
}

export default Title