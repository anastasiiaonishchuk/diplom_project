import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export class Ch12 extends Component {
    render() {
        return (
            <div>
                <h1 className="content-c-name">
                    Вращательно-ударный способ бурения
                </h1>
                <p>
                    Этот способ нашел применение, только при подземных работах, для бурения коротких
                    шпуров в породах крепостью 𝒇 > 4. При этом способе процесс бурения
                    осуществляется с применением следующих режимных параметров: <i><b>Р<sub>ос</sub>, М<sub>кр</sub>, n, А<sub>уд</sub>,
                    n<sub>1</sub></b></i> с промывкой шпуров водой (режимный параметр q<sub>2</sub>), а иногда и с продувкой
                    воздухом (режимный параметр Q).
                </p> 
                <p> Физическая сущность процесса разрушения породы
                    зубьями буровых инструментов при это м способе бурения состоит в следующем. Под
                    действием кратковременной ударной нагрузки А<sub>уд</sub> на инструмент его зубья
                    внедряются в породу на глубину h<sub>в</sub>, которая оценивается по формуле 
                    <p>
                    <img src="/img/f35.png" alt=""/>

                    <div className="content-c-texts-fl"> (2.1.5)</div> </p>где η — КПД использования энергии удара <b><i>А<sub>уд</sub></i></b> на внедрение
                    зубьев в породу (составляет обычно 0,5 ÷ 0,6); B<sub>∈</sub> — суммарная жесткость
                    породы внедрению в нее всех зубьев инструмента, Н/м. 
                </p>
                <p> Постоянно действующее
                    осевое усилие <i><b>Р<sub>ос</sub></b></i>, недостаточное для эффективного внедрения зубьев в породу,
                    тем не менее, обеспечивает надежное удержание зубьев на глубине <i>h<sub>в</sub></i>, после
                    действия на них ударной нагрузки <i><b>А<sub>уд</sub></b></i>. Постоянно действующий момент <i>М<sub>кр</sub></i> создает
                     значительное горизонтальное усилие воздействия зубьев на породу,
                    приводящее в некоторый момент к сколу ее кус ков толщиной <i>h<sub>ст</sub></i>. После сколов
                    кусков породы инструмент под действием <i><b>М<sub>кр</sub></b></i> начинает быстро поворачиваться
                    вокруг своей оси, пока вновь не произойдет воздействие ударной нагрузки на
                    инструмент и новое внедрение его зубьев в породу на глубину <i>h<sub>в</sub></i>.
                </p>
                <p> <i>Таким образом,
                    при вращательно - ударном способе бурения разрушение породы происходит
                    циклически за счет:</i> 
                    <ul>
                        <li>динамического внедрения <i><b>А<sub>уд</sub></b></i> в нее зубьев буровых
                    инструментов;</li>
                        <li>скола кусков породы под действием крутящего момента <i><b>М<sub>кр</sub></b></i> на
                    инструмент.</li>
                    </ul>
                </p>
                <p> Осевая же нагрузка при этом способе <i><b>Р<sub>ос</sub></b></i> обеспечивает, во - первых,
                    плотное прижатие зубьев инструмента к забою и, во - вторых, удерживает их в
                    лунке разрушения после ударной на грузки. В этом случае <i><b>Р<sub>ос</sub></b></i> при прочих равных
                    условиях значительно меньше, чем это потребовалось бы, если бы применялся
                    вращательный способ бурения. Поэтому в одних и тех же породах при вращательно -
                    ударном способе бурения происходит значительно меньший износ зубьев инструмента,
                    чем при вращательном бурении. 
                </p>
                <p> Техническая скорость бурения при этом способе </p>
                    <p><i>V<sub>бур</sub> = k<sub>2</sub>nh<sub>стр</sub><sup>ср</sup></i>, м/с <div className="content-c-texts-fl"> (2.1.6)</div>
                </p>
                <p> где <i>h<sub>стр</sub><sup>ср</sup></i>— среднее значение толщины
                    скалываемой стружки за один оборот инструмента (определяется соотношением между
                    свойствами породы N, значениями осевой нагрузки <i><b>Р<sub>ос</sub></b></i> и энергии удара <i><b>А<sub>уд</sub></b></i>,
                    осуществляющей динамическое внедрение в породу зубьев бурового инструмента на
                    глубину <b><i>h<sub>в</sub></i></b>). 
                </p>
                <p> <i> Основным недостатком вращательно - ударного способа бурения
                    является значительная разница сопротивления пород вращению бурового инструмента
                    перед и после скола кусков породы, приводящая к значительным изменениям величины
                    энергии упругого деформирования кручения буровых штанг и, как следствие этого, к
                    существенным вибрациям всей системы: «штанга — буровой станок».</i> Это
                    обстоятельство не позволяет применять рассматриваемы й способ для бурения
                    глубоких шпуров и скважин. Для того чтобы избежать этого явления, необходимо
                    резко снизить сопротивление пород вращению бурового инструмента. Оно достигается
                    при ударно - вращательном способе бурения при существенном снижении <i><b>Р<sub>ос</sub></b></i>.
                </p>
                <Link to="/lectures/ch11" className="q">
                    Назад
                </Link>
                <div className="content-c-texts-fl">
                    <Link to="/task/test1" className="q">
                        Перейти к тесту >>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Ch12;