import Image from 'next/image';

export function OfferCard() {
	return (
		<section className="m-4 flex w-1/3 flex-col gap-8 overflow-hidden rounded-2xl bg-white">
			<div className="relative h-[300px]">
				<Image alt="php logo" src={'/images/php.png'} fill={true} className="object-cover" />
			</div>
			<div className="w-full px-4 text-right text-2xl font-bold">چت آنلاین با PHP</div>
			<div className="w-full px-3 text-right text-lg font-bold">
				این چت آنلاین با زبان برنامه نویسی PHP نوشته شده که با دیتابیس Mysql است اتصال به وبسایت SMS Request
				Free دارد و با هاست سایت نت افزار است و امنیت چت با CSRF Token است و قابلیت اضافه کردن بات به این چت
				وجود دارد . . .
			</div>
			<button className="mx-4 mb-4 rounded-lg bg-[#515E64] p-3 text-lg text-white hover:brightness-110">
				اطلاعات بیشتر
			</button>
		</section>
	);
}

export default function Offers() {
	return (
		<div className="relative mx-4 mt-40 flex flex-row gap-4 rounded-3xl bg-nahal-green px-8 py-4">
			<div className="absolute -left-[50px] -top-[50px] flex h-[100px] w-[100px] -rotate-45 items-center justify-center rounded-full bg-red-500 text-xl font-bold text-white">
				50%
			</div>
			<OfferCard />
			<OfferCard />
			<OfferCard />
		</div>
	);
}
