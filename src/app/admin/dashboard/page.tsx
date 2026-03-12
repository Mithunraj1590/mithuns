import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getMessages } from "@/server/contactStore";

export const dynamic = "force-dynamic";

export default async function AdminDashboardPage() {
  const cookieStore = await cookies();
  const adminAuth = cookieStore.get("admin_auth");
  if (!adminAuth || adminAuth.value !== "1") {
    redirect("/admin/login");
  }

  const messages = await getMessages();

  return (
    <div className="min-h-screen bg-background px-6 py-24">
      <div className="max-w-5xl mx-auto space-y-10">
        <div>
          <h1 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-2">
            Contact Messages
          </h1>
          <p className="text-sm text-muted-foreground">
            Messages submitted from the contact form on your site.
          </p>
        </div>

        {messages.length === 0 ? (
          <div className="glass-panel glow-border p-6 md:p-8 text-center">
            <p className="text-sm text-muted-foreground">
              No messages yet. Once someone submits the contact form, it will appear here.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {messages.map((msg) => (
              <div key={msg.id} className="glass-panel glow-border p-6 space-y-3">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-heading text-foreground">
                      {msg.name}{" "}
                      <span className="text-xs text-muted-foreground">&lt;{msg.email}&gt;</span>
                    </p>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {new Date(msg.createdAt).toLocaleString()}
                  </p>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {msg.message}
                </p>
                <div className="flex justify-end">
                  <Link
                    href={`/admin/messages/${msg.id}`}
                    className="text-xs font-heading tracking-[0.2em] uppercase text-primary hover:text-primary/80 transition-colors"
                  >
                    View details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

