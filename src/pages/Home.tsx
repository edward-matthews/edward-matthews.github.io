import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MetaTags from '../components/MetaTags';

const Home: React.FC = () => {
    return (
        <>
            <MetaTags
                title="EdwardMatthe.ws"
                description="My name is Edward Matthews. I am a South West England-based full stack web developer specialising in Django and React. I build responsive websites with robust backends to high standards, using HTML5, CSS3, JavaScript and Python."
                thumbnail="https://edwardmatthe.ws/logo.png"
                url="/"
            />
            <Row>
                <Col>
                    <h1>Tum mihi Piso: Quid ergo?</h1>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <mark>Ita nemo beato beatior.</mark>{' '}
                        Quae quo sunt excelsiores, eo dant clariora indicia naturae.{' '}
                    </p>

                    <h2>Non risu potius quam oratione eiciendum?</h2>

                    <p>
                        Dicam, inquam, et quidem discendi causa magis, quam quo te aut Epicurum reprehensum velim.{' '}
                        <b>Quoniam, si dis placet, ab Epicuro loqui discimus.</b> Hoc ne statuam quidem dicturam pater
                        aiebat, si loqui posset. <i>Duo Reges: constructio interrete.</i> Dic in quovis conventu te
                        omnia facere, ne doleas. Hanc ergo intuens debet institutum illud quasi signum absolvere. Dolere
                        malum est: in crucem qui agitur, beatus esse non potest.{' '}
                    </p>

                    <h3>Bonum incolumis acies: misera caecitas.</h3>

                    <p>
                        Hoc dictum in una re latissime patet, ut in omnibus factis re, non teste moveamur. Nunc ita
                        separantur, ut disiuncta sint, quo nihil potest esse perversius. <b>Non igitur bene.</b> An ea,
                        quae per vinitorem antea consequebatur, per se ipsa curabit? <mark>Sed nimis multa.</mark> Ut
                        nemo dubitet, eorum omnia officia quo spectare, quid sequi, quid fugere debeant?{' '}
                        <mark>Nam quid possumus facere melius?</mark>{' '}
                    </p>

                    <blockquote cite="http://loripsum.net">
                        Si est nihil in eo, quod perficiendum est, praeter motum ingenii quendam, id est rationem,
                        necesse est huic ultimum esse virtute agere;
                    </blockquote>

                    <ol>
                        <li>Quamquam te quidem video minime esse deterritum.</li>
                        <li>Hoc est non modo cor non habere, sed ne palatum quidem.</li>
                        <li>Potius inflammat, ut coercendi magis quam dedocendi esse videantur.</li>
                        <li>Si enim ad populum me vocas, eum.</li>
                        <li>Illud dico, ea, quae dicat, praeclare inter se cohaerere.</li>
                    </ol>

                    <h4>Certe nihil nisi quod possit ipsum propter se iure laudari.</h4>

                    <p>
                        Tu quidem reddes; Ut in geometria, prima si dederis, danda sunt omnia. Videmus igitur ut
                        conquiescere ne infantes quidem possint. Sed ne, dum huic obsequor, vobis molestus sim.{' '}
                    </p>

                    <ul>
                        <li>Sit sane ista voluptas.</li>
                        <li>Istic sum, inquit.</li>
                        <li>
                            Itaque e contrario moderati aequabilesque habitus, affectiones ususque corporis apti esse ad
                            naturam videntur.
                        </li>
                        <li>Si quicquam extra virtutem habeatur in bonis.</li>
                    </ul>

                    <p>
                        In his igitur partibus duabus nihil erat, quod Zeno commutare gestiret. Serpere anguiculos, nare
                        anaticulas, evolare merulas, cornibus uti videmus boves, nepas aculeis. Eiuro, inquit adridens,
                        iniquum, hac quidem de re; Ea, quae dialectici nunc tradunt et docent, nonne ab illis instituta
                        sunt aut inventa sunt? <mark>Sed nimis multa.</mark>{' '}
                    </p>
                </Col>
            </Row>
        </>
    );
};

export default Home;
