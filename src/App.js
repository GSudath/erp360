import './App.css';
import 'react-responsive-modal/styles.css';
import { PlusCircle, Edit, Trash2 } from 'react-feather';

function App() {
  return (
    <div className="App">
      <div className='d-flex'>
        <h6>Header Details Section</h6>
      </div>
      <hr/>
        <h6>Details Section</h6>
        <div className='toolbar'>
        <button className='btn'>
          <PlusCircle size={16}></PlusCircle>
          <span>Add To Grid</span>
        </button>
      </div>
      <hr/>
      <table className='table'>
        <thead>
          <tr>
            <th>Item</th>
            <th>Rate</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Sample</td>
            <td>1000.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
