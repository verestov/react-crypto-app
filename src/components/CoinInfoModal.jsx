import { Divider, Tag, Typography } from 'antd'
import CoinInfo from './CoinInfo'

function CoinInfoModal({ coin }) {
	return (
		<>
			<CoinInfo coin={coin} />
			<Divider />
			<Typography.Paragraph>
				<Typography.Text strong>1 HOUR: </Typography.Text>
				<Tag color={coin.priceChange1h < 0 ? 'red' : 'success'}>
					{coin.priceChange1h}%
				</Tag>
				<Typography.Text strong>1 DAY: </Typography.Text>
				<Tag color={coin.priceChange1d < 0 ? 'red' : 'success'}>
					{coin.priceChange1d}%
				</Tag>
				<Typography.Text strong>1 WEEK: </Typography.Text>
				<Tag color={coin.priceChange1w < 0 ? 'red' : 'success'}>
					{coin.priceChange1w}%
				</Tag>
			</Typography.Paragraph>

			<Typography.Paragraph>
				<Typography.Text strong>Price: </Typography.Text>
				{coin.price.toFixed(2)}$
			</Typography.Paragraph>
			<Typography.Paragraph>
				<Typography.Text strong>Price in RUB: </Typography.Text>
				{(coin.price * 79.65).toFixed(2)} RUB
			</Typography.Paragraph>
			<Typography.Paragraph>
				<Typography.Text strong>Price BTC: </Typography.Text>
				{coin.priceBtc}
			</Typography.Paragraph>
			<Typography.Paragraph>
				<Typography.Text strong>Market Cap: </Typography.Text>
				{coin.marketCap.toFixed(2)}$
			</Typography.Paragraph>
			<Typography.Paragraph>
				<Typography.Text strong>Contract Address: </Typography.Text>
				{coin.contractAddress}
			</Typography.Paragraph>
		</>
	)
}

export default CoinInfoModal
