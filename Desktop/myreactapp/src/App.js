import logo from "./images/bot.png";
import moon from "./images/smiley.jpg"
import './App.css';

function App() {
  return (
   <>
   <header>
     <img src={logo} alt="logo"/>
  
   </header>
   <main>
   <img src={moon} alt="moon" />
   <div className="content">
     <h2>Smiley With Rainbow Face</h2>
     <p>Smile and wave when meeting new people, most probably they will smile back</p>
     <button>Register</button>
   </div>
   </main>
   <footer>
   <i class="fab fa-facebook"></i>
   </footer>
   </>
  );
}

export default App;
