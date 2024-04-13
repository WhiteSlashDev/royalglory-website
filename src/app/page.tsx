import {buttonVariants} from "@/components/ui/button";
import Link from "next/link";
import {siteConfig} from "@/config/site";

export default function Home() {
    return (
        <main className="container flex flex-col items-center justify-center gap-4 pb-2 pt-24 md:py-10">
            <div className="flex flex-col items-center gap-2">
                <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
                    Royal Glory <br className="hidden sm:inline"/>
                </h1>
                <p className="text-lg text-muted-foreground">
                    Cервер Minecraft, созданный для игроков, которые хотят веселиться, творить и делиться своим контентом с другими.
                </p>
            </div>
            <div className="flex gap-4">
                <Link
                    target="_blank"
                    rel="noreferrer"
                    href={siteConfig.links.github}
                    className={buttonVariants({variant: "outline"})}
                >
                    GitHub
                </Link>
            </div>
        </main>
    );
}
