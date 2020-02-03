import Layout from '../components/MyLayout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const Index = props => (
    <Layout>
        <div className="container" style={{marginTop:"20px"}}>
        <div className="row">
        {props.shows.map(show => (
            <div key={show.id} className="col-sm-4">
                <div className="card mb-3" style={{ width: "18rem" }}>

                    <div className="card-body">
                        <img className="card-img-top" src={show.image.medium} />
                        <div className="card-header">
                            <h5 className="card-title">{show.name}</h5>
                             </div>
                            <p className="card-text">Prem. Date: {show.premiered}<br />Rating: {show.rating.average}  </p>
                            <Link href="/p/[id]" as={`/p/${show.id}`}>
                                <a href="#" className="btn btn-primary">Details</a>
                            </Link>
                        </div>
                    </div>
                </div>
           
        ))}
         </div>
         </div>
    </Layout>

);

Index.getInitialProps = async function () {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
    const data = await res.json();

    console.log(`Show data fetched. Count: ${data.length}`);

    return {
        shows: data.map(entry => entry.show)
    };
};

export default Index;