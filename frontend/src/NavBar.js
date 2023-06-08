
import React, { Component } from "react";

class NavBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="NavBar position-relative fs-4 shadow">
                <nav className='navbar navbar-expand-lg navbar-light bg-light'>
					<div className='container-fluid'>
						<div className='collapse navbar-collapse justify-content-center'>
							<ul className='navbar-nav mb-2 mb-lg 0'>
								<li className='nav-item'>
									<a className='nav-link active' href='#'>Home</a>
								</li>
                                <li className="nav-item">
                                    <a className="nav-link">Profile</a>
                                </li>
							</ul>
						</div>
					</div>
				</nav>
            </div>
        )
    }
}

export default NavBar