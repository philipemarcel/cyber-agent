import { describe, expect, it } from 'vitest';
import { freshLessonStudy, lessonStudyKey, markLessonRead, parseLessonStudy } from './lessonStudy';

describe('lesson reading position, independent from assessment', () => {
 it('resumes a validated position and manual reading marks without assessment fields', () => {
  const stored = { ...freshLessonStudy(), step: 1, concept: 2, mode: 'all', view: 'worked', read: [0, 2], xp: 5000 };
  expect(parseLessonStudy(JSON.stringify(stored), 3)).toEqual({ version: 1, step: 1, concept: 2, mode: 'all', view: 'worked', read: [0, 2] });
 });
 it('rejects malformed storage, obsolete concept positions and unbounded or duplicate marks', () => {
  for (const raw of ['not json', 'null', '[]', JSON.stringify({ ...freshLessonStudy(), concept: 3 }), JSON.stringify({ ...freshLessonStudy(), step: 3 }), JSON.stringify({ ...freshLessonStudy(), read: [0, 0] }), JSON.stringify({ ...freshLessonStudy(), read: [-1] }), JSON.stringify({ ...freshLessonStudy(), mode: 'mastered' })]) {
   expect(parseLessonStudy(raw, 3)).toEqual(freshLessonStudy());
  }
 });
 it('changes reading marks only when explicitly toggled, without mutation', () => {
  const study = freshLessonStudy();
  const visited = { ...study, concept: 1 };
  expect(visited.read).toEqual([]);
  const marked = markLessonRead(visited, 1, 3);
  expect(marked.read).toEqual([1]);
  expect(study.read).toEqual([]);
  expect(markLessonRead(marked, 1, 3).read).toEqual([]);
  expect(markLessonRead(marked, 3, 3)).toBe(marked);
 });
 it('keeps a separate, bounded key for each authored lesson', () => {
  expect(lessonStudyKey('m25')).toBe('cyber-agent-lesson-reading-m25');
  expect(lessonStudyKey('m26')).toBe('cyber-agent-lesson-reading-m26');
  for (const id of ['m1000', 'm0', 's1a', '../m1', '__proto__']) expect(lessonStudyKey(id)).toBeNull();
 });
});
