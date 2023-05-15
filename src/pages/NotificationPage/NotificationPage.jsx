import React, { useState } from 'react';
import './NotificationPage.css';
import NotificationItem from '../../components/NotificationItem/NotificationItem';
import { Link } from 'react-router-dom';


function NotificationPage() {
  const [notifications, setNotifications] = useState([
    {
        id: 1,
        title: 'Adopta una mascota',
        body: 'Tenemos perros y gatos disponibles para adopción. ¡Dales una oportunidad!',
        timestamp: new Date('2023-05-08T12:00:00.000Z')
      },
      {
        id: 2,
        title: 'Vacuna a tu mascota',
        body: 'Recuerda que es importante mantener a tu mascota al día con sus vacunas.',
        timestamp: new Date('2023-05-07T10:30:00.000Z')
      },
      {
        id: 3,
        title: 'Nuevos productos en tienda',
        body: '¡Acabamos de recibir nuevos juguetes y accesorios para mascotas!',
        timestamp: new Date('2023-05-06T15:20:00.000Z')
      },
      {
        id: 4,
        title: 'Oferta de alimentos',
        body: '¡Descuento del 20% en todos los alimentos para mascotas!',
        timestamp: new Date('2023-05-05T09:45:00.000Z')
      },
      {
        id: 5,
        title: 'Campaña de esterilización',
        body: 'Ayuda a controlar la población de animales sin hogar. ¡Esteriliza a tu mascota!',
        timestamp: new Date('2023-05-04T17:30:00.000Z')
      },
      {
        id: 6,
        title: 'Descubre nuestros servicios',
        body: 'Ofrecemos servicios de peluquería y cuidado de mascotas. ¡Pregunta por ellos!',
        timestamp: new Date('2023-05-03T14:10:00.000Z')
      },
      {
        id: 7,
        title: 'Promoción en collares',
        body: '¡Solo por hoy! Descuento del 10% en todos los collares para perros.',
        timestamp: new Date('2023-05-02T11:25:00.000Z')
      },
      {
        id: 8,
        title: 'Adopta a un perro mayor',
        body: 'Los perros mayores también merecen un hogar. ¡Adopta a uno hoy mismo!',
        timestamp: new Date('2023-05-01T19:15:00.000Z')
      },
      {
        id: 9,
        title: 'Oferta de fin de semana',
        body: '¡Descuento del 30% en todos los productos para gatos durante el fin de semana!',
        timestamp: new Date('2023-04-30T08:00:00.000Z')
      }
     
  ]);

  return (
    <div className='padreN'>
      <Link className='linkImg' to="/profile"><img className='imageNP' src='../../../assets/img/logo/back.png' alt='atras'></img></Link>
      <h1 className='title_notificaciones'>Notificaciones</h1>
      {notifications.map(notification => (
        <NotificationItem key={notification.id} notification={notification} />
      ))}
    </div>
  );
}

export default NotificationPage;