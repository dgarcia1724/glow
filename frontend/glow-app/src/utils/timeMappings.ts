interface LastActiveInfo {
  text: string;
  isActive: boolean;
}

export const getLastActiveText = (lastActive: string): LastActiveInfo => {
  const now = new Date();
  const lastActiveDate = new Date(lastActive);
  const diffInMinutes = Math.floor(
    (now.getTime() - lastActiveDate.getTime()) / (1000 * 60)
  );
  const diffInHours = Math.floor(diffInMinutes / 60);
  const diffInDays = Math.floor(diffInHours / 24);

  if (diffInMinutes < 5) {
    return { text: "Active now", isActive: true };
  } else if (diffInMinutes < 60) {
    return { text: `Active ${diffInMinutes} minutes ago`, isActive: true };
  } else if (diffInHours < 24) {
    return { text: `Active ${diffInHours} hours ago`, isActive: true };
  } else if (diffInDays === 1) {
    return { text: "Active yesterday", isActive: true };
  } else if (diffInDays < 7) {
    return { text: `Active ${diffInDays} days ago`, isActive: true };
  } else if (diffInDays < 30) {
    const weeks = Math.floor(diffInDays / 7);
    return {
      text: `Active ${weeks} ${weeks === 1 ? "week" : "weeks"} ago`,
      isActive: true,
    };
  } else {
    return { text: "Inactive", isActive: false };
  }
};
