import {Search, UserCircle} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
	return (
		<header>
			<div className="mx-8 flex flex-row items-center justify-between p-4">
				<Image alt="nahal-it logo" src={'/images/logo.png'} width={146} height={83} />
				<nav className="flex flex-row gap-10">
					<button className="text-white hover:bg-green-600 rounded-3xl bg-nahal-green px-10 py-2 text-2xl">
						خانه
					</button>
					<button className="text-white hover:bg-green-600 rounded-3xl bg-nahal-green px-4 py-2 text-2xl">
						دسته بندی محصولات
					</button>
					<button className="text-white hover:bg-green-600 rounded-3xl bg-nahal-green px-10 py-2 text-2xl">
						بلاگ
					</button>
				</nav>
				<div className="hover:bg-green-600 rounded-full bg-nahal-green p-3 hover:cursor-pointer">
					<UserCircle className="text-white" size={24} />
				</div>
			</div>
			<div className="flex h-[120px] items-center justify-center bg-nahal-green">
				<div className="flex w-full flex-row items-center justify-center gap-4">
					<input
						type="text"
						placeholder="جستجو کنید . . ."
						className="w-1/2 rounded-3xl px-4 py-2 text-xl outline-none"
					/>
					<div className="bg-white inner-shadow flex h-11 w-11 items-center justify-center rounded-full hover:cursor-pointer">
						<Search />
					</div>
				</div>
			</div>
		</header>
	);
}
