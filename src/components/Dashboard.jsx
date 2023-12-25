import "../style/Dashboard.css"
import logo from "../assets/logo_new.png"


const Dashboard =()=> {
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
                                                <input type="date" />
                                            </td>
                                            <td>-</td>
                                            <td>
                                                <input type="date" />
                                            </td>
                                            <td>
                                                <a className="btn-cari">Cari</a>
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
                                            <tr>
                                                <td className="td-body">1</td>
                                                <td className="td-body">2023-12-14</td>
                                                <td className="td-body">Ujang Ranger</td>
                                                <td className="td-body">Ujang@gmail.com</td>
                                                <td className="td-body">10</td>
                                                <td className="td-body">ENgaged</td>
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