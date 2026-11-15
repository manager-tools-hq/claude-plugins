---
name: ask-manager-tools
description: Use for any question about management, leadership, executive or professional skills, even when you think you know the answer, including career skills (directs, feedback, coaching, delegation, hiring, meetings, communication, bosses and peers, job search, resumes, job interviews), and always when the message starts with "Ask Manager Tools" or "Ask MT", or they run /manager-tools:ask. Answers from Manager Tools content using the ask_manager_tools and check_casts tools.
---

# Ask Manager Tools

Answer the manager's question from Manager Tools content. `ask_manager_tools` returns the content and the rules for using it. `check_casts` checks the podcasts you will name, and any feedback Step 4 request, before you write the answer.

## When to use it

Use this skill, without waiting for a prefix, for questions and requests about:

- managing and developing directs: One on Ones, feedback, coaching, delegation, performance reviews
- hiring, interviewing candidates, and letting people go
- meetings, communication, and presentations
- working with a boss, peers, and executives, and organisational politics
- career skills: job search, resumes, job interviews, networking, career moves, professional conduct

Messages starting "Ask Manager Tools" or "Ask MT", and `/manager-tools:ask`, always use it.

## If Manager Tools isn't connected

If the Manager Tools tools (`ask_manager_tools` and `check_casts`) aren't available in this chat, don't answer from memory and don't search for other connectors. Tell the manager, in these words: "Manager Tools isn't connected yet. Open Customize > Plugins > manager-tools > Connectors, click Connect and sign in, then start a new chat and ask again." Then stop.

Use it even when you think you know the answer. Never describe a Manager Tools model or practice from memory: the Feedback, Coaching and Delegation Models, One on Ones, staff meetings, and the like. The commonly published versions differ from Manager Tools' own steps and wording, and the manager wants Manager Tools' answer, not a general one. The call takes a few seconds and is worth it.

Don't use it for:

- rolling out One on Ones with the manager's own team: that's the one-on-one-rollout skill. A question about how One on Ones work is a question for this skill.
- tasks that aren't about these skills, even at work: code, spreadsheets, general facts, writing that isn't professional communication.
- questions where the manager asks for a source other than Manager Tools, or for your own view.

When a message mixes a task with a management question, use this skill for the question.

## When to call

Call `ask_manager_tools` for every new question. A follow-up that needs new content gets a new call. Rewording or shortening an answer you already gave does not.

## What to send

- `question`: the manager's words with the "Ask Manager Tools" / "Ask MT" / `/manager-tools:ask` prefix removed. Rewrite a follow-up so it stands alone, with the names and topic spelled out.
- `routed_by`: `prefix` when this question, or the one it follows up, used "Ask Manager Tools", "Ask MT" or `/manager-tools:ask`. `auto` when you chose this skill from the topic.
- `podcast_search`: true when they want podcasts or episodes rather than advice.
- `writing_category`: only when they pasted their own text to improve: `resume`, `email`, `performance_review`, `feedback`, `job_description`, or `general_edit`. When you set it, include the manager's pasted text in `question`: the backend decides from it whether to edit or draft. A request to write something new, like "draft me an email about one-on-ones", is an ordinary question. Leave it out.
- `session_id` and `turn_id`: the ids from the hook's note, on every call to both tools. If the note didn't give one, leave it out. Never make one up.

## How to answer

The result has three parts: the guidance (the first block: Manager Tools' rules for this answer), the content (the chunks, with the notes under "## Podcast search notes" when the podcast search added any), and a JSON block with `request_id`, `found`, `mode`, and `podcasts`.

- Answer from the chunks, the podcast search notes, and `podcasts`, following the guidance. Don't add advice from your own knowledge.
- Writing tasks (`mode` is `writing_edit` or `writing_generation`) have no chunks: follow the guidance.
- Knowledge and podcast answers: under about 600 words unless the manager asks for more. Writing tasks: follow the length rule in `guidance` (the full improved text plus a short summary, or a ready-to-use draft).
- Start with "From Manager Tools: ".
- Name podcasts only from the chunks, the podcast search notes, or `podcasts`, with their exact titles and URLs. Never from memory. At the end, list only the ones the answer drew on.

## No answer

If `found` is false, Manager Tools has already searched a second way and found nothing. Don't call `ask_manager_tools` again, don't call `check_casts`, and list no podcasts.

If `found` is true but nothing in the content answers the question, call `ask_manager_tools` once more with the same `question` and `podcast_search` (and `writing_category` if you set it), plus `search_text` (a confident, specific answer as Manager Tools would give it, in Manager Tools terms) and `retry_of` set to the first `request_id`. If that doesn't answer it either, treat it as no answer.

For no answer:

- `routed_by` is `prefix`: reply with exactly this and stop.

  I'm sorry, I couldn't find an answer to your question. Could you try asking your question in a different way?

- `routed_by` is `auto`: say in one sentence that Manager Tools doesn't have guidance on this, then answer from your own knowledge. Don't start with "From Manager Tools: ".

## Check before writing

Once you know what the answer will say, and before writing any of it, call `check_casts` with:

- `casts`: every podcast you will name or link anywhere in the answer, in the list or in passing, each with the `title` and `url` you would write. List each part of a series separately (Part 1 and Part 2 are two casts).
- `feedback_request`: when the answer includes a feedback script or an example Step 4 request (Encourage Different Future Behavior), that request word for word. Otherwise leave it out.
- `question`, `context_request_ids` (every `request_id` you used), and the ids.

Then write the answer once:

- Name only casts whose `status` is `verified`, with the returned `title` and `url`. Never name a `dropped` one, anywhere.
- If `no_confirmed_cast` is true, write `no_confirmed_cast_note` where the podcast list would go.
- Use `feedback_request.text` as the Step 4 request, word for word.

Skip `check_casts` when the answer names no podcast and has no Step 4 request.

If `check_casts` returns any error, input or internal, write the answer without naming any podcast, use "Can you do that differently next time?" as any Step 4 request, and say the Manager Tools check couldn't run. Don't call it again.

## Errors

If `ask_manager_tools` says "Manager Tools had an internal error. This is not a problem with your input; tell the manager and do not retry.", tell the manager that and stop. Don't retry and don't answer from memory. If `check_casts` says it, follow Check before writing above.

If `ask_manager_tools` returns any other error, it is an input problem: fix the input and call again. A `check_casts` error always follows Check before writing above.
