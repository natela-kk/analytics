import ChartTable from '../../components/chart-table/chart-table';
import FeaturesList from '../../components/features-list/features-list';
import Footer from '../../components/footer/footer';
import FunctionalList from '../../components/functional-list/functional-list';
import Header from '../../components/header/header';
import Intro from '../../components/intro/intro';
import PricingList from '../../components/pricing-list/pricing-list';

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
