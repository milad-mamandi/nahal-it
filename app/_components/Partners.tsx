import {ArrowLeft, ArrowRight} from 'lucide-react';
import Image from 'next/image';

export default function Partners() {
	return (
		<>
			<div className="mt-8 flex items-center justify-center text-4xl font-bold">
				مجموعه نهال آی تی افتخار همکاری با :
			</div>
			<div className="mt-16 flex w-full flex-row justify-between">
				<div className="flex h-[350px] w-[60px] cursor-pointer items-center justify-center rounded-lg bg-nahal-green">
					<div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white text-nahal-green">
						<ArrowRight />
					</div>
				</div>
				<div className="flex flex-row gap-12">
					<div className="flex h-[350px] w-[350px] items-center justify-center rounded-lg bg-[#D9D9D9]">
						<Image alt="digikala logo" src={'/images/digikala.png'} width={120} height={120} />
					</div>
				</div>
				<div className="flex flex-row gap-12">
					<div className="flex h-[350px] w-[350px] items-center justify-center rounded-lg bg-[#D9D9D9]">
						<Image alt="shab logo" src={'/images/shab.png'} width={150} height={120} />
					</div>
				</div>
				<div className="flex flex-row gap-12">
					<div className="flex h-[350px] w-[350px] items-center justify-center rounded-lg bg-[#D9D9D9]">
						<Image alt="bh logo" src={'/images/bh.png'} width={120} height={120} />
					</div>
				</div>
				<div className="flex h-[350px] w-[60px] cursor-pointer items-center justify-center rounded-lg bg-nahal-green">
					<div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white text-nahal-green">
						<ArrowLeft />
					</div>
				</div>
			</div>
		</>
	);
}
