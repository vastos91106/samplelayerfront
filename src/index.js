import React, {Component} from 'react';

import Board from './components/Board'
import style from './style.css';

class App extends Component {

    render() {
        return (
            <div className={style.app}>
                Hello i'am App
                <Board text={"hello from app"}/>
            </div>
        )
    }
}

export default App;