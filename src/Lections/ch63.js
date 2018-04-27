import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export class Ch63 extends Component {
    render() {
        return (
            <div>
                <h1 className="content-c-name">
                    Напряженно-деформированное состояние в породе при внедрении в нее зубьев буровых
                    инструментов (плоская задача)
                </h1>
                <p>Для принципиальной оценки характера распределений напряжений в породе под
                    внедряющимся зубом бурового инструмента приведем краткое изложение приближенного
                    решения плоской задачи о внедрении зуба в породу. Она соответствует внедрению в
                    породу бесконечно длинного зуба, контактирующего с ней одновременно по всей
                    длине и формирующего в по роде плоско - деформированное напряженное состояние.
                </p>
                <p>
                    Вводится полярная система координат <i>r</i> и 𝜃. 
                    Породе соответствуют значения -𝜋 ≤ 𝜃 ≤ 0, т.е. порода занимает нижнюю
                    полуплоскость и характеризуется параметрами 𝐸, 𝜇, 𝜎<sub>мл</sub>, 𝜎<sub>сж</sub>, 𝜎<sub>рес</sub>.
                </p>
                <p>
                    Скорость внедрения зуба направлена вдоль отрицательного на - правления оси У.
                </p>
                <p>
                    Зуб внедрился в породу на глубину между ним и еще не - разрушенной породой
                    имеется слой мелкораздробленных частиц (см. рис. 6.1), часть из которых,
                    плотноспрессованных, образует так называемое «ядро» и движется вместе с зубом.
                    Форма лунки дробления породы и напряжения в последней на поверхности этой лунки
                    неизвестны, а ее глубина равна h<sub>р</sub>.
                    На свободной поверхности породы, за исключением зоны контакта с ней зуба,
                    граничными условиями являются 𝜎<sub>𝑦𝑦</sub>=𝜎<sub>𝑦𝑥</sub>=𝜎<sub>𝑦𝑧</sub>=0, т.е. на свободной поверхности породы отсутствуют силы.
                </p>
                <p>
                    Распределение напряжений в породе под зубом квазистатическое.
                </p>
                <p>
                    <i>
                        Поставленная математическая задача имеет не определенность: неизвестны ни форма
                        лунки дробления под зубом долота, ни напряжения на ней, ни перемещения частиц
                        породы на границе лунки. Известно лишь то, что нормальные составляющие скоростей
                        мелкораздробленных частиц, выдавливаемых зубом из лунки разрушения и плотно
                        примыкающих к границе, равны нормальным составляющим скоростей частиц
                        неразрушенной породы на этой границе. Сама граница дробления предполагается ну
                        левой толщины, т.е. является поверхностью разрыва.
                    </i>
                </p>
                <p>
                    Глубина внедрения каждого сечения зуба одинакова и равна h<sub>в</sub>.
                </p>
                <p>
                    Применен метод Фурье для решения биквадратного уравнения для функции напряжений
                    Эри. Из всех частных решений для этой функции выбраны два типа:
                </p>
                <p>
                    четные –
                    <img src="/img/f15.png" alt=""/>
                </p>
                <p>
                    и нечетные –
                    <img src="/img/f16.png" alt=""/>
                </p>
                <p><img src="/img/f17.png" alt=""/>
                    <div className="content-c-texts-fl">
                        ( 6.7 )</div>
                </p>
                <p>
                    Где <big>
                        𝑟̅ = 𝑟/ℎ<sub>𝑝</sub>𝑟</big> и
                         𝜃 полярные координаты произвольной точки деформируемой породы <big>
                        𝑟̅ > 1, 𝜃 &lt; 0; 𝑘 = 1,2,….,𝐴<sub>𝑘</sub>𝐵<sub>𝑘</sub>
                    </big>
                    – произвольные числа.
                </p>
                <p>По формулам
                    <img src="/img/f18.png" alt=""/>
                </p>
                <p>
                    <img src="/img/f19.png" alt=""/>
                    <div className="content-c-texts-fl">
                        ( 6.8 )</div>
                </p>
                <p>рассчитывались напряжения, по которым в соответствии с обратной формой закона
                    Гука.
                </p>
                <p>
                    <img src="/img/f20.png" alt=""/>
                    <div className="content-c-texts-fl">
                        ( 6.9 )</div>
                </p>
                <p>рассчитывались деформации.
                </p>
                <p>
                    По ним в соответствии с соотношениями:
                </p>
                <p><img src="/img/f21.png" alt=""/>
                    <div className="content-c-texts-fl">
                        ( 6.10 )</div>
                    рассчитывались радиальная V<sub>r</sub> и азимутальная V<sub>𝜃</sub> скорости 
                    частиц неразрушенной породы, считая что
                </p>
                <p>
                    <img src="/img/f22.png" alt=""/>
                    <div className="content-c-texts-fl">
                        ( 6.11 )</div>
                </p>
                <p>По (6.7) – (6.11) для V<sub>r</sub> и V<sub>𝜃</sub> получились соотношения:
                </p>
                <p>
                    <img src="/img/f23.png" alt=""/>
                </p>
                <p>
                    где V - скорость внедрения зуба в породу в данный момент t, м/с;
                </p>
                <p>
                    <big>
                        𝑟̅ = 𝑟/a</big>
                </p>
                <p>
                    При этом учтено, что задача квазистатическая и других параметров, кроме
                    зависящих от времени решениях (6.7) нет.
                </p>
                <p>
                    Условием на поверхности дробления являлось соотношение</p>
                <p>
                    V<sup>др</sup>
                    <sub>n</sub>
                    = V<sup>пр</sup>
                    <sub>n</sub>
                    <div className="content-c-texts-fl">
                        ( 6.13 )</div>
                </p>
                <p>
                    где V<sup>др</sup>
                    <sub>n</sub>
                    - нормальная к поверхности дробления составляющая скорости мелкораздробленных
                    частиц породы, контактирующих с этой поверхностью, м/с; V<sup>пр</sup>
                    <sub>n</sub>
                    — нормальная к поверхности дробления составляющая скорости частиц неразрушенной
                    породы, м/с. Условие (2.3.13) в полярных координатах сводится к виду:
                </p>
                <p>
                    <img src="/img/f24.png" alt=""/>
                    <div className="content-c-texts-fl">
                        ( 6.14 )</div>

                </p>
                <p>
                    Задаваясь различными значениями коэффициентов А<sub>к</sub>, В
                    <sub>к</sub>, можно по (6.8) и (6.9) рассчитать напряженно - деформированное
                    состояние породы под зубом бурового инструмента в любой момент времени t, а по
                    (6.12) и (6.14) — формы соответствующих поверхностей дробления.
                </p>
                <p>
                    Рассмотрен процесс внедрения в породу зуба, симметричного относительно
                    вертикальной оси. В этом случае в точке <big>𝑟̅ = 1</big> и <big>𝜃 = -0,5𝜋</big> и 
                    имеют место соотношения:
                </p>
                <p>
                    <big>V<sub>𝜃</sub>
                        = 0; 𝜎<sub>𝑟𝜃</sub>
                        = 0; V<sub>𝑟</sub>
                        = 𝑉</big>.
                    <div className="content-c-texts-fl">
                        ( 6.15 )</div>
                </p>
                <p>
                    Из этих условий получено следующее соотношение для одного из коэффициентов:
                </p>
                <p>
                    <img src="/img/f25.png" alt=""/>
                </p>
                <p>Численные расчеты были выполнены при 𝜇 = 0,25, используя в рядах (6.7) по
                    пять первых членов. Всего расчеты были выполнены более чем для 50 различных
                    вариантов значений 𝐴<sub>𝑘</sub> и B<sub>𝑘</sub>.
                </p>
                <p>
                    Расчеты форм лунок дробления, напряженно - деформированных состояний породы и
                    возможных траекторий трещин представлены на рис. 6.2 и 6.3.
                </p>
                <p>
                <div className="img1">
                    <img src="/img/img62.png" alt=""/></div></p>
                <p>
                    <i>
                        Рис. 6.2. Схема распределения напряжений (вариант 38):</i>
                </p>
                <p>
                    <i>
                        1 — поверхность дробления; 2 — граница разных зон напряженно - деформированных
                        со стояний; 3 — «возможные» траектории трещин; 4 — свободная поверхность; 5 —
                        направления главных напряжений Рис. 6 .3. Схема распределения напряжений
                        (вариант 46); 1 — поверхность дробления; 2 — Гранина разных юн напряженно -
                        деформированных со стояний; 3 — «возможные» траектории трещин; 4 — свободная
                        поверхность; 5 — направле ния главных напряжений <big>𝜎<sub>2</sub>
                        </big>
                    </i>
                </p>
                <p>
                <div className="img1">
                    <img src="/img/img63.png" alt=""/></div></p>
                <p>
                    <i>Рис. 6.3. Схема распределения напряжений (вариант 46);</i>
                </p>
                <p>
                    1 — поверхность дробления; 2 — Гранина разных юн напряженно-деформированных
                    состояний; 3 — «возможные» траектории трещин; 4 — свободная поверхность; 5 —
                    направления главных напряжений <big>𝜎<sub>2</sub>
                    </big><i/>
                </p>
                <p>В соответствии с теорией напряжений <big>𝜎<sub>1</sub></big> и <big>𝜎<sub>2</sub>
                    </big>
                    — главные напряжения (взаимно перпендикулярны), поэтому если в некоторой точке
                    породы <big>𝜎<sub>1</sub></big>
                    достигнет предела прочности породы на растяжение <big>𝜎<sub>рас</sub>
                    </big>, то в этой точке возможно формирование трещины, плоскость которой буде т
                    совпадать с направлением главного напряжения <big>𝜎<sub>2</sub>
                    </big>.
                    <i>В связи с этим введено понятие «возможная траектория трещины», это —
                        траектория, на которой направления касательных в каждой точке совпадают с
                        направлением главного напряжения сжатия <big>𝜎<sub>2</sub>
                        </big>.</i>
                </p>
                <p>
                    Для определения характера распределения напряжений под зубом инструмента
                    рассчитывались следующие величины:
                </p>
                <p>
                    <img src="/img/f26.png" alt=""/>
                </p>
                <p>где <big>𝜎<sub>1</sub></big> - главное
                     наибольшее растягивающее напряжение, Па; <big>𝜎<sub>2</sub></big> - главное
                     сжимающее напряжение, Па; a - угол между <big>𝜎<sub>1</sub> </big> и <big>𝜎<sub>2</sub>
                    </big>.
                </p>
                <p>
                    В первом случае (см. рис. 6.2) при A<sub>1</sub>
                    = 1; A<sub>2</sub>
                    = -1∙10<sup>-1</sup>
                    ; A<sub>3</sub>
                    = -1∙10<sup>-2</sup>; A<sub>4</sub>
                    = -1∙10<sup>-3</sup>
                    ; A<sub>5</sub>
                    = -1∙10<sup>-4</sup>; B<sub>0</sub>
                    = 0,2; В<sub>1</sub>
                    = 0,963345 ; В<sub>2</sub>
                    = 1,3; B<sub>3</sub>
                    = 0,14; В<sub>4</sub>
                    = 0,012; B<sub>5</sub>
                    = 1∙10<sup>-4</sup>
                    ; 𝑎 = 103; ln 𝑎 = 6,2103
                </p>
                <p>
                    ширина лунки дробления приблизительно равна ее глубине.
                </p>
                <p>Во втором случае (см. рис. 6 .3) при A<sub>1</sub>
                    = -0,1; A<sub>2</sub>
                    = -1∙10<sup>-2</sup>
                    ; A<sub>3</sub>
                    = -1∙10<sup>-3</sup>; A<sub>4</sub>
                    = -1∙10<sup>-4</sup>
                    ; A<sub>5</sub>
                    = -1∙10<sup>-5</sup>; B<sub>0</sub>
                    = 0,05; В<sub>1</sub>
                    = 0,228753 ; В<sub>2</sub>
                    = 2∙10<sup>-2</sup>; B<sub>3</sub>
                    = 2∙10<sup>-3</sup>; В<sub>4</sub>
                    = 2∙10<sup>-4</sup>; B<sub>5</sub>
                    = 1∙10<sup>-5</sup>
                    ; 𝑎 = 103; ln 𝑎 = 6,2103
                </p>
                <p>
                    ширина лунки дробления составила ~ 0,6h<sub>p</sub>
                </p>
                <p>
                    Из выполненных численных расчетов выяснилось, что в по роде под внедряющимся
                    зубом формируются две разные зоны по ориентации возможных траекторий трещин. В
                    зоне I, примыкающей к поверхности дробления, возможные траектории трещин идут от
                    нее к свободной поверхности и описываются соотношением
                </p>
                <p>
                    <i>
                        r = r<sub>𝜃</sub>|cos𝜃|,</i>
                    <div className="content-c-texts-fl">
                        ( 6.20 )</div>
                </p>
                <p>
                    где r<sub>𝜃</sub> - значение
                     r при 𝜃 = 0, т.е. при выходе этой трещины на свободную поверхность.
                </p>
                <p>
                    В зоне II, расположенной между зоной I и свободной поверхностью, возможные
                    траектории трещин описываются соотношением
                </p>
                <p>
                    <i>r = r<sub>𝜃</sub>|sin𝜃|</i>
                    <div className="content-c-texts-fl">
                        ( 6.21 )</div>
                </p>
                <p>
                    и направлены вглубь породы. Причем r<sub>𝜃</sub>
                    соответствует значению r при 𝜃 = - 0,5𝜋, т.е. на отрицательной оси Y.
                </p>
                <p>
                    Сопоставление рис. 6.2 и 6.3 показывает, что по
                    <i>мере увеличения глубины лунки дробления (т.е. с увеличением глубины внедрения
                        зуба), происходит расширение зоны I и приближение возможных траекторий трещин в
                        этой зоне к свободной поверхности. Этот процесс происходит до тех пор, пока по
                        одной из этих траекторий не произойдет скол породы по краям лунки дробления.
                        После скола произойдет резкое уменьшение отклонения h<sub>p</sub>/h<sub>в</sub>
                        и уменьшение в породе зоны I с резким снижением вероятности скола. Однако при
                        продолжении внедрения инструмента в породу снова начнет увеличиваться зона I,
                        что в дальнейшем может привести к повторному сколу породы по краям лунки
                        дробления породы.</i>
                </p>
                <p>
                    Эти оценки впервые позволили понять физическую сущность цикличности сколов
                    породы по краям лунок дробления по мере внедрения в нее зубьев буровых
                    инструментов. Это первый главный вывод, который следует из результатов
                    выполненных теоретических оценок.
                </p>
                <p>
                    Кроме того, по расчетам получалось, что возможные траектории трещин на основной
                    части поверхности дробления почти перпендикулярны к ней. При этом главные
                    напряжения <b>𝝈<sub>𝟏</sub></b> и <b>𝝈<sub>𝟐</sub></b> и
                     имеют одинаковый порядок. Однако для горных пород предел прочности на 
                    растяжение <b>𝝈<sub>рас</sub></b> на 
                    порядок меньше их предела прочности на одноосное сжатие <b>𝝈<sub>сж</sub>
                    </b>. Значит, по
                    <i>«возможным траекториям трещин» будут первыми реализованы процессы разрушения
                        пород в виде микро - и макротрещин, исходящих внутрь породы от границы зоны ее
                        мелкодисперсного дробления и ориентированных перпендикулярно к ней.
                        Следовательно, по рода вблизи лунки мелкодисперсного дробления, разделенная
                        этими микро - и макротрещинами, ориентированными перпендикулярно к поверхности
                        дробления, будет находиться в условиях, близких к одноосному сжатию.</i>
                </p>
                <p>
                    Это второй очень важный вывод из теоретического рас смотрения задачи о внедрении
                    зуба бурового инструмента в по роду. При этом, если на границе лунки дробления
                    𝛔<sub>𝟐</sub> ≥ 𝛔<sub>мд</sub>, то в породе будет развиваться процесс ее интенсивного
                    мелкодисперсного дробления, такой же, какой наблюдается в лабораторных условиях
                    при одноосном сжатии образцов при сравнительно небольших отношениях h/l ≤ 1, где
                    h — высота образца; l — его поперечный размер. В результате проведения большого
                    количества экспериментальных лабораторных, опытных и опытно-промышленных
                    исследований при f ≥ 6 для σмдустановлено следующее соотношение:</p>
                <p>
                    σ<sub>мд</sub>
                    = 13 [l + 0,079 (f-15) + 0,0019] (f-15)<sup>2</sup>
                    <small>∙</small>10<sup>8</sup>, Па.<div className="content-c-texts-fl">
                        ( 6.22 )</div>
                </p>
                <div className="content-c-texts-fl">
                    <Link to="/task/test6" className="q">
                        Перейти к тесту >>
                    </Link>
                </div>
            </div>
        )
    }
}