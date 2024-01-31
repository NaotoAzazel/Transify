"use client"

import { TransferHeader } from "@/components/header";
import { TransferShell } from "@/components/shell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { createUrl } from "@/lib/utils";
import { useEffect, useState } from "react";
import { EmptyPlaceholder } from "@/components/empty-placeholder";
import Container from "@/components/container";
import { PlaylistCreateButton } from "@/components/playlist-create-button";

export default function YoutubeToSpotifyPage() {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());
  const pathname = usePathname();
  const router = useRouter();
  const queryParam = params.get("q") || "";
  
  const [value, setValue] = useState<string>(queryParam);
  const [isTransfer, setIsTransfer] = useState<boolean>(false);
  
  const setParams = (key: string, value: string | number) => {
    params.set(key, value.toString());
  };

  const handleChange = (e: any) => {
    const { value } = e.target;
    setValue(value);
  }

  useEffect(() => {
    setParams("q", value);
    router.push(createUrl(pathname, params));
  }, [value]);

  return (
    <TransferShell>
      <TransferHeader heading="Из ютуба в спотифай" text="Перенисите свой плейлист в спотифай" />
      <Container>
        <div className="space-y-2">
          <div className="flex items-center mt-2 mx-2 space-x-4">
            <Input
              type="text" 
              onChange={handleChange} 
              placeholder="Вставьте ссылку на плейлист" 
              value={value}
            />
            <PlaylistCreateButton url={value} />
          </div>

          <h2 className="mx-2 text-muted-foreground text-xs md:text-sm leading-2">
            Обратите внимание: плейлист не сможет перенестить если он закрыт. Сперва нужно его{" "}
            <a
              className="font-sans underline underline-offset-4 cursor-pointer"
              // TODO: add onClick event that display user how to make visible their playlist
            > 
              открыть
            </a>
          </h2>
          <hr className="border-b mt-2" />
        </div>
        
        {isTransfer ? (
          <div className="p-6">
            <iframe 
              className="rounded-[15px]" 
              src="https://open.spotify.com/embed/playlist/4aT53efGoCmTI5Yh1zCFqr?utm_source=generator&theme=1"
              width="100%"
              height="500" 
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
              loading="lazy" 
            />
          </div>
        ) : (
          <EmptyPlaceholder>
            <EmptyPlaceholder.Icon name="transfer" />
            <EmptyPlaceholder.Title>Начните перенос</EmptyPlaceholder.Title>
            <EmptyPlaceholder.Description>
              Здесь появиться ваш плейлист
            </EmptyPlaceholder.Description>
          </EmptyPlaceholder>
        )}
      </Container>
    </TransferShell>
  )
}