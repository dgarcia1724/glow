export const activityStatusMappings: Record<
  string,
  { emoji: string; text: string; className?: string }
> = {
  recentlyActive: {
    emoji: "🟢",
    text: "Recently active",
    className: "text-green-700",
  },
  newHere: {
    emoji: "",
    text: "Just joined",
    className: "bg-black text-white px-2 py-1 rounded-full text-xs",
  },
};

export const getActivityStatus = (
  lastActive: string,
  createdAt: string
): { emoji: string; text: string; className?: string } => {
  const now = new Date();
  const lastActiveDate = new Date(lastActive);
  const createdDate = new Date(createdAt);

  // Check if user is new (within first 7 days)
  const isNew =
    now.getTime() - createdDate.getTime() <= 7 * 24 * 60 * 60 * 1000;

  // Check if user is recently active (within last 24 hours)
  const isRecentlyActive =
    now.getTime() - lastActiveDate.getTime() <= 24 * 60 * 60 * 1000;

  if (isNew) {
    return activityStatusMappings.newHere;
  } else if (isRecentlyActive) {
    return activityStatusMappings.recentlyActive;
  } else {
    return { emoji: "", text: "", className: "" };
  }
};
