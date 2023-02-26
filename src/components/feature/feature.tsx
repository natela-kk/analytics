type FeatureProps = {
    featureType: string;
}

function Feature({ featureType }: FeatureProps) {
    return (
        <div className={`feature feature--${featureType}`}>
            <h3 className='feature__title'>Monitoring 24/7</h3>
            <p className='feature__description'>Lorem ipsum dolor sit amet, conse ctetur adipis cing elit. Elementum nisi aliquet volutpat.</p>
        </div>
    );
}

export default Feature;
