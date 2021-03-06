import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export class Ch83 extends Component {
    render() {
        return (
            <div>
                <h1 className="content-c-name">
                    Глубина внедрения зубьев инструмента в породу при его нагружении погружными
                    пневмо- и гидроударниками
                </h1>
                <p>
                    Ударно-вращательный способ бурения взрывных скважин с ударным нагружением только
                    бурового инструмента осуществляется буровыми снарядами, состоящими из погружных
                    пневмо- или гидроударников и коронок. В этом случае поршень-ударник осуществляет
                    периодические удары по хвостовику коронок, длины которых составляют, обычно, 170
                    — 300 мм. Типичные конструкции погружного пневмоударника П-105 и соответствующей
                    коронки КНШ-105У представлены на рис. 8.2, а схемы размещения их в скважине и
                    нагружения инструмента на рис. 8.1, в.
                </p>
                <p> <img src="/img/img81.png" alt=""/>
                </p>
                <p>
                    <i>Рис. 8.2. Конструкции погружного
                    пневмоударника П-105 (а) и соответствующей ему коронки КНШ-105У (б):</i>
                </p><p><i> 1 – корпус;
                    2 – ударник; 3, 5, 7 – переходники; 4 – распределительная трубка; 6 – букса; 8 –
                    корпус коронки; 9, 10 – штыри твердого сплава</i>
                </p>
                <p> Характерной особенностью рассматриваемых
                    буровых снарядов является то, что, во-первых, поршень-ударник в пневмо-ударнике
                    имеет два участка с разными по величине площадями поперечных сечений: собственно
                    поршень сечением <i>S<sub>1уд</sub></i> и шток сечением <i>S<sub>2уд</sub></i>. 
                    Как правило, <i>S<sub>1уд</sub></i> в два и более раз превышает <i>S<sub>2уд</sub></i>,так
                    что 70 % всей энергии поршня-ударника передего ударом по коронке приходится на
                    первый участок —поршень и не более 30% — на второй участок — шток.
                </p>
                <p> Во-вторых, буровая коронка также имеет два участка, существенно отличающиеся по величине
                    площади поперечного сечения: это наконечник сечением <i>S<sub>1k</sub></i>,
                     армированный вставками твердого сплава — зубьями, и корпус сечением <i>S<sub>2k</sub></i>, причем 
                     <i>S<sub>1k</sub></i> в три и более раз может быть меньше <i>S<sub>2k</sub></i>. 
                </p>
                <p> Поэтому при ударе поршня по хвостовику коронки в последней сформируется
                    упругая волна сжатия, распространяющаяся со скоростью С<sub>1</sub>, в сторону наконечника.
                    Дойдя до последнего, эта волна сжатия частично пройдет в него и начнет
                    осуществлять внедрение зубьев в породу, а частично отразится от наконечника
                    волной сжатия, распространяющейся по корпусу в обратную сторону к штоку
                    поршня-ударника. Аналогичное частичное преломление на прошедшую в поршень волну
                    и частичное отражение волны обратно в шток будет иметь место и для волны сжатия,
                    сформировавшейся в штоке при его ударе по хвостовику коронки.
                </p>
                <p> При дальнейшем развитии процесса соударения поршня-ударника с коронкой и внедрения ее зубьев в
                    породу в результате многократных преломлений и отражений упругих волн во всех
                    частях соударяющихся элементов и взаимодействия зубьев коронки с породой в штоке
                    поршня ударника и корпусе коронки сформируется почти равномерное напряженное
                    состояние сжатия. Последние являются своего рода фильтром-демпфером между
                    поршнем-ударником и наконечником коронки.
                </p>
                <p> Рассчитаем энергию упругих деформаций
                    этой пары — шток поршня-ударника и корпус коронки, предполагая, что они
                    находятся под действием силы <i>F<sub>сопр</sub> = B<sub>Σ</sub>h<sub>в</sub></i> 
                    взаимодействия зубьев коронки с породой. Обозначим
                    через <i>l<sub>2уд</sub></i> длину штока, а через <i>l<sub>2крп</sub></i> — длину корпуса коронки.
                </p>
                <p> Площади их поперечных
                    сечений близки друг другу, поэтому при выполняемой оценке примем приближенно
                    <i>S<sub>2уд</sub></i> = <i>S<sub>2k</sub></i> = <i>S<sub>1</sub></i>. 
                    Следовательно, энергия упругих деформаций П1, этой пары при принятых
                    предположениях составляет 
                </p>
                <p> <img src="/img/f47.png" alt=""/>
                    <div className="content-c-texts-fl">( 8.13 )</div>
                </p>
                <p> где <i>l<sub>1</sub></i> = <i>l<sub>2уд</sub></i> + <i>l<sub>2крп</sub></i>.  
                </p>
                <p> Коэффициент использования энергии
                    единичного удара η с учетом только упругих деформаций штока и корпуса коронки
                    определяется по формуле 
                </p>
                <p> <img src="/img/f48.png" alt=""/>
                    <div className="content-c-texts-fl">( 8.14 )</div>
                </p><p> Для представленной на рис. 8.2 пары
                    «пневмоударник П-105—коронка КНШ-105У» геометрические параметры имеют следующие
                    значения: <i>l<sub>2крп</sub> = 130 мм; l<sub>2уд</sub> = 140мм; S<sub>2уд
                    </sub> = 1,257<small>∙</small>10<sup>-3</sup>м<sup>2</sup>; S<sub>2крп
                    </sub> = 1,365<small>∙</small>10<sup>-3</sup>м<sup>2</sup></i>; S<sub>1</sub> = 0,5(S<sub>2уд
                    </sub> + S<sub>2крп</sub>) = 1,31<small>∙</small>10<sup>-3</sup>м<sup>2</sup>; 
                    (значения S<sub>2крп</sub> и S<sub>2уд</sub> даны с учетом выточек, проточек и центрального отверстия в
                    корпусе и штоке). На наконечнике коронки размещены восемь периферийных зубьев
                    диаметром 13 мм; четыре зуба диаметром 10 мм и два зуба диаметром 9 мм, все со
                    сферической формой рабочей поверхности. Приняв, как и в предыдущем примере, <i>f</i> = 12, для
                    величины B<sub>Σ</sub> получим значение 
                </p>
                <p> B<sub>Σ</sub> = 1<small>∙</small>10<sup>9</sup>&pi;(8<small>∙</small>0,013 + 4<small>∙
                    </small>0,01 + 2<small>∙</small>0,009) = 5,09<small>∙</small>10<sup>8</sup>Н/м. 
                    <div className="content-c-texts-fl">( 8.15 )</div>
                </p>
                <p> При модуле Юнга стали <i>E</i> = 2<small>∙</small>10<sup>11</sup>Па получим 
                </p>
                <p> η = 1/(1 + 0,27<small>∙</small>5,09<small>∙</small>10<sup>8</sup>/
                    1,31<small>∙</small>10<sup>-3</sup><small>∙</small>2<small>∙</small>10<sup>11</sup>) = 0,66.
                    <div className="content-c-texts-fl">( 8.16 )</div>
                </p>
                <p> <i> Именно такие значения КПД (η = 0,64/0,68) имеют буровые снаряды при ударно-вращательном
                    способе бурения скважин с использованием погружных пневмо- и гидроударников.
                    Причем η практически не зависит от глубины бурения скважин L<sub>скв</sub> и имеет одинаковые
                    значения при L<sub>скв</sub> = 1м и при L<sub>скв</sub> > 1м и более.
                    </i>
                </p>
                <p> Так что <i>h<sub>в</sub></i> — глубина внедрения в породу зубьев
                    коронок при бурении скважин с помощью погружных пневмо- и гидроударников всегда
                    может быть рассчитана по формуле
                </p>
                <p> <i>h<sub>в</sub> = (2ηA<sub>уд</sub>/B<sub>Σ</sub>)<sup>0,5</sup></i> 
                    <div className="content-c-texts-fl">( 8.17 )</div>
                </p><p> Сопоставляя формулы (8.5), (8.6) и
                    (8.17), видим, что <i>для ударно-вращательного способа бурения при любой схеме
                    нагружения бурового инструмента разовая глубина внедрения его зубьев в 
                    породу h<sub>в</sub> описывается одной универсальной закономерностью (8.17), 
                    в которой от вида схемы
                    нагружения инструмента, глубины бурения скважин и от ряда других параметров
                    зависит только η.</i> 
                </p>
                <p> Напомним еще раз — бурение шпуров и скважин при рассматриваемом
                    ударно-вращательном способе осуществляется при действии на буровой инструмент
                    режимных параметров <i>Р<sub>ос</sub>, n, М<sub>кр</sub>, А<sub>уд</sub>, n<sub>1
                    </sub>, Q, q<sub>2</sub></i>. При этом Р<sub>ос</sub> и М<sub>кр</sub> имеют сравнительно небольшие значения и
                    обеспечивают: Р<sub>ос</sub> — плотное прижатие бурового инструмента к забою; 
                    М<sub>кр</sub>— вращательное
                    движение бурового снаряда с заданной частотой n, преодолевая силы трения бурового
                    снаряда о забой и штанг о стенки скважин.
                </p>
                <p>  Разрушение породы на забое происходит только за счет действия режимных параметров A
                    <sub>уд</sub> и n<sub>1</sub>. 
                </p> 
                <p> Очистка скважин в основном
                    осуществляется продувкой воздухом (Q), а в подземных условиях при бурении шпуров
                    онаможет осуществляться промывкой водой (q<sub>2</sub>).
                </p>
                <div className="content-c-texts-fl">
                    <Link to="/task/test8" className="q">
                        Перейти к тесту >>
                    </Link>
                </div>
            </div>
        )
    }
}