import { Tldraw } from 'tldraw'
import './index.css'

export default function App() {
	return (
		<div id="tldrawcontainer" style={{ position: 'fixed', inset: 0 }}>
			<Tldraw persistenceKey="workshop01" />
		</div>
	)
}