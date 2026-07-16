export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function mapsUrl(query) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export function todayHours(hours, timezone = "Asia/Kolkata") {
  const now = new Date();
  const dayName = new Intl.DateTimeFormat("en-US", { weekday: "long", timeZone: timezone }).format(now);
  const current = hours.find((item) => item.day === dayName) || hours[0];
  const parts = new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: timezone
  }).formatToParts(now);
  const currentMinutes = Number(parts.find((p) => p.type === "hour")?.value || 0) * 60 + Number(parts.find((p) => p.type === "minute")?.value || 0);
  const [openHour, openMinute] = current.open.split(":").map(Number);
  const [closeHour, closeMinute] = current.close.split(":").map(Number);
  const openMinutes = openHour * 60 + openMinute;
  const closeMinutes = closeHour * 60 + closeMinute;

  return {
    current,
    openNow: currentMinutes >= openMinutes && currentMinutes <= closeMinutes,
    label: `${current.open} - ${current.close}`
  };
}

export function activeOffers(offers) {
  const today = new Date();
  return offers.map((offer) => ({
    ...offer,
    expired: offer.validUntil ? new Date(`${offer.validUntil}T23:59:59`) < today : false
  }));
}
