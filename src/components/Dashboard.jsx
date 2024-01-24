import "../style/Dashboard.css"
import logo from "../assets/logo_new.png"
import React, { useEffect, useState } from "react"


const Dashboard =()=> {


    const [date, setDate]= useState('')

    const [data, setData] = useState([{}])

    const unixDate = parseInt((new Date(date).getTime() / 1000).toFixed(0))

    console.log(unixDate)

    console.log(date)

    console.log(data)

    const readData =()=> {
        // Sort results by id in descending order, take two
// and return the age as an integer.

    fetch(`https://sheetdb.io/api/v1/v76h1ntnjvd9v/search?Tanggal=${date}`)
        .then((response) => response.json())
        .then((data) => setData(data));
    }

    return (
        <div className="dashboard-page">
            <div className="header">

            </div>
            <div className="content-wrapper">
                <div className="content-header">
                    <img src={logo} />
                    <nav className="navbar">

                    </nav>
                </div>
                <div className="content">
                    <div className="row">
                        <div>
                            <h2>Daftar Hasil Laporan Tes</h2>
                        </div>
                        
                        <div className="head-box">
                            <div className="box-body">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>Periode</td>
                                            <td>
                                                <input type="date" value={date} onChange={e=> setDate(e.target.value)} />
                                            </td>
                                            <td>
                                                <a onClick={()=>readData()} className="btn-cari">Cari</a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                            </div>

                        </div>


                        <div className="box">
                            <div className="box-header">
                                <p></p>
                            </div>
                            <div className="box-body">
                                <div className="content-data">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th className="thead">NO</th>
                                                <th className="thead">TANGGAL</th>
                                                <th className="thead">NAMA</th>
                                                <th className="thead">EMAIL</th>
                                                <th className="thead">SKOR</th>
                                                <th className="thead">HASIL</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data.map((data,index)=> (
                                                <tr key={index}>
                                                     <td className="td-body">{data.No}</td>
                                                     <td className="td-body">{data.Tanggal}</td>
                                                     <td className="td-body">{data.Nama}</td>
                                                     <td className="td-body">{data.Email}</td>
                                                     <td className="td-body">{data.Skor}</td>
                                                     <td className="td-body">{data.Hasil}</td>
                                                 </tr>
                                            ))}
                                             <tr >
                                                     <td className="td-body">1</td>
                                                     <td className="td-body">2</td>
                                                     <td className="td-body">3</td>
                                                     <td className="td-body">4</td>
                                                     <td className="td-body">5</td>
                                                     <td className="td-body">6</td>
                                                 </tr>
                                           
                                        </tbody>
                                    </table>

                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard