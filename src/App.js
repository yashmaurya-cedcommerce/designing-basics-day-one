import './App.css';
import { gridData } from './content';

function App() {
  return (
    <div className="App">
      <main>
        <div className='header-div'>
          <h1 className='header-heading'>Heading</h1>
          <div className='header-links'>
            <p><i class="fa-solid fa-link"></i>Lorem Ipsum</p>
            <p><i class="fa-solid fa-link"></i>Lorem Ipsum</p>
            <p><i class="fa-solid fa-link"></i>Lorem Ipsum</p>
          </div>
        </div>
        <div className='sub-header-div'>
          <div className='navbar'>
            <p className='nav-links'><b>Sub-Heading</b></p>
            <p className='nav-links'>Sub-Heading</p>
            <p className='nav-links'>Sub-Heading</p>
            <p className='nav-links'>Sub-Heading</p>
            <p className='nav-links'>Sub-Heading</p>
          </div>
          <div className='searchbar-container'>
            <button className='search-button'>
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
            <input type="text" className='search-input' />
          </div>
        </div>
        <section className='flex-container'>
          <div className='sidebar-div'>
            <p><b>Sub-Heading</b></p>
            <p>Sub-Heading</p>
            <p>Sub-Heading</p>
          </div>
          <div className='grid-container'>
            {gridData.map((item) => {
              return <>
                <div className='each-grid-div'>
                    <img src={item.image} className='grid-image' alt="grid-display"/>
                    <p className='grid-title'>{item.title}</p>
                    <p className='grid-description'>{item.description}</p>
                </div>
              </>
            })}
            <p className='close-button'><i class="fa-solid fa-xmark"></i></p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
