import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../styles/landing.css'
class Landing extends Component {
    constructor() {
        super();
        this.state = {
            users: [
                { name: "Guy", img: "https://banner2.cleanpng.com/20181117/iqq/kisspng-sigil-of-baphomet-pentagram-demon-satan-5befedb9d74934.0821107615424506178818.jpg" },
                { name: "Kat", img: "https://rebellionrepublic.com/wp-content/uploads/2019/07/REBE001-Kvlt-Cat-Pin__51824.1565888402.1280.1280.jpg" },
                { name: "Kief", img: "https://tshirt-factory.com/images/detailed/23/Black-Metal-Cat-Graphic-design-23245.jpg" }
            ]
        };
    }
    render() {
        return (
            <div id="Landing">
                <div><h1> WHO'S WATCHING??</h1> </div>
                {this.state.users.map(u =>
                    <div key={u.name} className="profile">
                        <Link to="/catalog" >
                            <div className={`${u.background} user`}>
                                <img src={u.img} />
                            </div>
                            <div className="name">
                                {u.name}
                            </div>
                        </Link>
                    </div>)}
            </div>
        );
    }
}

export default Landing;