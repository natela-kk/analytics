import ChartTable from '../../components/Chart-table/Chart-table';
import FeaturesList from '../../components/Features-list/Features-list';
import Footer from '../../components/Footer/Footer';
import FunctionalList from '../../components/Functional-list/Functional-list';
import Header from '../../components/Header/Header';
import Intro from '../../components/Intro/Intro';
import PricingList from '../../components/Pricing-list/Pricing-list';

function Main() {
    return (
        <>
            <div className='main__top'>
                <Header />
                <ChartTable />
                <Intro />
            </div>
            <div className='main__middle'>
                <FeaturesList />
                <FunctionalList />
            </div>
            <div className='main__bottom'>
                <PricingList />
                <Footer />
            </div>
        </>
    );
}

export default Main;
