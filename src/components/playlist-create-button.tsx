import { Button, ButtonProps, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Icons } from "@/components/Icons";
import { useToast } from "@/components/ui/use-toast";

interface PlaylistCreateButtonProps extends ButtonProps {
  url: string
};

export function PlaylistCreateButton({
  className,
  variant,
  url,
  ...props
}: PlaylistCreateButtonProps) {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const regExp = /^.*(youtu.be\/|list=)([^#\&\?]*).*/;;

  const handleClick = () => {
    setIsLoading(true);

    const match = url.match(regExp); 

    if(match && match[2]) {
      toast({
        title: "Успех",
        description: "Плейлист успешно переноситься.",
      })
    } else {
      toast({
        title: "Ошибка",
        description: "Введите валидную ссылку!",
        variant: "destructive"
      })
    }

    setIsLoading(false);
  }

  return (
    <Button
      onClick={handleClick}
      className={cn(
        buttonVariants({ variant }), 
        {
          "cursor-not-allowed opacity-60": isLoading
        },
        className
      )}
    >
      {isLoading 
        ? <Icons.spinner className="mr-2 h-4 w-4 animate-spin" /> 
        : <Icons.refresh className="mr-2 h-4 w-4" />
      }
      Перенести
    </Button>
  )
}