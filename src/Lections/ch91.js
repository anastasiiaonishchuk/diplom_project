import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export class Ch91 extends Component {
    render() {
        return (
            <div>
                <h1 className="content-c-name">
                    Буримость горных породпри ударно-вращательном способебурения
                </h1>
                <p>
                    Для рационального выбора и перспективной оценки целесообразности применения
                    разных технологий, способов и методов ведения горных работ был разработан ряд
                    классификаций горных пород. Классификация по крепости (предложенная в 1910 г.
                    М.М. Протодьконовым), по буримости (разработанная А.Ф. Сухановым и введенная в
                    СниП) и т.д. и соответствующие категории пород представлены в табл. 9.1.
                </p>
                <p> Профессор М.М. Протодьяконов за основу классификации пород по крепости принял в
                    веденный им критерий—<i>f = σ<sub>сж</sub>/(1<small>∙</small>10<sup>7</sup>Па)</i>, считая эталонными (базовыми) породы, предел прочности
                    которых на одноосное сжатие <i>f = σ<sub>сж</sub><sup>эт</sup>/(1<small>∙</small>10<sup>7</sup>Па)</i> (система СИ). При этом все горные породы по критерию
                    <i>f</i> были разделены им на 15 групп, каждой из которых была присвоена
                    соответствующая категория (см. табл. 9.1).
                </p>
                <p> По мере развития техники и технологий
                    ведения горных работ потребовались новые, более совершенные классификации пород.
                    Применительно к буровзрывным работам наибольшее признание получила классификация
                    горных пород по скорости ударно-вращательного бурения в них шпуров и скважин
                    бурильными молотками типа ПР-22 (ПР-20) при стандартных условиях.*
                </p>
                <p> В качестве
                    критерия буримости пород принимается скорость чистого бурения 1 м шпуров,
                    измеренная в мм/мин. Соответствующая классификация пород по буримости также
                    приведена в табл. 9.1. 
                </p> 
                <b>Сопоставление некоторых классификаций пород и расчетного коэффициента К<sub>vδ</sub></b>
                <div className="content-c-texts-fl"><i> Таблица 9.1</i></div>
                <table>
                    <tr>
                        <td rowspan = "2">
                        Группа пород по СНиП
                        </td>
                        <td colspan="2">Единая классификация по буримости (по А.Ф. Суханову)
                        </td>
                        <td colspan="2">Классификация по крепости (по М.М. Протодьяконову)
                        </td>
                        <td colspan = "4">Расчетные параметры</td>
                        <td rowspan="2">Уточненная клас- сификация по f</td>
                    </tr>
                    <tr>
                        <td>
                        Класс пород
                        </td>
                        <td>Скорость чистого бурения армиро- ванным буром, мм/мин</td>
                        <td>Кате- гория</td>
                        <td>Коэф- фицент крепости, f</td>
                        <td>σ<sub>ид</sub><small>∙</small>10<sup>8</sup>, Па</td>
                        <td>η</td>
                        <td>К<sub>vδ</sub></td>
                        <td>Отклонение от среднего К<sub>vδ</sub>,%,</td>
                    </tr>
                    <tr>
                        <td>XI</td>
                        <td>1<br/>2<br/>3</td>
                        <td>3<br/>40<br/>50</td>
                        <td>-<br/>-<br/>-</td>
                        <td>-<br/>-<br/>-</td>
                        <td>-<br/>-<br/>-</td>
                        <td>-<br/>-<br/>-</td>
                        <td>-<br/>-<br/>-</td>
                        <td>-<br/>-<br/>-</td>
                        <td>≥25<br/> 22,5 + 25<br/>20 + 25</td>
                    </tr>
                    <tr>
                        <td>X</td>
                        <td>4<br/>5</td>
                        <td>60<br/>75</td>
                        <td>I</td>
                        <td>20<br/>-</td>
                        <td>18,75<br/>-</td>
                        <td>0,741<br/>-</td>
                        <td>2,530<br/>-</td>
                        <td>+3,6<br/>-</td>
                        <td>18+20<br/>15,5+18</td>
                    </tr>
                    <tr>
                        <td>IX</td>
                        <td>4<br/>5</td>
                        <td>60<br/>75</td>
                        <td>I</td>
                        <td>20<br/>-</td>
                        <td>18,75<br/>-</td>
                        <td>0,741<br/>-</td>
                        <td>2,530<br/>-</td>
                        <td>+3,6<br/>-</td>
                        <td>18+20<br/>15,5+18</td>
                    </tr>

                </table>    
                <p> По (9.7) скорость ударно-вращательного бурения зависит
                    от:  режимных параметров бурения (параметры и N);  геометрических параметров
                    бурового инструмента и поршня-ударника (параметры );  физико-технических
                    свойств пород (параметры и ). При строго фиксированных условиях бурения шпуров
                    бурильными молоткамиПР-22 (имеющими выносной ударный узел) скорость бурения
                    будет по (9.7) зависеть только от значений параметров и для разных горных пород.
                    Однако извсех физико-технических свойств пород эти параметры зависят только от
                    (см. формулы (7.4); (7.5); (7.8); (8.12)). Напомним еще раз, что параметры и
                    определяются по следующим формулам: где — при внедрении в породу клиновидных
                    зубьев; — при внедрении в нее зубьев со сферической формой рабочей поверхности;
                    (9.8) где . В свою очередь критическое напряжение , соответствующее интенсивному
                    мелкодисперсному дроблению пород зубьями буровых инструментов зависит только от
                    f (и определено для , см. (6.22)). Значит, для строго детерминированных условий
                    опытного бурения шпуров бурильными молотками ПР-22 скорость бурения в
                    соответствии с разработанной теорией (см. (9.7) — (9.8)) будет зависеть только
                    от f — крепости пород по М.М. Протодьяконову. Для рассматриваемого бурильного
                    молотка ПР-22 максимальное значение имеет место при и соответствует , так что по
                    (9.8) для других значенийпараметры и определяются зависимостями: ; (9.9) .
                    (9.10) Соответствующая зависимость рассчитываемая по (9.10)для указанных условий
                    стандартного бурения шпуров бурильным молотком ПР-22 в породах разной крепости,
                    представлена на рис. 9.1 и в табл. 9.1. Учитывая установленные взаимосвязи,
                    соотношение (9.7) для скорости опытного бурения представлено в виде (9.11) Рис.
                    9.1 Зависимости и отпри опытном бурении шпуров бурильными молотками ПР-22: 1 — ;
                    2 — ; — опытные стандартные значения для пород разных классов по СНиП где
                    коэффициент имеет размерность кг с-3 (М Т-3 — система СИ) и является величиной
                    постоянной для рассматриваемогоопытного бурения бурильным молотком ПР-22,
                    поскольку определяется строго фиксированными как режимными параметрами бурения,
                    так и геометрическими параметрами бурового инструмента и поршня-ударника. Тем
                    самым соотношением (9.11) явно выделена зависимость скорости
                    ударно-вращательного способа бурения шпуров и скважин от крепости пород.
                    Используя результаты многочисленных измерений (см. табл. 9.1), установлено
                    значение коэффициента , равное 2,368*10+6, а теоретическая зависимость (9.11) с
                    погрешностью до ±10 % согласуется с опытными данными СНиПа во всем диапазоне
                    изменения , соответствующего значениям . При этом оказалось, что классификации
                    горных пород по буримости и по крепости f являются равнозначными, если уточнить
                    последнюю, так, как это представлено в табл. 9.1 и на рис. 9.1. Анализ
                    зависимости (9.11) и ее подтверждение опытными данными позволили сформулировать
                    ряд очень важных теоретических и практических выводов. 1. Полностью подтверждена
                    изложенная выше теория ударно-вращательного бурения шпуров и скважин в породах
                    крепостью . 2. Из всех физико-технических свойств горных пород на скорость
                    ударно-вращательного бурения в них шпуров и скважин оказывает влияние только
                    крепость пород f (по М.М. Протодьяконову). 3. Классификации горных пород по
                    крепости (по предлагаемой градации по параметру f) и по буримости равнозначны
                    при.
                </p>
                <Link to="/lectures/ch9" className="q">
                    Назад
                </Link>
                <div className="content-c-texts-fl">
                    <Link to="/lectures/ch92" className="q">
                        Далее >>
                    </Link>
                </div>
            </div>
        )
    }
}