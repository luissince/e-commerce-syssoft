
interface TitleProps {
    titleBase: string;
    titleDetail: string;
}

export default function Title({ titleBase, titleDetail }: TitleProps) {
    return (
        <div className="font-normal text-[13px] text-qblack mb-[23px]"><span>
            <a href="/"><span className="mx-1 capitalize">{titleBase}</span></a>
            <span>/</span></span>
            <a href="/"><span className="mx-1 capitalize">{titleDetail}</span></a>
        </div>
    );
}