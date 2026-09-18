import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export interface CorporateAccess {
  signedIn: boolean;
  entitled: boolean;
  organizationName?: string;
}

/**
 * Server-side check for access to the gated /corporate training section.
 *
 * Entitlement rules (checked in order):
 *  1. Platform admins always have access (for QA/support/demos).
 *  2. Otherwise, the signed-in user needs an active Membership in an
 *     Organization whose accessStatus is "ACTIVE" (per prisma/schema.prisma).
 *
 * There's no Stripe integration yet — an Organization's accessStatus is
 * flipped to "ACTIVE" manually today (Prisma Studio, or a one-off script)
 * until checkout + webhooks are built. See course-review implementation
 * plan for the follow-up phase.
 */
export async function getCorporateAccess(): Promise<CorporateAccess> {
  const session = await auth();
  const userId = session?.user?.id;

  if (!userId) {
    return { signedIn: false, entitled: false };
  }

  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { isPlatformAdmin: true },
  });

  if (user?.isPlatformAdmin) {
    return { signedIn: true, entitled: true };
  }

  const membership = await prisma.membership.findFirst({
    where: {
      userId,
      isActive: true,
      organization: { accessStatus: "ACTIVE" },
    },
    select: { organization: { select: { name: true } } },
  });

  if (!membership) {
    return { signedIn: true, entitled: false };
  }

  return { signedIn: true, entitled: true, organizationName: membership.organization.name };
}
