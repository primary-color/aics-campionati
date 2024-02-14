import { DateTime } from "luxon";

export function formatDate(dateUtc: string) {
  return DateTime.fromISO(dateUtc).setLocale("it").toFormat("ccc dd LLL");
}

export function checkLastRequestDate(requestDate: Date | undefined, minutes: number) {
  const now = DateTime.now();
  const lastRequestDate = (requestDate && DateTime.fromJSDate(new Date(requestDate))) || DateTime.now();
  return now.diff(lastRequestDate, "minutes").minutes >= minutes;
}
