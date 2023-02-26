import FunctionalItem from '../functional-item/functional-item';

function FunctionalList() {
    return (
        <div className='functional-list'>
            <FunctionalItem functionalType = 'reports'/>
            <FunctionalItem functionalType = 'custom'/>
            <FunctionalItem functionalType = 'dashboard'/>
        </div>
    );
}

export default FunctionalList;
