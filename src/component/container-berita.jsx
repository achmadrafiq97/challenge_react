import React from 'react';

class ContainerBerita extends React.Component {
    render() {
        return  (
            <div className="body-berita">
<div className="row">
    <div className="col-md-4">
        <div className="row berita-terkini">
            <a className="margin-berita-terkini">BERITA TERKINI</a>
            <a >lihat semua</a>
        </div>
        <div className="daftar-berita">
            <div>
                <div className="margin-nomor">
                    <p>#1</p>
                </div>
                <a >Gabung Alphatech Academy Sekarang!</a>
            </div>
            <div>
                <div className="margin-nomor">
                    <p>#2</p>
                </div>
                <a >Ada apa antara Kobar dan Hasan ?</a>
            </div>
            <div>
                <div className="margin-nomor">
                    <p>#3</p>
                </div>
                <a >Mengenal Arafat sang maestro python</a>
            </div>
            <div>
                <div className="margin-nomor">
                    <p>#4</p>
                </div>
                <a >Belajar reactJS itu seru. Kamu setuju ?</a>
            </div>
            <div>
                <div className="margin-nomor">
                    <p>#5</p>
                </div>
                <a >Sudahkah kamu sehat mental?</a>
            </div>
        </div>
    </div>
    <div className="col-md-8">
        <div>
            <img className="image-berita" src={require("../assets-img/putri ayako.jpeg")} alt="" />
        </div>
        <div className="margin-headline-utama">
            <div className="kotak-berita">
                <h5><strong>Nikahi Rakyat Jelata, Putri Ayako dari Jepang Lepaskan Gelar Kerajaan</strong></h5>
                <p className="deskripsi-berita">Pernikahan Putri Ayako dan Kei Moriya dilangsungkan lewat upacara tradisional Jepang </p>
                <p className="last-updated">Last Updated 3 mins ago </p>
            </div>
            <div className="kotak-icon">
                <i className="fa fa-share-alt icon" ></i>
                <i className="fa fa-heart-o icon" ></i>
                <i className="fa fa-thumbs-down icon" ></i>
            </div>
        </div>
    </div>
</div>
</div>
         );
    }
}

export default ContainerBerita;

