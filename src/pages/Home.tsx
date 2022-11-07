import Header from '../home_components/Header';
import Nav  from '../home_components/Nav'
import Main from '../home_components/Main';
import Footer from '../home_components/Footer';
const Home = () => {
    return (
        <div className='flex flex-col'>
            <div className='h-1/4'>
                <Header/>
            </div>
            <div className='flex h-3/4 text-center'>
                <div className='w-1/4'>
                    <Nav/>
                </div>
                <div className='w-3/4'>
                    <Main/>
                </div>
            </div>
            <Footer/>
        </div>
    )
};

export default Home