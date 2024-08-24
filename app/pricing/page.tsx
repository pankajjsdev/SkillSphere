import Stats from "@/components/Stats";
import Pricing from "@/components/Pricing";
import Faq from "@/components/Faq";
import Brands from "@/components/Brands";

export default function Page() {
    return (
        <main>
            <Pricing />
            <Stats/>
            <Faq />
            <Brands/>
        </main>
    );
}
