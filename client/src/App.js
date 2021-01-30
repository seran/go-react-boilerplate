import React from "react"

import './styles/global.scss'

function App() {
	return (
		<div className="container">
			<div className="columns">
				<div className="column">
					<section className="hero">
						<div className="hero-body">
						<p className="title">Go ReactJS Boilerplate</p>
						<p className="subtitle">
						With hot reload
						</p>
						</div>
					</section>
					<div className="columns">
						<div className="column">
							<small>Author: <a href="https://github.com/seran">@seran</a></small>
						</div>
					</div>
				</div>
			</div>
		</div>
		)
}

export default App;
