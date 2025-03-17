ALTER TABLE "comments" DROP CONSTRAINT "comments_authorId_users_id_fk";
--> statement-breakpoint
ALTER TABLE "usersToGroups" DROP CONSTRAINT "usersToGroups_userId_users_id_fk";
--> statement-breakpoint
ALTER TABLE "usersToGroups" DROP CONSTRAINT "usersToGroups_groupId_groups_id_fk";
--> statement-breakpoint
ALTER TABLE "profileInfo" DROP CONSTRAINT "profileInfo_userId_users_id_fk";
--> statement-breakpoint
ALTER TABLE "comments" ADD CONSTRAINT "comments_authorId_users_id_fk" FOREIGN KEY ("authorId") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "usersToGroups" ADD CONSTRAINT "usersToGroups_userId_users_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "usersToGroups" ADD CONSTRAINT "usersToGroups_groupId_groups_id_fk" FOREIGN KEY ("groupId") REFERENCES "public"."groups"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "profileInfo" ADD CONSTRAINT "profileInfo_userId_users_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;