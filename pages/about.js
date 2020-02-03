import Layout from '../components/MyLayout';
import Link from 'next/link'

export default function About() {
  return (
    <Layout>
      <div className="aboutwrapper">
      <div className="jumbotron" style={{ marginLeft: "250px", marginTop: "70px", width: "60rem" }}>
    <h1 className="display-4">BATMAN TV SERIES</h1>
    <br />
    <p className="lead">This website is to list Batman TV Series that is been published and still going on. You can reach the offical social media platforms trought the icons and get more information.</p>
    <br />
    <Link href="/"><a className="btn btn-primary btn-md" role="button">Back to Home Page</a></Link>

  </div>
  </div>
  <style jsx>{`
          .aboutwrapper {
            height: 60vh;
          }
      `}</style>
    </Layout>
  );
}