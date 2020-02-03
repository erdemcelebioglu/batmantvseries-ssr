import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';



const MyLayout = props => (
    <div className="wrapper">
    <div className="content">
        <Head>
            <title>Batman TV Series</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" />
        </Head>
        <Navbar />
        {props.children}
        </div>
        <Footer />
        
        <style jsx>{`
        .wrapper{
            position: relative;
        }
      `}</style>
    </div>
);

export default MyLayout;




