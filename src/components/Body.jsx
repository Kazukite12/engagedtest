
import "../style/body.css";
import { HashLink as Link} from "react-router-hash-link";
import { useState } from "react";
import { BiLogoWhatsapp, BiLogoGmail } from "react-icons/bi";

import logo from "../assets/logo_new.png"
import "icheck-bootstrap"
import { dataSoal } from "./data-soal";
import ProgressBar from 'react-bootstrap/ProgressBar';
import Engaged from "../assets/Engaged.png";
import ActivelyEngaged from "../assets/Actively Engaged.png";
import ActivelyDisengaged from "../assets/Actively Disengaged.png";
import sampul from "../assets/Sampul Pengantar.png";





const Body =()=> {


    const [jawaban, setJawaban] = useState({});
    const [name, setName]= useState("");
    const [email,setEmail] = useState("");

    function addValue(value,noSoal) {
        setJawaban((prevJawaban)=> ({
            ...prevJawaban,
            [noSoal]:value,
        }));
    };

    const [step,setStep] = useState("1");

    const [result,setResult] = useState("");
    const [resultImage,setResultImage] = useState();

    

    function handleSubmit(e) {
        e.preventDefault()

       
            const jawabanValues = Object.values(jawaban);
            const totalSum = jawabanValues.reduce((sum, currentValue) => sum + parseInt(currentValue), 0);
    
            console.log("Total Sum:", totalSum);
    
            if (totalSum >= 16 && totalSum <= 32) {
                setResult("ACTIVELY DISENGAGED");
                setResultImage(ActivelyDisengaged);
            } else if (totalSum >= 33 && totalSum <=64) {
                setResult("ENGAGED");
                setResultImage(Engaged);
            } else if (totalSum > 64 ) {
                setResult("ACTIVELY ENGAGED");
                setResultImage(ActivelyEngaged);
            }

    }
    const [progress,setProgress]= useState(25);

    const [warning, setWarning]= useState(false);


    const changeField =(Step,value)=> {


        if (step == "1") {
            
            if (name == "" || email == "") {
            setWarning(true);
            }  else {
                setStep(Step);
             setProgress(value);
             setWarning(false);
            }
            
        } else if (step == "2") {
            if (Object.values(jawaban).length != 12 && Step == "3") {
                setWarning(true);
            } else {
                setStep(Step);
            setProgress(value);
            setWarning(false)
            }
        } 

        
    }

    
    return (
        <div className="main-container">
            

    
            <section id="hero" className={step == "3" ? "question-hide":"question"}>
                <img src={logo} />
                <hr />
                {step == "1" ?  <img className="sampul" src={sampul} /> : 
                <>
                
                <h3>ISI SESUAI KONDISI ANDA</h3>
                <p>Silahkan Anda tentukan pilihan dari setiap pernyataan sesuai dengan yang Anda rasakan dan atau alami sendiri. Dengan cara memilih salah satu jawaban dari lima kategori jenis jawaban : <br></br>
                1. Sangat Setuju, 
                <br></br>
                2. Setuju,
                <br></br> 
                3. Kurang Setuju,
                <br></br> 
                4. Tidak setuju,
                <br></br> 
                5. Sangat Tidak Setuju.</p> 
                </>
                }
                
                <form onSubmit={handleSubmit}>
                <ProgressBar className="progress-bar" variant="success" min={1} max={100} striped={true} animated now={progress} />
                    <fieldset className={step == 1 ? "first":"first-hide"}>
                        <div className="form-card">
                            <div className="head">
                                <h2 className="identitas">Identitas:</h2>
                                <h2 className="step">Step 1 - 3</h2>
                            </div>
                            <label className="fieldlabels">Nama Lengkap: *</label>
                            <input onKeyPress={e => {
  if (e.key === 'Enter') e.preventDefault();
}}  value={name} onChange={e=>setName(e.target.value)}></input>
                            <p className={warning == true?"warning":"hide-warning"}>{name == "" ? "Perlu Diisi":""}</p>
                            <label className="fieldlabels">Email: *</label>
                            <input onKeyPress={e => {
  if (e.key === 'Enter') e.preventDefault();
}}  value={email} onChange={e=>setEmail(e.target.value)}></input>
                            <p className={warning == true?"warning":"hide-warning"}>{email == "" ? "Perlu Diisi":""}</p>
                        </div>
                        <input onClick={()=>changeField("2",70)} className="action-button" value="Next"/>
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
                                          /*  */
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
                                        
                                        
                                        <p className={warning == true?"warning":"hide-warning"}>{jawaban[item.no] == null ? "Perlu Diisi":""}</p>
                                        
                                         
                                
                                    </td>
                                    </tr>
                                        </>
                                        
                                    ))}
                                    
                                    
                                </tbody>

                            </table>
                        </div>
                        <input onClick={()=>changeField("3",100)} className="action-button" value="Next"  type="submit" />
                        <input onClick={()=>changeField("1",25)} className="action-button" value="Previous" />
                    </fieldset>
                </form>

            </section>

            <section id="hero" className={step == "3" ? "":"result-hide"} >
            <img src={logo} />
                <hr />
                <fieldset className={step == "3" ? "third":"third-hide"}>
                    <div className="form-card">
                        
                            <div className="hasil">
                                <table>
                                    <tbody>
                                
                                       
                                        <tr className="image-result">
                                            <td className="result">
                                                <img src={resultImage} />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                            </div>
                        </div>
                       
                    </fieldset>

            </section>
        </div>
    )
}

export default Body