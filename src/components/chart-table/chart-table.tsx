import chartTable from '../../images/chart-table.svg';
import chart from '../../images/chart.svg';

function ChartTable() {
    return (
        <div className='chart-table'>
            <img className='chart-table__main' src={chartTable} alt={'chart table'} />
            <img className='chart-table__item' src={chart} alt={'chart'} />
        </div>
    );
}

export default ChartTable;
