import logo from './logo.svg';
import './App.css';

function App() {
  // Получаем элементы
  const modal = document.getElementById("modal");
  const btn = document.getElementById("learn-more-btn");
  const span = document.getElementsByClassName("close")[0];

  // Показ модального окна при клике на кнопку
  const btnClick = function () {
    modal.style.display = "block";
  }

  // Закрытие модального окна при клике на "×"
  const closeClick  = function () {
    modal.style.display = "none";
  }

  //Закрытие модального окна при клике за его пределами*
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  
  return (
    <div className="App">
      <header>
        <nav>
        <a href="#"><img src="https://avatars.mds.yandex.net/i?id=e71599ca77a858e9d06739d841ee33b646597b54-5875539-images-thumbs&n=13"alt="#"/></a>
          <ul>
            <li><a href="#">Главная</a></li>
            <li><a href="#">О нас</a></li>
            <li><a href="#">Услуги</a></li>
            <li><a href="#">Контакты</a></li>
          </ul>
        </nav>

      </header>



      <section class="hero">
        <h1>ГАРАЖНАЯ РАСПРОДАЖА</h1>
        <p>Здесь вы можете найти то, что ищите</p>
        <button id="learn-more-btn" onClick={btnClick}>Где нас найти</button>
        


      </section>



      <div class="product-card">
        <img src="https://avatars.mds.yandex.net/i?id=b62531f71abaa08867e386307369f41a009724ee-4055370-images-thumbs&n=13" alt="Product Image" />
        <h2>ШЛЯПКИ и ТАПКИ</h2>
        <p>Описание товара</p>
        <button class="buy-btn">Купить</button>
      </div>

      <div class="product-card">
        <img src="https://avatars.mds.yandex.net/i?id=2528ba693884c20d58426b25cfd8be3561ec2de904018e08-4239171-images-thumbs&n=13" alt="Product Image" />
        <h2>ПЛАТЬЯ</h2>
        <p>Описание товара</p>
        <button class="buy-btn">Купить</button>
      </div>

      <div class="product-card">
        <img src="https://avatars.mds.yandex.net/i?id=d9866d6de51bb39ddd2895d02d13000f517ae90a-5228069-images-thumbs&n=13" alt="Product Image"></img>
      <h2>ИГРУШКИ</h2>
        <p>Описание товара</p>
        
        <button class="buy-btn">Купить</button>
      </div>

      <div id="modal" class="modal">
        <div class="modal-content">
          <span onClick={closeClick} class="close">&times;</span>
          <h2>НАШ ГАРАЖ</h2>
          <p>Телефон: +7 (900) 173-48-48</p>
          <p>Адрес: г. Москва, ул. Балтийская, д. 1 </p>
        </div>
      </div>

      <footer>
        <p>&copy; 2024 ГАРАЖНАЯ РАСПРОДАЖА</p>
      </footer>
    </div>
  );
}

export default App;
