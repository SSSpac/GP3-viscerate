import { DescriptionSectionProps } from "@/types/globals";

const DescriptionSection = ({imageAlt, imageSrc, text, index}: DescriptionSectionProps & {index: number}) => {
    const isImageRight = index% 2 === 0 ;
    return (
        <section className={`${index === 1 ? 'mt-50' : 'mt-0'}`}>
            <div id="content" className={`flex flex-row items-center gap-6   ${isImageRight ?  "" :  "flex-row-reverse"} `}>
                <div className="flex justify-center mt-[90px] mb-[30px] w-full h-auto bg-cover bg-center sm:w-[80%] sm:h-auto lg:my-[90px] md:min-h-[220px] xl:min-h-[450px]"    
                style={{ backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url(${imageSrc})` }}
                aria-label={imageAlt}>
                    <div className={`text-sm text-extraground p-3 text-center bottom-17 relative 
                        xl:text-2xl sm:bottom-0 sm:text-left sm:p-0 sm:w-60 md:w-70 xl:w-135 sm:flex gap-2 flex-col justify-center ${isImageRight ?  "sm:left-[37%]" :  "sm:right-[35%]"} `}>
                        {text.map((text, index) => (
                            <p className="font-inter" key={index}>{text}</p>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DescriptionSection