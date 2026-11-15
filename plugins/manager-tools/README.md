# Manager Tools for Claude

Bring Manager Tools guidance into Claude. Ask management and career questions and get answers built from Manager Tools podcasts and guidance, with links to the episodes. Or have Claude walk you through rolling out weekly One on Ones with your directs, from the announcement to the recurring meetings on your calendar.

## What you need

- A Manager Tools account with access to the Manager Tools AI tools. You sign in with it once when you connect the plugin.
- For the One on One rollout: Claude's Google Calendar and Gmail connectors, connected to your work account.

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
- **Roll out One on Ones.** Say "Help me start One on Ones with my team." Claude plans the schedule, drafts the announcement, and shows you every calendar change and email before it makes them.

## What it sends and where

The plugin connects Claude to the Manager Tools server at `manager-tools-mcp-19f07a84b58b.herokuapp.com`. Claude sends it:

- **For questions:** your question, as Claude rewrites it to stand alone.
- **For the One on One rollout:** your name, time zone and work hours, your directs' names and whether they work in your location, and the busy times on your calendar for the next seven weeks (start and end times only, not event details).

Calendar changes and emails go through your own Google connectors in Claude, never through Manager Tools. The [Manager Tools privacy policy](https://www.manager-tools.com/privacy-policy) explains how Manager Tools handles what it receives.

In Claude Code, the plugin also runs a small hook on each message you send. It checks whether the message starts with "Ask MT" and, if so, tells Claude to use Manager Tools. It sends nothing anywhere.

## Terms

Use of this plugin is governed by the [Manager Tools Terms of Service](https://www.manager-tools.com/terms-service). See [LICENSE](LICENSE).
