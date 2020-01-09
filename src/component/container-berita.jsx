import React from 'react';

class ContainerBerita extends React.Component {
    render() {
        console.warn("cek props dari news", this)
        const {listNews, articleNews}= this.props
        return  (
            <div className="body-berita">
<div className="row">
    <div className="col-md-4">
        <div className="row berita-terkini">
            <a className="margin-berita-terkini">BERITA TERKINI</a>
            <a >lihat semua</a>
        </div>
        <div className="daftar-berita">
            {listNews.map((item, key) => (
                <div>
                    <div className="margin-nomor">
            <p>{"#"+(key+1)}</p>
                    </div>
                    <a href={item.url} >{item.title}</a>
                </div>
            ))}
        </div>
    </div>
    <div className="col-md-8">
    {articleNews.map((item, key) => (
        <div>
            <div>
                <img className="image-berita" src={item.urlToImage} alt="" />
            </div>
            <div className="margin-headline-utama">   
                <div>
                    <div className="kotak-berita">
                        <div>
                            <a href={item.url} ><h5><strong>{item.title}</strong></h5></a>
                            <p className="deskripsi-berita">{item.description}</p>
                            <p className="last-updated">{"Last Updated "+item.publishedAt}</p>
                        </div>
                    </div>
                    <div className="kotak-icon">
                        <i className="fa fa-share-alt icon" ></i>
                        <i className="fa fa-heart-o icon" ></i>
                        <i className="fa fa-thumbs-down icon" ></i>
                    </div>
                </div>
            </div>
        </div>
        ))}
    </div>
</div>
</div>
         );
    }
}

export default ContainerBerita;

