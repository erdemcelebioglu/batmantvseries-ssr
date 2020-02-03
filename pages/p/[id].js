import Layout from '../../components/MyLayout';
import fetch from 'isomorphic-unfetch';

const Post = props => (
  <Layout>


  <div className="container py-3 details">
    <div className="card" style={{  marginTop: "70px", marginBottom: "120px", }}>
      <div className="row ">
        <div className="col-md-3">
        <p className="card-text" style={{margin: "30px"}}>{props.show.image ? <img src={props.show.image.medium} /> : null}</p>
          </div>
          <div className="col-md-8 px-3">
            <div className="card-block px-3">
                <br/>
              <h4 className="card-title">{props.show.name}</h4>
              <p className="card-text">{props.show.summary.replace(/<[/]?[pb]>/g, '')}</p>
              <br/>
              <a href="/" className="btn btn-primary" style={{marginBottom: "20px"}}>Back To Home Page</a>
            </div>
          </div>

        </div>
      </div>
    </div>

    <style jsx>{`
          .details {
            height: 70vh;
          }
      `}</style>
  </Layout>
);

Post.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();

  console.log(`Fetched show: ${show.name}`);

  return { show };
};

export default Post;