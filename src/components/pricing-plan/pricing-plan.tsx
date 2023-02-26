function PricingList() {
    return (
        <div className='pricing-plan'>
            <h1 className='pricing-plan__title'>Starter</h1>
            <span className='pricing-plan__details'>up to 3 users</span>
            <span className='pricing-plan__cost'>$29</span>
            <span className='pricing-plan__period'>per month</span>
            <button className='pricing-plan__button' type='button'>Order</button>
        </div>
    );
}

export default PricingList;
