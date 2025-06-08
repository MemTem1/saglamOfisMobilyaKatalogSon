import './App.css'
import Navbar from './component/Navbar.jsx';
import ProductViewer from './component/ProductViewer.jsx';
function App() {

  // const [showIntro, setShowIntro] = useState(true);
  return (
    <div >

      <Navbar />
      <div className="App">
        <ProductViewer />
      </div>

    </div>
  )
}

export default App
