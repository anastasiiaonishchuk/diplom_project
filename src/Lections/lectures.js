import React, {Component} from 'react';
import {HashRouter as Router, Link, Route, Switch} from 'react-router-dom';
import{Ch1} from './ch1';
import { Ch11 } from './ch11';
import { Ch12 } from './ch12';
import { Ch2 } from './ch2';
import { Ch21 } from './ch21';
import { Ch3 } from './ch3';
import { Ch4 } from './ch4';
import { Ch5 } from './ch5';
import { Ch51 } from './ch51';
import { Ch52 } from './ch52';
import { Ch6 } from './ch6';
import { Ch61 } from './ch61';
import { Ch62 } from './ch62';
import { Ch63 } from './ch63';
import { Ch7 } from './ch7';
import { Ch71 } from './ch71';
import { Ch8 } from './ch8';
import { Ch81 } from './ch81';
import { Ch82 } from './ch82';
import { Ch83 } from './ch83';
import { Ch9 } from './ch9';
import { Ch91 } from './ch91';
import { Ch92 } from './ch92';
import { Ch10 } from './ch10';



export class Lectures extends Component {
    render() {
        return (
            <div>
            <Router>
                <Switch>
                <Route path="/lectures/ch1" component={Ch1}></Route>
                <Route path="/lectures/ch11" component={Ch11}></Route>
                <Route path="/lectures/ch12" component={Ch12}></Route>
                <Route path="/lectures/ch2" component={Ch2}></Route>
                <Route path="/lectures/ch21" component={Ch21}></Route>
                <Route path="/lectures/ch3" component={Ch3}></Route>
                <Route path="/lectures/ch4" component={Ch4}></Route>
                <Route path="/lectures/ch5" component={Ch5}></Route>
                <Route path="/lectures/ch51" component={Ch51}></Route>
                <Route path="/lectures/ch52" component={Ch52}></Route>
                <Route path="/lectures/ch6" component={Ch6}></Route>
                <Route path="/lectures/ch61" component={Ch61}></Route>
                <Route path="/lectures/ch62" component={Ch62}></Route>
                <Route path="/lectures/ch63" component={Ch63}></Route>
                <Route path="/lectures/ch7" component={Ch7}></Route>
                <Route path="/lectures/ch71" component={Ch71}></Route>
                <Route path="/lectures/ch8" component={Ch8}></Route>
                <Route path="/lectures/ch81" component={Ch81}></Route>
                <Route path="/lectures/ch82" component={Ch82}></Route>
                <Route path="/lectures/ch83" component={Ch83}></Route>
                <Route path="/lectures/ch9" component={Ch9}></Route>
                <Route path="/lectures/ch91" component={Ch91}></Route>
                <Route path="/lectures/ch92" component={Ch92}></Route>
                <Route path="/lectures/ch10" component={Ch10}></Route>

   
                <div>
                <Link to={"/lectures/ch1"} className="q"> Лекция №1. Классификация способов бурения шпуров и скважин. Вращательный способ бурения. Вращательно-ударный способ бурения. </Link> <br/>
                <Link to={"/lectures/ch2"} className="q">Лекция №2. Ударно-вращательный способ бурения. Шарошечный способ бурения. </Link><br/>
                <Link to={"/lectures/ch3"} className="q"> Лекция №3. Огневое бурение. Взрывобурение. </Link><br/>
                <Link to={"/lectures/ch4"} className="q"> Лекция №4. Комбинированные способы бурения. </Link><br/>
                <Link to={"/lectures/ch5"} className="q"> Лекция №5. Закономерности разрушения горных пород зубьями буровых инструментов.  </Link><br/>
                <Link to={"/lectures/ch6"} className="q"> Лекция №6. Физика разрушения пород при внедрении в них зубьев буровых инструментов. </Link><br/>
                <Link to={"/lectures/ch7"} className="q"> Лекция №7. Сопротивление пород внедрению зубьев. </Link><br/>
                <Link to={"/lectures/ch8"} className="q"> Лекция №8. Глубина внедрения зубьев инструмента в породу при ударно-вращательном способе бурения. </Link><br/>
                <Link to={"/lectures/ch9"} className="q"> Лекция №9. Скорость ударно-вращательного способа бурения. Буримость горных пород при ударно-вращательном способе бурения. Рекомендации по области применения разных схем нагружения буровых инструментов при ударно-вращательном способе бурения. </Link><br/>
                <Link to={"/lectures/ch10"} className="q"> Лекция №10. Взаимодействие с породой зубьев шарошечного долота при шарошечном способе бурения. </Link><br/>
                <Link to={"/lectures/ch11"} className="q"> Лекция №11. Скорость бурения шарошечными долотами.  </Link><br/>
                <Link to={"/lectures/ch12"} className="q"> Лекция №12. Энергоемкость шарошечного бурения. Рекомендации по оптимизации применения шарошечного бурения. </Link><br/>
                <Link to={"/lectures/ch13"} className="q"> Лекция №13. Физика разрушения породы резцами при вращательном способе бурения. </Link><br/>
                <Link to={"/lectures/ch14"} className="q"> Лекция №14. Силовое взаимодействие резцов коронок с породой при вращательном способе бурения. </Link><br/>
                <Link to={"/lectures/ch15"} className="q"> Лекция №15. Скорость вращательного бурения и особенности разрушения пород. Рекомендации по оптимизации применения вращательного бурения. </Link><br/>
                <Link to={"/lectures/ch16"} className="q"> Лекция №16. Скорость и особенности разрушения пород при ударно-вращательном способе бурения. </Link><br/>
                <Link to={"/lectures/ch17"} className="q"> Лекция №17. Физика разрушения породы при ударно-шарошечном способе бурения. </Link><br/>
                </div>
                </Switch>
            </Router>
            </div>
        )
    }
}

export default Lectures;