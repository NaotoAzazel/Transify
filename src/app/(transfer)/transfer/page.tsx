import { TransferShell } from "@/components/shell";
import { TransferHeader } from "@/components/header";
import Menu from "@/components/menu";
import { EmptyPlaceholder } from "@/components/empty-placeholder";
import Container from "@/components/container";

export default function TransferPage() {
  return (
    <TransferShell>
      <TransferHeader heading="Перенос прейлиста" text="Перенисите свой плейлист">
        <div className="block md:hidden">
          <Menu />
        </div>
      </TransferHeader>

      <Container>
        <EmptyPlaceholder>
          <EmptyPlaceholder.Icon name="select" />
          <EmptyPlaceholder.Title>Нет данных для отображения</EmptyPlaceholder.Title>
          <EmptyPlaceholder.Description>
            Выберите опцию из меню, чтобы начать процесс переноса плейлиста.
          </EmptyPlaceholder.Description>
        </EmptyPlaceholder>
      </Container>
    </TransferShell>
  )
}