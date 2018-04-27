import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export class Ch82 extends Component {
    render() {
        return (
            <div>
                <h1 className="content-c-name">
                    Глубина внедрения зубьев инструмента в породу при его нагружении
                    выноснымипневмо- и гидроударниками
                </h1>
                <p>
                    Этот способ бурения широко применяется в настоящее время как на открытых, так и
                    при подземных работах. Наибольшеераспространение получили станки типа Ranger
                    (Тамрок) и Roc (AtlasСорсо) для бурения шпуров и скважин диаметром от 43 до200
                    мм. На них применяются мощные гидроперфораторы и пневмоударники, генерирующие в
                    штангах посредством удара импульсы напряжений длиной от 1 до 1,5 м с энергией от
                    200 до 600 Дж. Причем удельная энергия удара, приходящаяся на 1 см<sup>2</sup> площади
                    забоя, составляет от 6 до 10 Дж/см<sup>2</sup>.
                </p>
                <p> Наконечник буровой коронки армируется
                    обычно вставками из твердого сплава с клиновидными или сферическими формами
                    рабочих поверхностей. На наконечнике эти вставки размещаются пропорционально
                    площади разрушаемого участка забоя, что обеспечивает одинаковую степень
                    разрушения всей поверхности забоя за один оборот бурового инструмента. При этих
                    условиях сила сопротивления пород внедрению в них зубьев буровых инструментов
                    описывается соотношением типа (7.5) или (7.8).
                </p>
                <p> Выполним одну оценку. Пусть
                    бурение взрывной скважины диаметром 76 мм осуществляется в породах крепостью <i>f</i> = 12
                    станком Ranger-500 с энергией удара <i>A<sub>уд</sub> = 400 Дж</i>  и частотой <i>n<sub>1</sub> = 38 c<sup>-1</sup></i>, так что ударная мощность станка
                    составляет <i>N<sub>уд</sub> = 15,2 кВт</i>. Используются коронки Retrac диаметром 76 мм, армированные шестью
                    зубьями диаметром 12 мм и четырьмя зубьями диаметром 10 мм, имеющими сферическую
                    форму рабочей поверхности. Параметр <i>B<sub>Σ</sub></i> для зубьев диаметром 12 мм имеет 
                    значение <i>B<sub>1</sub> =1,2<small>∙</small>10<sup>2</sup>&pi;<small>∙</small>1<small>∙</small>10<sup>9</sup> = 3,77 <small>∙</small>10<sup>7</sup></i>
                    Н/м, а для зубьев диаметром 10 мм — <i>B<sub>2</sub></i> = 3,14<small>∙</small>10<sup>7</sup> Н/м. 
                    Таким образом, <i>B<sub>Σ</sub></i> — общий параметр для всех
                    зубьев коронки, <i>B<sub>Σ</sub></i> = 6<i>B<sub>1</sub></i> + 4<i>B<sub>2</sub></i> = 3,519<small>∙</small>10<sup>8</sup>Н/м. 
                </p>
                <p> Приближенно глубину внедрения зубьев в породу можно оценить
                    по формуле 
                </p>
                <p> <img src="/img/f401.png" alt=""/>
                <div className="content-c-texts-fl">( 8.6 )</div>
                </p>
                <p>
                    где η = 0,8 — КПД использования энергии удара на разрушение породы
                    (ниже будет показано, как рассчитывается эта величина).
                </p>
                <p> Оценка <i>h<sub>в</sub></i>, по (8.6)
                    показывает, что глубина внедрения зубьев коронки в породу больше <i>h<sub>в2</sub></i> = 1 мм. Значит, в
                    рассматриваемом случае имеет место третий, наиболее эффективный процесс
                    разрушения породы зубьями буровой коронки.
                </p>
                <p> При подземных работах в России для
                    бурения шпуров и скважин при очистных работах, проходке выработок и для других
                    технологических целей применяются различные модификации установок типа УБШ
                    российского производства, оснащенные как пневматическими перфораторами, так и
                    мощными гидроударниками. Кроме того, для выполнения этих работ могут быть
                    использованы станки зарубежного производства типа Микродрилл (ЭкипманМинье,
                    Франция); Миниматик (Тамрок, Финляндия); BW32R (Зальгиттер, ФРГ) и т.д. Эти
                    машины оснащены гидроударниками разных фирм и позволяют бурить шпуры и скважины
                    диаметром от 28 до 64 мм.
                </p>
                <p> На открытых работах длины штанг обычно составляют 3,6
                    м, при подземных работах — 1 — 1,5 м. Длины же скважин в первом случае могут
                    достигать 10 — 15 м, а шпуров во втором случае — 4 — 5 м. Поэтому приходится
                    применять составные штанги, соединяющиеся между собой специальными муфтами с
                    веревочной резьбой.
                </p>
                <p> Рассмотрим более подробно процесс внедрения в породу зубьев
                    буровой коронки Retrac для рассмотренного выше примера. Диаметр штанги,
                    применяемой в этом случае, равен 44 мм, а площадь ее сечения с учетом
                    внутреннего канала для подачи воздуха на забой <i>S<sub>ш</sub></i> = 1,4<small>∙</small>10<sup>-3</sup>м<sup>2</sup>
                    . Пусть длина импульса <i>l<sub>им</sub></i>,
                    генерированного в штанге, равна 1 м, импульс имеет прямоугольную форму, а
                    скорость частиц <i>V<sub>n</sub></i>  в импульсе равна 6 м/с. При этих данных напряжение сжатия в
                    импульсе   <i>σ = ρC<sub>1</sub>V<sub>n</sub> = 7,8<small>∙</small>10<sup>3</sup><small>∙
                    </small>5,2<small>∙</small>10<sup>3</sup><small>∙</small>6 = 2,434<small>∙
                    </small>10<sup>8</sup></i> Па, где <i>ρ</i> = 7,8<small>∙</small>10<sup>3</sup> кг/м<sup>3
                    </sup> — плотность стали; С<sub>1</sub> — скорость распространения продольных
                    волн по штанге, равная 5,2<small>∙</small>10<sup>3</sup> м/с. Напряжение σ существенно
                     меньше предела текучести τ инструментальной стали, применяемой для изготовления буровых штанг.
                </p>
                <p> Полная энергия импульса 
                </p>
                <p> <img src="/img/f41.png" alt=""/>
                <div className="content-c-texts-fl">( 8.7 )</div>
                </p>
                <p> Будем считать, что инструмент плотно прижат к забою.
                    Схема его нагружения представлена на рис. 8.1, б. Как только импульс напряжений
                    дойдет до наконечника, так его зубья начнут внедряться в породу. Для
                    приближенной оценки процесса внедрения зубьев в породу воспользуемся волновой
                    теорией Сен-Венана. При внедрении зубьев на некоторую глубину <i>h</i> сила сопротивления
                    породы <i>F<sub>сопр</sub> = Bh</i>, так что в отраженном от наконечника импульсе скорости частиц штанги <img src="/img/f42.png" alt=""/>
                    Следовательно, абсолютная скорость внедрения зубьев в породу составляет 
                </p>
                <p> <img src="/img/f43.png" alt=""/>
                <div className="content-c-texts-fl">( 8.8 )</div>
                </p>
                <p> где D = <i>B<sub>Σ</sub>/SρC<sub>1</sub></i>. 
                </p>
                <p> 
                    Начальными условиями для уравнения (8.8) являются:
                </p>
                <p> <i>V<sub>a</sub></i>|<i><sub>t=0</sub> = 2V<sub>n</sub>; h</i>|<i><sub>t=0</sub></i>. 
                    <div className="content-c-texts-fl">( 8.9 )</div>
                </p>
                <p>
                    Решение уравнения (2.6.8) при ус имеет следующий вид: 
                </p>
                <p> <img src="/img/f44.png" alt=""/>
                <div className="content-c-texts-fl">( 8.10 )</div>
                </p>
                <p> Длительность импульса <i>t<sub>им</sub> = l<sub>им</sub>/C<sub>1</sub> = 1,923<small>∙</small>10<sup>4</sup></i>с.
                </p>
                <p> Подставив в соотношения (8.8) — (8.10) конкретные значения
                    параметров рассматриваемого примера, найдем
                </p>
                <p> <img src="/img/f45.png" alt=""/>
                </p>
                <p>
                 Таким образом, под действием рассматриваемого импульса напряжений с σ = 2,434<small>∙</small>10<sup>8</sup> Па
                  зубья коронки внедряются в породу на глубину <i>h<sub>в</sub></i> = 1,346мм,
                   совершив работу по ее разрушению 
                </p> 
                <p> <i>A<sub>раз</sub> = 0,5B<sub>Σ</sub>h<sub>в</sub><sup>2</sup></i> = 318,8Дж. 
                </p>
                <p> При этом КПД использования
                    энергии импульса на разрушение породы будет иметь следующее значение: 
                </p>
                <p> 
                    <i>η = A<sub>раз</sub>/A<sub>уд</sub></i> = 316/393 = 0,811
                    <div className="content-c-texts-fl">( 8.11 )</div>
                </p>
                <p>
                    Значения КПД использования энергии импульсов напряжений на разрушение породы при
                    разных их длинах <i>l<sub>им</sub></i>, рассчитанные по формулам (8.7) — (8.11), сохранив неизменными
                    все остальные параметры (V<sub>n</sub>, B<sub>Σ</sub>, S, ρ, C<sub>1</sub>):
                </p>
                <p> <img src="/img/f46.png" alt=""/>
                </p>
                <p> Расчетные значения показывают, что при
                    рассматриваемом ударно-вращательном способе бурения шпуров и скважин максимально
                    возможное значение h достигает 0,814 при Dt = 1,25. Теоретические значения КПД при
                    действии на наконечник прямоугольного импульса напряжений определяются
                    соотношением 
                </p>
                <p> <i>η = 2(1-e<sup>-Dt</sup>)<sup>2</sup>/Dt</i>. 
                    <div className="content-c-texts-fl">( 8.12 )</div>
                </p>
                <p> В рассматриваемых буровых машинах действительно КПД не
                    превышает 0,81 при бурении шпуров и скважин с использованием только одной —
                    первой штанги. Выше уже отмечалось, что как на открытых, так и при подземных
                    горных работах глубина шпуров и скважин может превышать длину штанг буровых
                    станков и установок в 3 — 4 и более раз. При этом на каждом соединении штанг
                    амплитуда импульсов напряжений уменьшается на 2 — 5 %. Вследствие этого
                    происходит снижение КПД использования энергии импульсов (удара) на разрушение
                    породы до значений порядка 0,6 и менее при четырех — пяти соединениях штанг.<i>
                    Поэтому область применения рассматриваемой схемы нагружения буровых инструментов
                    при ударно-вращательном способе бурения шпуров и скважин обычно ограничена
                    четырьмя-пятью наращиваниями штанг. </i>
                </p>
                <p> Чтобы избавиться от этого недостатка и иметь
                    возможность эффективно бурить скважины без существенных потерь энергии удара по
                    мере увеличения их глубины необходимо, очевидно, использовать буровой снаряд, в
                    котором осуществлялось бы ударное нагружение только бурового инструмента
                    (коронки). Такие схемы нагружения буровых инструментов были разработаны с
                    применением погружных пневмо- и гидроударников. Процессы передачи энергии от
                    поршня-ударника буровому инструменту и внедрение зубьев последнего в породу при
                    этой схеме нагружения инструментов будут рассмотрены ниже.
                </p>
                <Link to="/lectures/ch81" className="q">
                    Назад
                </Link>
                <div className="content-c-texts-fl">
                    <Link to="/lectures/ch83" className="q">
                        Далее >>
                    </Link>
                </div>
            </div>
        )
    }
}