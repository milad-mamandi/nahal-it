import Image from 'next/image';

export function ProductCard() {
	return (
		<div className="flex flex-col items-start justify-center overflow-hidden rounded-2xl">
			<div className="relative h-[300px] w-full">
				<Image alt="php logo" src={'/images/php.png'} fill={true} />
			</div>
			<div className="flex flex-col gap-3 bg-gradient-to-br from-white to-nahal-green px-4 py-4 font-bold">
				<h1 className="text-2xl">چت آنلاین با PHP</h1>
				<p>
					این چت آنلاین با زبان برنامه نویسی PHP نوشته شده که با دیتابیس Mysql است اتصال به وبسایت SMS Request
					Free دارد و با هاست سایت{' '}
					<a href="#" className="text-blue-600 underline visited:text-purple-600 hover:text-blue-800">
						نت افزار
					</a>{' '}
					است و امنیت چت با CSRF Token است و قابلیت اضافه کردن بات به این چت وجود دارد . . .
				</p>
				<hr />
				<div>چت آنلاین با کاربران</div>
				<hr />
				<div>ایجاد کانال و گروه های متفاوت</div>
				<hr />
				<button className="mx-2 w-full rounded-lg bg-[#515E64] py-2 text-lg text-white hover:brightness-110">
					اطلاعات بیشتر
				</button>
				<hr />
				<div>تاریخ تولید : 1402/06/09</div>
			</div>
		</div>
	);
}

export default function LatestProducts() {
	return (
		<div className="mt-12 flex flex-row items-center justify-center gap-12">
			<ProductCard />
			<ProductCard />
			<ProductCard />
		</div>
	);
}
