import { getMessageById } from "@/server/contactStore";
import { notFound, redirect } from "next/navigation";
import { cookies } from "next/headers";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function AdminMessageDetailPage({ params }: Props) {
  const cookieStore = await cookies();
  const adminAuth = cookieStore.get("admin_auth");
  if (!adminAuth || adminAuth.value !== "1") {
    redirect("/admin/login");
  }

  const { id: idParam } = await params;
  const id = Number(idParam);
  if (Number.isNaN(id)) {
    notFound();
  }

  const message = await getMessageById(id);
  if (!message) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background px-6 py-24">
      <div className="max-w-3xl mx-auto space-y-8">
        <div>
          <h1 className="text-3xl font-display font-semibold text-foreground mb-2">
            Message #{message.id}
          </h1>
          <p className="text-sm text-muted-foreground">
            Received on {new Date(message.createdAt).toLocaleString()}
          </p>
        </div>

        <div className="glass-panel glow-border p-6 space-y-4">
          <div className="space-y-1">
            <p className="text-xs font-heading tracking-[0.2em] text-muted-foreground uppercase">
              From
            </p>
            <p className="text-sm font-heading text-foreground">
              {message.name}{" "}
              <span className="text-xs text-muted-foreground">&lt;{message.email}&gt;</span>
            </p>
          </div>

          <div className="space-y-1">
            <p className="text-xs font-heading tracking-[0.2em] text-muted-foreground uppercase">
              Message
            </p>
            <p className="text-sm text-muted-foreground whitespace-pre-wrap">
              {message.message}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

