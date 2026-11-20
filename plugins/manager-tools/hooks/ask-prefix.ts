import { randomUUID } from 'node:crypto';
import { readFileSync, realpathSync } from 'node:fs';
import { pathToFileURL } from 'node:url';

export const ASK_PREFIX = /^\s*(?:ask[\s_]+(?:manager tools|mt)\b|\/(?:manager-tools:)?ask\b)/i;

export function noteFor(input: { prompt?: string; session_id?: string }, newId: () => string): string | null {
  if (!ASK_PREFIX.test(input.prompt ?? '')) return null;
  const ids = input.session_id ? `session_id "${input.session_id}" and turn_id "${newId()}"` : `turn_id "${newId()}"`;
  return `This is a Manager Tools question. Use the ask-manager-tools skill: call ask_manager_tools and pass it ${ids}.`;
}

function main() {
  try {
    const note = noteFor(JSON.parse(readFileSync(0, 'utf8')), randomUUID);
    if (note) process.stdout.write(JSON.stringify({ hookSpecificOutput: { hookEventName: 'UserPromptSubmit', additionalContext: note } }));
  } catch {
    // Not a hook call we can read: add nothing and let the prompt through.
  }
}

function runDirectly(): boolean {
  try {
    return !!process.argv[1] && import.meta.url === pathToFileURL(realpathSync(process.argv[1])).href;
  } catch {
    return false;
  }
}

if (runDirectly()) main();
