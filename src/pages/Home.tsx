import Header from '../home_components/Header';
import Nav  from '../home_components/Nav'
import Main from '../home_components/Main';
import Footer from '../home_components/Footer';
const Home = () => {
    return (
        <div className='flex flex-col h-screen w-screen'>
            <div className='h-1/6'>
                <Header/>
            </div>
            <div className='flex h-5/6 text-center'>
                <div className='w-1/5 border-2 m-2'>
                    <Nav/>
                </div>
                <div className='w-4/5 border-2 m-2'>
                    <Main/>
                </div>
            </div>
            <Footer/>
        </div>
    )
};

export default Home