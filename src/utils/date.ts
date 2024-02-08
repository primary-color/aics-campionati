import { DateTime } from "luxon";

export function formatDate(dateUtc: string) {
  return DateTime.fromISO(dateUtc).setLocale("it").toFormat("ccc dd LLL");
}
