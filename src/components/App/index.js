import React from 'react-dom';
import './App.scss';
const App = () => {
    return (
        <div>
            <h3>SCSS Media Queries</h3>
            <div className="container">
                <div className="phone">Phone</div>
                <div className="tablet">Tablet</div>
                <div className="laptop">Laptop</div>
                <div className="television">Television</div>
            </div>
        </div>
    );
}

export default App;