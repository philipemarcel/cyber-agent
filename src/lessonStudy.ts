export type LessonStudy = { version: 1; step: number; concept: number; mode: 'focus' | 'all'; view: 'concepts' | 'worked'; read: number[] };
export const freshLessonStudy = (): LessonStudy => ({ version: 1, step: 0, concept: 0, mode: 'focus', view: 'concepts', read: [] });

/** Reading marks are self-reports, stored independently from assessed progress and XP. */
export function parseLessonStudy(raw: string | null, conceptCount: number): LessonStudy {
 if (!raw || !Number.isInteger(conceptCount) || conceptCount < 1) return freshLessonStudy();
 try {
  const value: unknown = JSON.parse(raw);
  if (!value || typeof value !== 'object' || Array.isArray(value)) return freshLessonStudy();
  const s = value as Record<string, unknown>;
  if (s.version !== 1 || !Number.isInteger(s.step) || Number(s.step) < 0 || Number(s.step) > 2 || !Number.isInteger(s.concept) || Number(s.concept) < 0 || Number(s.concept) >= conceptCount || (s.mode !== 'focus' && s.mode !== 'all') || (s.view !== 'concepts' && s.view !== 'worked') || !Array.isArray(s.read) || s.read.length > conceptCount || s.read.some(n => !Number.isInteger(n) || n < 0 || n >= conceptCount) || new Set(s.read).size !== s.read.length) return freshLessonStudy();
  return { version: 1, step: Number(s.step), concept: Number(s.concept), mode: s.mode, view: s.view, read: [...s.read] as number[] };
 } catch { return freshLessonStudy(); }
}

export function markLessonRead(study: LessonStudy, index: number, count: number): LessonStudy {
 if (!Number.isInteger(index) || index < 0 || index >= count) return study;
 const read = study.read.includes(index) ? study.read.filter(n => n !== index) : [...study.read, index].sort((a, b) => a - b);
 return { ...study, read };
}

export function lessonStudyKey(id: string): string | null {
 return /^m[1-9]\d{0,2}$/.test(id) ? `cyber-agent-lesson-reading-${id}` : null;
}
