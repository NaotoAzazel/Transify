import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-36 mx-auto">
          <div className="flex max-w-[980px] flex-col items-start gap-2">
            <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl font-heading">
              Transify - сервис который перенесет ваш плейлист
            </h1>
            <p className="max-w-[700px] text-lg text-muted-foreground font-inter">
              Перенисите свой плейлист из ютуб в спотифай в один клик.
            </p>
          </div>

          <div className="flex gap-4 mt-6">
            <Link href="/transfer" className={buttonVariants({})}>Начать перенос</Link>
            <Link href="/github" className={buttonVariants({ variant: "outline" })}>GitHub</Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </>
  );
}