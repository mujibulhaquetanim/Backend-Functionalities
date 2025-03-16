CREATE TABLE "usersToGroups" (
	"userId" integer,
	"groupId" integer
);
--> statement-breakpoint
DROP TABLE "groupsToUsers" CASCADE;--> statement-breakpoint
ALTER TABLE "usersToGroups" ADD CONSTRAINT "usersToGroups_userId_users_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "usersToGroups" ADD CONSTRAINT "usersToGroups_groupId_groups_id_fk" FOREIGN KEY ("groupId") REFERENCES "public"."groups"("id") ON DELETE no action ON UPDATE no action;