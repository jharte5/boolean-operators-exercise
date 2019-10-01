function moreThan5(num) {
  return 5<num;
 }
 function topScore(score,topScore) {
  return score>topScore;
 }
 function isInDanger(grade) {
  return 60<=grade && grade<=71;
 }
 function isCoasting(num) {
  return 71<num && 83>=num;
 }
 function isSucceeding(grade) {
  return grade>=84 && grade<=92;
 }
 function isFailing(grade) {
  return grade<60;
 }
 function isAcing(grade) {
  return grade>92;
 }
 function isStudent(student) {
  return student === 'student'
 }
 function isTeacher(teacher) {
  return teacher === 'teacher'
 }
 function isAdmin(admin) {
  return admin === 'admin'
 }
 function isElementary(schoolLevel) {
  return schoolLevel === 'elementary'
 }
 function notAnElementarySchoolAdministrator(role, level) {
  return role !== 'elementary' || level !== 'admin'
 }
 function isMiddleSchoolTeacher(role, level) {
  return role === 'teacher' && level>=6 && level<=8;
 }
 function differentPeople(jon1, jon2) {
  return jon1 === jon2;
 }
 module.exports = {
  moreThan5,
  topScore,
  isInDanger,
  isCoasting,
  isSucceeding,
  isFailing,
  isAcing,
  isStudent,
  isTeacher,
  isAdmin,
  isElementary,
  notAnElementarySchoolAdministrator,
  isMiddleSchoolTeacher,
  differentPeople,
 }
 
 
 
 
 
 
 
 
 