import Feature from '../Feature/Feature';

function FeaturesList() {
    return (
        <div className='features-list'>
            <h2 className='features-list__title'>Main Features</h2>
            <p className='features-list__description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam. Vitae et, tortor pulvinar risus pulvinar sit amet. Id vel in nam malesuada.</p>
            <Feature featureType = 'monitoring'/>
            <Feature featureType = 'widget'/>
            <Feature featureType = 'performance'/>
        </div>
    );
}

export default FeaturesList;
