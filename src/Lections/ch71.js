import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export class Ch71 extends Component {
    render() {
        return (
            <div>
                <h1 className="content-c-name">
                    СИЛА ВЗАИМОДЕЙСТВИЯ ЗУБА С ПОРОДОЙ ПРИ ОБРАТНОМ ХОДЕ
                </h1>
                <p>
                    При внедрении зуба бурового инструмента на глубину <i>h<sub>в</sub></i>, при силе его воздействия на
                    породу <i>F<sub>сопр</sub></i>, кроме разрушения последней, происходит и ее упругое деформирование.
                    Поэтому по окончании внедрения зуба в породу и начавшемся затем выходе зуба из
                    лунки дробления будет происходить и упругая разгрузка породы. При этом будет
                    происходить и уменьшение силы взаимодействия зуба с породой. Из теоретических
                    решений, приведенных в лекции 6, следует, что величина Ur — упругого перемещения
                    частиц породы под центром внедряющегося зуба, (при <span className="xov">r </span> = 1 и 𝜃 = -0,5&pi;) составляет
                </p>
                <p> <img src="/img/f33.png" alt=""/>
                    <div className="content-c-texts-fl">
                        ( 7.12 )</div>

                </p>
                <p> При подстановке в формулу (7.12) численных значений <i>A<sub>k</sub></i> и <i>B<sub>k</sub></i> соответствующих реальным формам
                    лунок дробления породы, для <i>U<sub>r</sub></i> получены значения <i>U<sub>r</sub> = (0,28 ÷ 0,33) <i>h<sup>max</sup><sub>в</sub></i></i>. В экспериментальных
                    исследованиях взаимодействия зуба шарошечного долота с породой, выполненных в
                    60-е годы XX в. в ИГД им. А.А. Скочинского Л.И. Бароном, Л.Б. Глатманом и др.,
                    было установлено, что, действительно, при обратном ходе зуба шарошечного долота
                    его сила взаимодействия с породой достаточно быстро (быстрее, чем по линейному
                    закону) убывает с уменьшением <i>h<sup>об</sup><sub>в</sub></i> и становится равной нулю при <i>h<sup>об</sup><sub>в</sub></i> ≅ 0,7<i>h<sup>max</sup><sub>в</sub></i>. Аналогичные
                    результаты приблизительно в это же время были получены и в МГГУ Кутузовым Б.Н.,
                    Федоровым В.Р. при участии Крюкова Г.М. при изучении процессов разрушения породы
                    зубьями буровых инструментов под действием импульсов напряжений. Эти
                    исследования проводились для установления закономерностей разрушения горных
                    пород при ударно-вращательном способе бурения шпуров и скважин. При этом удалось
                    надежно зафиксировать силу взаимодействия <i>F<sub>вз</sub></i> зуба с породой после окончания
                    действия импульса напряжений на зуб.
                </p>
                <p> Оказалось, что зависимость <i>F<sub>вз</sub></i> от <i>h<sup>об</sup><sub>в</sub></i> убывает почти
                    по квадратичному закону и оканчивается при <i><span className="xov">h</span><sup>об</sup><sub>в</sub></i> ≅ 0,7, 
                    где <i><span className="xov">h</span><sup>об</sup><sub>в</sub></i> = <i>h<sup>об</sup><sub>в</sub></i>/<i>h<sup>max</sup><sub>в</sub></i>, (рис. 7.5). 
                </p>
                <p> Обобщая эти
                    результаты и результаты экспериментов других исследователей, автором, с учетом
                    приведенного выше теоретического анализа, установлено следующее соотношение для
                    силового взаимодействия зуба с породой при его выходе из лунки разрушения
                </p>
                <p> <img src="/img/img75.png" alt=""/>
                    
                    <i>Рис. 7.5. Зависимость силы от, при внедрении зуба в породу и при его обратном ходе
                    (отскоке)</i>
                </p>
                <p> <img src="/img/f34.png" alt=""/>
                <div className="content-c-texts-fl">
                    ( 7.13 )</div>

                </p>
                <p> где <i>F<sup>max</sup><sub>сопр</sub></i> — максимальная сила сопротивления породы внедрению в нее
                    зуба бурового инструмента; <i><span className="xov">h</span><sup>об</sup><sub>в</sub></i> = <i>h<sup>об</sup><sub>в</sub></i>/<i>h<sup>max</sup><sub>в</sub>
                    </i> — относительная величина уменьшения глубины внедрения
                    зуба в породу при выходе его из лунки разрушения; <i>h<sup>max</sup><sub>в</sub></i> — максимальная глубина
                    внедрения зуба в породу, соответствующая <i>F<sup>max</sup><sub>сопр</sub></i>; <i>h<sup>об</sup><sub>в</sub></i> — глубина нахождения (положения) зуба
                    в породе при обратном его ходе и уменьшающаяся от <i>h<sup>max</sup><sub>в</sub></i> до 0,7<i>h<sup>max</sup><sub>в</sub></i>.
                </p>
                <div className="content-c-texts-fl">
                    <Link to="/task/test7" className="q">
                        Перейти к тесту >>
                    </Link>
                </div>
            </div>
        )
    }
}