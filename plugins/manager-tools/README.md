# Manager Tools for Claude

Bring Manager Tools guidance into Claude. Ask management and career questions and get answers built from Manager Tools podcasts and guidance, with links to the episodes.

## What you need

- A Manager Tools account with access to the Manager Tools AI tools. You sign in with it once when you connect the plugin.

## Install

**claude.ai, the Claude desktop app and mobile**

1. Go to **Customize > Plugins > Add > Add marketplace** and enter `manager-tools-hq/claude-plugins`.
2. Add the **manager-tools** plugin.
3. Open the plugin's **Connectors** tab, click **Connect** next to `manager-tools`, and sign in with your Manager Tools account.
4. Start a new chat.

**Claude Code**

```
/plugin marketplace add manager-tools-hq/claude-plugins
/plugin install manager-tools@manager-tools
```

Then run `/mcp`, select `manager-tools` and sign in.

## Use it

- **Ask a question.** Start with "Ask MT" or "Ask Manager Tools", for example "Ask MT: how do I give feedback to a peer?" Claude also uses Manager Tools for management questions without the prefix.

## What it sends and where

The plugin connects Claude to the Manager Tools server at `mcp.manager-tools.com`. Claude sends it your question, as Claude rewrites it to stand alone. If you ask Claude to improve something you wrote, the question includes that text. If the first search doesn't answer the question, Claude searches once more with a short sample answer it writes. The [Manager Tools privacy policy](https://www.manager-tools.com/privacy-policy) explains how Manager Tools handles what it receives.

In Claude Code, the plugin also runs a small hook on each message you send. It checks whether the message starts with "Ask MT" and, if so, tells Claude to use Manager Tools. It sends nothing anywhere.

## Terms

Use of this plugin is governed by the [Manager Tools Terms of Service](https://www.manager-tools.com/terms-service). See [LICENSE](LICENSE).
