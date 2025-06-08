import DescriptionSection from "@/components/DescriptionSection"
import { descriptionSectiondata } from "@/data/descriptionSection"

const GameDescriptionPage = () => {
    return (
        <main>
            {descriptionSectiondata.map((section, index) => (
                <DescriptionSection key={section.id} {...section} index={index + 1} />
            ))}
        </main>
    )
}

export default GameDescriptionPage