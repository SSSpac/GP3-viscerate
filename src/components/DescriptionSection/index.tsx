import { DescriptionSectionProps } from "@/types/globals";


const DescriptionSection = ({id, imageUrl, imageAlt, text, index}: DescriptionSectionProps & {index: number}) => {
    const isImageRight = index% 2 === 0 ;
    return (
        <section id="content" className={`flex flex-row items-center gap-6   ${isImageRight ?  "" :  "flex-row-reverse"} `}>
            <div className="flex justify-center mt-[70px] mb-[30px] w-full h-[200px] bg-cover bg-center
            sm:w-[80%] sm:h-auto sm:my-[90px] sm:min-h-[300px]" style={{backgroundImage: `url(${imageUrl})`}} aria-label={imageAlt}>
                <div className={`text-sm p-5 text-center bottom-12 relative 
                    sm:text-2xl sm:bottom-0 sm:text-left sm:p-0 sm:w-60 sm:flex flex-col justify-center ${isImageRight ?  "sm:left-[47%]" :  "sm:right-[45%]"} `}>
                    {text.map((text, index) => (
                        <p className="" key={index}>{text}</p>
                    ))}
                </div>
            </div>
        </section>
    )

}

export default DescriptionSection