import Link from 'next/link';
import HeaderCmp from './HeaderCmp';

function Header() {
    return (
        <header className="pb-6 bg-white lg:pb-0">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <nav className="flex items-center justify-between h-16 lg:h-20">
                    <div className="flex-shrink-0">
                        <Link href="/" title="Home" className="flex">
                            <img
                                className="w-auto h-8 lg:h-10"
                                src="https://cdn.rareblocks.xyz/collection/celebration/images/logo.svg"
                                alt="Logo"
                            />
                        </Link>
                    </div>
                    <HeaderCmp />
                    </nav>
            </div>
        </header>
    );
}

export default Header;
