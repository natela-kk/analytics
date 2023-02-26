import reports from '../../images/functionals/reports.svg';
// import custom from '../../images/functionals/custom.svg';
// import dashboard from '../../images/functionals/dashboard.svg';

type FunctionalItemProps = {
    functionalType: string;
}

function FunctionalItem({functionalType}: FunctionalItemProps) {
    return (
        <div className='functional-item'>
            <h2 className='functional-item__title'>Automated Reports & Widget Alerts</h2>
            <p className='functional-item__description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam. Vitae et, tortor pulvinar risus pulvinar sit amet.</p>
            <img className='functional-item__image' src={reports} alt="functional-item" />
        </div>
    );
}

export default FunctionalItem;
