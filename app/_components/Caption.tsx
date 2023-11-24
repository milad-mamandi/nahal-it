import {cn} from '../_lib/utils';

type CaptionProps = {
	className?: React.HTMLAttributes<HTMLDivElement> | string;
	value: string;
};
export default function Caption({className, value}: CaptionProps) {
	return (
		<div
			className={cn(
				'flex h-[60px] w-[300px] items-center justify-center rounded-br-[48px] rounded-tl-[48px] bg-nahal-green text-xl text-white',
				className,
			)}
		>
			{value}
		</div>
	);
}
