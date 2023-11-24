import {Instagram, Mail} from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
	return (
		<div className="mt-12 flex flex-row items-start justify-center gap-16 bg-nahal-green p-8 px-16">
			<div className="relative flex h-[400px] w-1/3 items-center justify-center overflow-hidden rounded-2xl bg-white">
				<Image alt="nahal logo" src={'/images/logo.png'} width={350} height={200} className="object-contain" />
			</div>
			<div className="flex w-1/3 flex-col gap-3 text-xl font-bold">
				<div className="text-center text-2xl">دسترسی سریع</div>
				<hr />
				<div>خانه</div>
				<hr />
				<div>دسته بندی محصولات</div>
				<hr />
				<div>وبلاگ</div>
				<hr />
				<div>درباره ما</div>
				<hr />
				<div>تماس با ما</div>
			</div>
			<div className="flex h-full w-1/3 flex-col items-end">
				<div className="flex w-full flex-col gap-4 rounded-xl bg-white p-3">
					<div className="flex flex-row gap-2 text-lg font-bold">
						<Mail /> خبرنامه
					</div>
					<input
						type="text"
						placeholder="ایمیل خود را وارد کنید ..."
						className="w-full rounded-lg border-2 border-black p-3"
					/>
					<button className="w-full rounded-lg bg-nahal-green py-2 text-lg font-bold text-white hover:brightness-110">
						ارسال
					</button>
				</div>
				<div className="mt-40 flex flex-row gap-2 text-white">
					<Instagram size={20} />
					<Image alt="telegram logo" src={'/icons/telegram.svg'} width={20} height={20} />
				</div>
			</div>
		</div>
	);
}
