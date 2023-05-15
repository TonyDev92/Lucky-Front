import React from 'react'
import "./DonationPage.css"

const DonationPage = () => {
  return (
    
    <div className='div__donation'>
    

	<h1 className='title_donation'>Donacion al refugio animales</h1>
	
    <form className='form_donation' action="procesar_donacion.php" method="POST">
		<label className='label_donation' for="nombre">Nombre completo:</label>
		<input type="text" id="nombre" name="nombre" required></input>
		
		<label className='label_donation' for="email">Correo electrónico:</label>
		<input type="email" id="email" name="email" required></input>
		
		<label className='label_donation' for="telefono">Número de teléfono:</label>
		<input type="tel" id="telefono" name="telefono" required></input>
		
		<label className='label_donation' for="cantidad">Cantidad a donar:</label>
		<input type="number" id="cantidad" name="cantidad" min="1" required></input>
		
		<label className='label_donation' for="metodo">Método de pago:</label>
		<select className='select_donation' id="metodo" name="metodo" required>
			<option value="tarjeta">Tarjeta de crédito/débito</option>
			<option value="paypal">PayPal</option>
			<option value="transferencia">Transferencia bancaria</option>
		</select>
		

		<label className='label_donation' for="comentario">Comentario:</label>
		<textarea className='textarea_donation' id="comentario" name="comentario" rows="4" cols="50"></textarea>
		
		<input type="submit" value="Donar"></input>
	</form>
      
    </div>
    
  )
}

export default DonationPage
