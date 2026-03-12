import fs from "fs";
import path from "path";

export type ContactMessage = {
  id: number;
  name: string;
  email: string;
  message: string;
  createdAt: string;
};

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "contact-messages.json");

async function ensureDataFile() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify({ nextId: 1, messages: [] as ContactMessage[] }, null, 2), "utf-8");
  }
}

async function readStore(): Promise<{ nextId: number; messages: ContactMessage[] }> {
  await ensureDataFile();
  const raw = fs.readFileSync(DATA_FILE, "utf-8");
  try {
    const parsed = JSON.parse(raw) as { nextId: number; messages: ContactMessage[] };
    return {
      nextId: parsed.nextId ?? 1,
      messages: parsed.messages ?? [],
    };
  } catch {
    return { nextId: 1, messages: [] };
  }
}

async function writeStore(data: { nextId: number; messages: ContactMessage[] }) {
  await ensureDataFile();
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), "utf-8");
}

export async function addMessage(data: { name: string; email: string; message: string }): Promise<ContactMessage> {
  const store = await readStore();
  const newMessage: ContactMessage = {
    id: store.nextId,
    name: data.name,
    email: data.email,
    message: data.message,
    createdAt: new Date().toISOString(),
  };
  const updated = {
    nextId: store.nextId + 1,
    messages: [newMessage, ...store.messages],
  };
  await writeStore(updated);
  return newMessage;
}

export async function getMessages(): Promise<ContactMessage[]> {
  const store = await readStore();
  return store.messages;
}

export async function getMessageById(id: number): Promise<ContactMessage | null> {
  const store = await readStore();
  const found = store.messages.find((m) => m.id === id);
  return found ?? null;
}

