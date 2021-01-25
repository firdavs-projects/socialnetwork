const a = {
    name: 'Fedya',
    isOnline: true,
    count: 0,
    students: [
        'ivan', 'andrey', 'farid'
    ],
    class: {
        teacher: {
            name: 'Dima'
        }
    }
}
console.log(a);

const b = { ...a }

b.name = 'WOW'

b.class = { ...a.classroom }
b.class.teacher = { ...a.class.teacher }
b.students = [...a.students]
b.students.push('XOXOXO')

console.log(b);
console.log(a);
