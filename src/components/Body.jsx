
import "../style/body.css";
import { HashLink as Link} from "react-router-hash-link";
import { useState } from "react";
import { BiLogoWhatsapp, BiLogoGmail } from "react-icons/bi";

import logo from "../assets/logo_new.png"
import "icheck-bootstrap"
import { dataSoal } from "./data-soal";
import ProgressBar from 'react-bootstrap/ProgressBar';



const Body =()=> {

    const [currentQuestion, setCurrentQuestion] = useState(null);
    const [jawaban1, setJawaban1] = useState();
    const [jawaban2, setJawaban2] = useState();
    const [jawaban3, setJawaban3] = useState();
    const [jawaban4, setJawaban4] = useState(0);
    const [jawaban5, setJawaban5] = useState(0);
    const [jawaban6, setJawaban6] = useState(0);
    const [jawaban7, setJawaban7] = useState(0);
    const [jawaban8, setJawaban8] = useState(0);
    const [jawaban9, setJawaban9] = useState(0);
    const [jawaban10, setJawaban10] = useState(0);
    const [jawaban11, setJawaban11] = useState(0);
    const [jawaban12, setJawaban12] = useState(0);

    function addValue(value,noSoal) {
        switch(noSoal) {
            case 1:
                setJawaban1(value);   
                break;
            case 2:
                setJawaban2(value);
                break;
            case 3:
                setJawaban3(value);
                break;
            case 4:
                setJawaban4(value);
                break;
            case 5:
                setJawaban5(value);
                break;
            case 6:
                setJawaban6(value);
                break;
            case 7:
                setJawaban7(value);
                break;
            case 8:
                setJawaban8(value);
                break;
            case 9:
                setJawaban9(value);
                break;
            case 10:
                setJawaban10(value);
                break;
            case 11:
                setJawaban11(value);
                break;
            case 12:
                setJawaban12(value);
                break;
            
        }
    }

    const [final,setFinal] = useState(0);

    const [step,setStep] = useState("1");

    const [result,setResult] = useState("");

    

    function handleSubmit(e) {
        e.preventDefault()
        alert("kotnol")
        const total = Number(jawaban1)+Number(jawaban2)+Number(jawaban3)+Number(jawaban4)+Number(jawaban5)+Number(jawaban6)+Number(jawaban7)+Number(jawaban8)+Number(jawaban9)+Number(jawaban10)+Number(jawaban11)+Number(jawaban12)
        setFinal(total)

        if (total >= 16 && total <= 32) {
            setResult("ACTIVELY DISENGAGED")
        } else if (total >= 33 && total <=64) {
            setResult("ENGAGED")
        } else if (total > 64 ) {
            setResult("SANGAT ENGAGED")
        }
    }
    const [progress,setProgress]= useState(25);

    const changeField =(Step,value)=> {
        setStep(Step)
        setProgress(value);
        
    }

    
    return (
        <div className="main-container">
            

    
            <section id="hero">
                <img src={logo} />
                <hr />
                <h3>ISI SESUAI KONDISI ANDA</h3>
                <p>Silahkan Anda tentukan pilihan sesuai dengan yang Anda rasakan dan atau alami sendiri. Dengan cara memilih jawaban SETUJU atau TIDAK SETUJU setelah membaca pernyataannya.</p>
                <form onSubmit={handleSubmit}>
                <ProgressBar className="progress-bar" variant="success" min={1} max={100} striped={true} animated now={progress} />
                    <fieldset className={step == 1 ? "first":"first-hide"}>
                        <div className="form-card">
                            <div className="head">
                                <h2 className="identitas">Identitas:</h2>
                                <h2 className="step">Step 1 - 3</h2>
                            </div>
                            <label className="fieldlabels">Nama Lengkap: *</label>
                            <input required></input>
                            <label className="fieldlabels">Email: *</label>
                            <input required></input>
                        </div>
                        <input onClick={()=>changeField("2",70)} className="action-button" value="Next" type="next" />
                    </fieldset>

                    <fieldset className={step == "2" ? "second":"second-hide"}>
                   
                            <div className="form-card">
                            <div className="head">
                                <h2 className="identitas">Soal Halaman 1</h2>
                                <h2 className="step">Step 2 - 3</h2>
                            </div>
                            <table className="table">
                                <tbody> 
                                    {dataSoal.map((item)=> (
                                        <>
                                    <tr>
                                        <td>{item.no}</td>
                                        <td>{item.soal}</td>
                                    </tr>
                                    <tr>
                                    <td colSpan="2" className="td-option"> 
                                        <div className="icheck-primary icheck-inline">
                                            <input 
                                            className="form-check-input" 
                                            type="radio" 
                                            onChange={e=>addValue(e.target.value, item.no)} 
                                            id={item.no+"id"+"1"} 
                                            value={item.multiplier*1} 
                                            name={"soal ke"+item.no} 
                                            />
                                            <label 
                                            className="form-check-label"
                                            htmlFor={item.no+"id"+"1"}>Sangat Tidak Setuju</label>
                                        </div>
                                        <div 
                                            className="icheck-primary icheck-inline">
                                            <input className="form-check-input" 
                                            type="radio" 
                                            id={item.no+"id"+"2"} 
                                            onChange={e=>addValue(e.target.value, item.no)} 
                                            value={item.multiplier*2} 
                                            name={"soal ke"+item.no} 
                                            />
                                            <label className="form-check-label"  htmlFor={item.no+"id"+"2"}>Tidak Setuju</label>
                                        </div>
                                        <div 
                                            className="icheck-primary icheck-inline">
                                            <input className="form-check-input" 
                                            type="radio" 
                                            id={item.no+"id"+"3"} 
                                            onChange={e=>addValue(e.target.value, item.no)} 
                                            value={item.multiplier*3} 
                                            name={"soal ke"+item.no} 
                                            />
                                            <label className="form-check-label"  htmlFor={item.no+"id"+"3"} >Kurang Setuju</label>
                                        </div>
                                        <div 
                                            className="icheck-primary icheck-inline">
                                            <input className="form-check-input" 
                                            type="radio" 
                                            id={item.no+"id"+"4"} 
                                            onChange={e=>addValue(e.target.value, item.no)} 
                                            value={item.multiplier*4} 
                                            name={"soal ke"+item.no} 
                                           />
                                            <label className="form-check-label"  htmlFor={item.no+"id"+"4"}>Setuju</label>
                                        </div>
                                        <div 
                                            className="icheck-primary icheck-inline">
                                            <input className="form-check-input" 
                                            type="radio" 
                                            id={item.no+"id"+"5"} 
                                            onChange={e=>addValue(e.target.value, item.no)} 
                                            value={item.multiplier*5} 
                                            name={"soal ke"+item.no} 
                                            />
                                            <label className="form-check-label"  htmlFor={item.no+"id"+"5"} >Sangat Setuju</label>
                                        </div>                                  
                                    </td>
                                         
                                    </tr>
                                        </>
                                        
                                    ))}
                                    
                                    
                                </tbody>

                            </table>
                        </div>
                        <input onClick={()=>changeField("3",100)} className="action-button" value="Next" type="submit" />
                        <input onClick={()=>changeField("1",25)} className="action-button" value="Previous" />
                    </fieldset>


                    <fieldset className={step == "3" ? "third":"third-hide"}>
                    <div className="form-card">
                            <div className="head">
                                <h2 className="identitas">Finish</h2>
                                <h2 className="step">Step 3 - 3</h2>
                            </div>
                            <div className="hasil">
                                <table>
                                    <tbody>
                                        <tr>Hasil</tr>
                                        <tr>
                                            <td>
                                                ANDA ADALAH TIPE <strong>{result}</strong>
            
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                            </div>
                        </div>
                       
                    </fieldset>
                </form>
            </section>
        </div>
    )
}

export default Body