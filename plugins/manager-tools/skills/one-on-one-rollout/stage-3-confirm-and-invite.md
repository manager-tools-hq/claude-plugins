# Stage 3: Confirm and invite

1. **What Gmail doesn't hold.** Ask whether any direct is remote or new to the team, and whether the manager regularly leaves early on any day. Find the recurring meetings again (search from the rollout date to seven weeks after it) and say which you're treating as the boss's staff meeting, the boss's One on One with the manager, and the manager's own staff meeting, inviting correction. Take the manager's sign-off from the announcement.
2. **Check.** Call `check_one_on_one_schedule`: `today` = the rollout date (the three-week wait counts from the announcement, not from today), every direct (`new_to_team` as just confirmed), one assignment per scheduled direct (30 minutes, weekly, `first_date` = that weekday in the first week), and the anchors. Explain each issue in plain words and suggest a fix. If the fix changes the schedule, check again.
3. **Accept.** Show the final schedule and get the manager's yes.
4. **Schedule email.** Call `draft_rollout_message` with `schedule_email`, `start_date` = the first week, all directs, and the schedule. Show it, and on a yes send it as a reply on the announcement message, addressed to every direct. Skip this for a new direct (subject `Your One-On-One time`); their invitation is enough.
5. **Invitations and release.** In one approval, show both lists:
   - each chosen hold becoming `One on One: {manager} / {direct}`, still weekly and 30 minutes, with the direct as a guest and the meeting description per the markers, plus "{manager} will call {direct}." for a remote direct
   - the unclaimed holds to delete

   On a yes, update the events as whole series, in the manager's time zone. If updating a hold fails, create the meeting and delete the hold series instead. If deleting fails, list the holds for the manager to delete by hand. Afterwards, search the calendar again to confirm no holds from this rollout remain.
6. **What now.**
   - First One on Ones: the week of the first week.
   - The direct goes first, then the manager, then the future.
   - If one has to move, reschedule it within the same week; don't cancel.
   - Expect some swaps in the first couple of weeks.
   - No other management changes for 12 weeks.

   The active label stays. With no holds left, the rollout reads as done.
