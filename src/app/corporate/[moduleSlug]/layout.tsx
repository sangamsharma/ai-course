import { redirect } from "next/navigation";
import { getCorporateAccess } from "@/lib/entitlements";

/**
 * Gates the actual corporate lesson content (this segment and its
 * [lessonSlug] child). The /corporate landing page and /corporate/upgrade
 * page live outside this layout so they don't get caught in the same
 * redirect loop.
 */
export default async function CorporateModuleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const access = await getCorporateAccess();

  if (!access.signedIn) {
    redirect("/login?callbackUrl=/corporate");
  }

  if (!access.entitled) {
    redirect("/corporate/upgrade");
  }

  return <>{children}</>;
}
