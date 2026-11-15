# Stage 2: Collect replies

1. **Gather.** Read every message in the active thread, including replies sent to the manager only. The directs are the announcement's recipients. Search the calendar from the rollout date to seven weeks after it. The offered slots are the `One on One hold` series with the rollout's stamp. The first week is the week each hold series starts. Replies are due ten days before it (the Friday of the week before last). For a new direct (subject `Your One-On-One time`), replies are due by the first week.
2. **Match replies.** For each direct, find the slot their replies name. If a direct later changes their pick, point it out and ask the manager which slot they get. Don't keep or switch it silently.
   - If a reply is unclear, or names a time that wasn't offered, ask the manager. Don't guess.
   - If two directs pick the same slot, the earlier email gets it. Tell the manager. Offer the other direct a short note (two lines, written by you, shown first) saying that slot went first and listing the slots still open. Send it as a reply on the announcement message, addressed to that direct only.
   - Ignore the manager's own messages in the thread.
3. **Status.** Show a table: each direct and their slot, or "no reply yet", then the slots still open.
4. **No reply.** Before the reply-by date, just report. After it, offer the manager three choices for each direct without a slot, and never leave anyone off:
   - Send a note: `draft_rollout_message` with `nonresponder_note`, the direct's name, and only the open slots. Show it, and on a yes send it as a reply on the announcement message, addressed to that direct only.
   - Assign them a slot: the manager picks from the open slots.
   - Go ahead with them shown as "not yet scheduled". Always present this last, with a short note that it is not recommended: the direct is left without a One on One while everyone else has one. Offer it only as a fallback when the first two don't work.
5. **Next.** When every direct has a slot, or the manager chooses to go ahead, read `stage-3-confirm-and-invite.md`.
