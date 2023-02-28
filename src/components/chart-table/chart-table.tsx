import styles from './Chart-table.module.scss';
import chartTable from '../../images/chart-table.svg';
import chart from '../../images/chart.svg';

function ChartTable() {
    return (
        <div className={styles.chartTable}>
            <img className='chart-table__main' src={chartTable} alt={'chart table'} />
            <img className='chart-table__item' src={chart} alt={'chart'} />
        </div>
    );
}

export default ChartTable;
