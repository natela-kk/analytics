import PricingPlan from '../Pricing-plan/Pricing-plan';

function PricingList() {
    return (
        <div className='pricing-list'>
            <h2 className='pricing-list__title'>Pricing Plans</h2>
            <p className='pricing-list__description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet
                volutpat pellentesque volutpat est.</p>
            <ul className='pricing-list__plans'>
                <li><PricingPlan /></li>
                {/* <li><PricingPlan /></li> */}
                {/* <li><PricingPlan /></li> */}
            </ul>
        </div>
    );
}

export default PricingList;
