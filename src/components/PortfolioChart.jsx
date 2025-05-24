import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'
import { useCrypto } from '../context/crypto-context'
import { chartColors } from '../assets/colors'

const portfolioChartStyle = {
	display: 'flex',
	marginBottom: '1rem',
	justifyContent: 'center',
	height: '400px',
}

ChartJS.register(ArcElement, Tooltip, Legend)

function PortfolioChart() {
	const { assets } = useCrypto()

	const data = {
		labels: assets.map(asset => asset.name),
		datasets: [
			{
				label: '$',
				data: assets.map(asset => asset.totalAmount),
				backgroundColor: chartColors,
				borderColor: chartColors,
				borderWidth: 1,
			},
		],
	}

	return (
		<div style={portfolioChartStyle}>
			<Pie data={data} />
		</div>
	)
}

export default PortfolioChart
