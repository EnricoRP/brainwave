import Section from "./Section"
import Heading from "./Heading"
import { roadmap } from "../constans"
import { check2, grid, loading } from "../assets"
import TagLine from "./TagLine"

const Roadmap = () => {
    return (
        <Section className={`overflow-hidden`} id="roadmap">
            <div className="container md:pb-10">
                <Heading tag="Ready to get started" title="What we're working on" />
                <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
                    {roadmap.map((item) => {
                        const status = item.status === 'done' ? "Done" : "In progress";
                        return (
                            <div key={item.id}>
                                <div>
                                    <div>
                                        <img className="w-full" src={grid} width={550} height={550} alt="grid" />
                                    </div>
                                    <div className="relative z-1">
                                        <div className="flex items-center justify-between">
                                            <TagLine>{item.date}</TagLine>
                                            <div>
                                                <img className="mr-2.5" src={item.status === 'done' ? check2 : loading} width={16} height={16} alt="status" />
                                                <div className="tagline">{status}</div>
                                            </div>
                                            <div className="mt-10">
                                                <img className="w-full" src={item.imageUrl} width={630} height={420} alt={item.title} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </Section>
    )
}

export default Roadmap
