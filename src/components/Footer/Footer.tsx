import { useMemo } from 'react';
import { NavLink } from 'react-router-dom';

import './Footer.css';

export default function Footer() {
  const footerNavList = useMemo(() => [
    {
      link: '/about',
      name: 'О магазине',
    },
    {
      link: '/catalog',
      name: 'Каталог',
    },
    {
      link: '/contacts',
      name: 'Контакты',
    },
  ], []);

  return (
    <footer className="container bg-light footer">
      <div className="row">
        <div className="col">
          <section>
            <h5 className="text-left">Информация</h5>
            <ul className="nav flex-column text-left">
              {footerNavList.map((item, index) => (
                <li key={index} className="nav-item">
                  <NavLink to={item.link} className="nav-link">
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </section>
        </div>
        <div className="col">
          <section>
            <h5 className="text-left">Принимаем к оплате:</h5>
            <div className="footer-pay">
              <div className="footer-pay-systems footer-pay-systems-paypal"></div>
              <div className="footer-pay-systems footer-pay-systems-master-card"></div>
              <div className="footer-pay-systems footer-pay-systems-visa"></div>
              <div className="footer-pay-systems footer-pay-systems-yandex"></div>
              <div className="footer-pay-systems footer-pay-systems-webmoney"></div>
              <div className="footer-pay-systems footer-pay-systems-qiwi"></div>
            </div>
          </section>
          <section className="text-left">
            <div className="footer-copyright">
              2009-2019 © BosaNoga.ru — модный интернет-магазин обуви и
              аксессуаров. Все права защищены.
              <br />
              Доставка по всей России!
            </div>
          </section>
        </div>
        <div className="col text-right">
          <section className="footer-contacts">
            <h5>Контакты:</h5>
            <a className="footer-contacts-phone" href="tel:+7-495-790-35-03">
              +7 495 79 03 5 03
            </a>
            <span className="footer-contacts-working-hours">
              Ежедневно: с 09-00 до 21-00
            </span>
            <a
              className="footer-contacts-email"
              href="mailto:office@bosanoga.ru"
            >
              office@bosanoga.ru
            </a>
            <div className="footer-social-links">
              <div className="footer-social-link footer-social-link-twitter"></div>
              <div className="footer-social-link footer-social-link-vk"></div>
            </div>
          </section>
        </div>
      </div>
    </footer>
  );
}
