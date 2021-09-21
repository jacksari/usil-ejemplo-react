import React from 'react';
import Link from "next/link";

function Header() {
    return (
        <header>
            <div className="section-center ">
                <Link href="/">
                    <a>
                        <p className="">CRUD - <span>useContext</span></p>
                    </a>
                </Link>
                <Link href="/add-post">
                    <a className="btn">Agregar Post</a>
                </Link>
            </div>
        </header>
    );
}

export default Header;
