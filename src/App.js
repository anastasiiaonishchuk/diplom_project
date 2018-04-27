import React, {Component} from 'react';
import './style/bootstrap.min.css';
import './style/main.css';
import {HashRouter as Router, Route, Link, Switch} from 'react-router-dom'
import {Begining} from './Lections/begining';
import {Lectures} from './Lections/lectures';
import Test1  from './task/Test1';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="content">
          <div className="row">
            <div className="col-2">
              <div className="content-nav-menu">
                <Router>
                  <Link to={"/"}>
                    <div className="content-nav">
                      В начало
                    </div>
                  </Link>
                </Router>
                <Router>
                  <Link to={"/lectures"}>
                    <div className="content-nav">
                      Лекции
                    </div>
                  </Link>
                </Router>
                <Router>
                  <Link to={"/task"}>
                    <div className="content-nav">
                      Задания
                    </div>
                  </Link>
                </Router>
                <Router>
                  <Link to={"/scors"}>
                    <div className="content-nav">
                      Результаты
                    </div>
                  </Link>
                </Router>
                <Router>
                  <Link to={"/plan"}>
                    <div className="content-nav">
                      Учебный план
                    </div>
                  </Link>
                </Router>
                <Router>
                  <Link to={"/statistic"}>
                    <div className="content-nav">
                      Стастистика
                    </div>
                  </Link>
                </Router>
              </div>
            </div>
            <div className="col-8 content-c">
              <div className="content-c-name">
                ФИЗИЧЕСКИЕ ПРОЦЕССЫ РАЗРУШЕНИЯ ГОРНЫХ ПОРОД ПРИ БУРОВЗРЫВНЫХ РАБОТАХ
              </div>
              <div className="content-c-texts">
                <Router>
                  <Switch>
                    <Route exact path="/" component={Begining}></Route>
                    <Route path="/lectures" component={Lectures}></Route>
                    <Route path="/task" component={Test1}></Route>
                  </Switch>
                </Router>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
