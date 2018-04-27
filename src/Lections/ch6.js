import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export class Ch6 extends Component {
    render() {
        return (
            <div>
                <h1 className="content-c-name">
                    Краткая историческая справка
                </h1>
                <p>
                    Одной из первых работ, посвященных теории разрушения пород при внедрении в них
                    зубьев буровых инструментов, является работа Н.С. Успенского (1909 г.). Он
                    считал, что при внедрении зуба клиновидной формы в породу в ней формируется
                    лунка разрушения, копирующая форму его рабочей поверхности. В породе на границе
                    ее контакта с зубом действуют напряжения 𝜎<sub>z</sub>. При этом сила сопротивления
                    породы внедрению в нее клиновидного зуба 
                </p>
                <p> <b>Р<sub>макс</sub> = k<sub>1</sub> 𝜎<sub>z</sub>𝜔<sub>0</sub>h<sub>в</sub>, 𝐻, </b>
                    <div className="content-c-texts-fl">( 6.1 )</div>
                </p>
                <p> где k<sub>1</sub> — коэффициент, зависящий от трения зуба с породой; 𝜎<sub>z</sub> —
                     некоторый предел прочности породы, Па; 𝜔<sub>0</sub> — эффективная площадка
                    взаимодействия зуба с породой, м<sup>2</sup>; h<sub>в</sub> — глубина внедрения зуба в породу. 
                </p>
                <p> В дальнейшем (30 — 50-е годы XX в.) появился целый ряд работ (Н.Н. Буланов, В.К.
                    Бучнев, В.Н. Кузьмин, А.И. Медведко, В.М. Мостков, М.Н. Назаров, И.А. Остроушко,
                    И.С. Покровский, А.Ф. Суханов, В.В. Царицын, Е.Ф. Эпштейн и др.) в которых
                    уточнялись значения всех параметров в ( 6 .1 ) и в соответствии с опытными
                    данными напряжению 𝜎<sub>z</sub>, придавались значения от 3 до 17𝜎<sub>сж</sub> в
                    зависимости от свойств (вида) пород и формы рабочей поверхности зуба бурового
                    инструмента.
                </p>
                <p> Несколько особняком от этих работ стоит модель процесса разрушения
                    пород внедряющимися клиновидными зубьями, предложенная Г.И. Сосуновым (1957 —
                    1959 гг.). 
                </p>
                <p>Учитывая начальный (первый) этап взаимодействия зубьев буровых
                    инструментов с породой (поверхностное истирание последней), он предложил
                    описывать этот процесс известным решением Бусинеска о статическом действии
                    сосредоточенной силы на непрерывную, однородную, изотропную и линейно - упругую
                    среду, занимающую все нижнее полупространство. Принимая в качестве критерия
                    прочности породы 𝜎<sub>сж</sub> и с читая, что его достигают в первую очередь напряжения
                    𝜎<sub>rr</sub> и им была получена почти круговая поверхность, как возможная
                    поверхность разрушения породы под зубом инструмента. Однако это решение
                    Бусинеска имеет неопределенность, заключающуюся в том, что h<sub>в</sub> — перемещение
                    силы по этому решению, равно бесконечности. Это типичная особенность всех
                    решений линейной теории упругости, по которой всегда во всех особых точках —
                    действие сосредоточенных сил, напряжения в угловых точках вырезов и т.д.
                    формируются бесконечные напряжения, деформации и перемещения. То есть, используя
                    решение Бусинеска, нельзя теоретически установить необходимую для практики
                    зависимость 
                </p>
                <p> <i>F<sub>сопр</sub></i> = f(h<sub>в</sub>).
                </p>
                <p> Для внедрившегося в пор оду клиновидного зуба Г.И.
                    Сосунов предложил использовать известное решение контактной задачи статической
                    теории упругости о взаимодействии абсолютно жесткого клина с непрерывной,
                    однородной, изотропной, линейно упругой средой, занимающей все нижнее
                    полупространство и имеющей клиновидный вырез, где и размещается упомянутый выше
                    жесткий клин. Деформируемая среда и клин имеют плотный контакт. Со стороны клина
                    на среду действует некоторая сила <b>F</b>. Приняв, что процесс разрушения в породе
                    наступает тогда, когда 𝜎<sub>rr</sub> = 𝜎<sub>сж</sub>, он установил, что форма лунки
                    разрушения по этой модели имеет вид греческой буквы 𝜔. В действительности же
                    форма лунки дробления породы под зубом имеет вид овала, а его средняя точка
                    имеет наибольшее удаление от острия клина, а не наименьшее (вплоть до нулевого),
                    как следует из его расчетов. Это направление теоретических расчетов дальнейшего
                    развития не получило. 
                </p>
                <p>В 50 — 70 - е годы XX в. были проведены многочисленные
                    попытки использовать известные решения контактных задач статической теории
                    упругости для описания процессов разрушения пород зубьями буровых инструментов.
                    Соответствующие взаимосвязи пытались использовать для решения различных техно
                    логических задач Е.В. Александров, В.Д. Андреев, Б.В. Байдюк, Б.А. Жлобинский,
                    М.Р. Мавлютов, Ю.И. Протасов, П.В. Пономарев, Ю.А. Розанов, В.Б. Соколинский,
                    Л.А. Шрейнер, Е.И. Эдельштейн, Р.М. Эйгелес и ряд других ученых и
                    производственников. Однако им удавалось получать только лишь некоторые
                    качественные результаты и то только для первого этапа взаимодействия зубьев
                    буровых инструментов с породой, соответствующего ее поверхностному истиранию и
                    началу второго этапа.
                </p>
                <p> В 60 — 70 - х годы XX в. Крюкову Г.М. удалось разработать
                    новую оригинальную теорию разрушения породы внедряющимися в нее зубьями буровых
                    инструментов и их силового взаимодействия с ней, удовлетворительно согласующихся
                    с данными экспериментальных исследований, опытно - промышленного и промышленного
                    бурения. Эта теория принята за основу при дальнейшем описании процессов
                    разрушения горных пород зубьями буровых инструментов при ударно - вращательном и
                    шарошечном способах бурения.

                </p>
                <div className="content-c-texts-fl">
                    <Link to="/lectures/Ch61" className="q">
                        Далее >>
                    </Link>
                </div>
                <div className="q"> &nbsp; </div>

            </div>
        )
    }
}