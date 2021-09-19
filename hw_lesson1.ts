// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// Взяти масив (Client []).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

class Client {
    id: number; name: string; surname: string; email: string; phone: number; order: number[];

    constructor(id: number, name: string, surname: string, email: string, phone: number, order: number[]) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let clients = [
    new Client(1, 'Mariia', 'Kunta', 'm@mail.ua', 234569, [0]),
    new Client(2, 'Ivan', 'Kokos', 'ik@gmail.com', 234567, [1]),
    new Client (5, 'Ira', 'Deg', 'id@ukr.net', 567891, [3]),
    new Client (3, 'Sasha', 'Abc', 'sa@gmail.com', 345678, [4]),
    new Client (4, 'Ivanka', 'Bcd', 'ib@gmail.com', 456789, []),
    new Client (7, 'Nazar', 'Ksd', 'nk@gmail.com', 987654, [2]),
    new Client (8, 'Sasha', 'Abc', 'sa@gmail.com', 345678, [0]),
    new Client (6, 'Serg', 'Bnd', 'sb@gmail.com', 894568, [5]),
    new Client (9, 'Ivanka', 'Bcd', 'bi@gmail.com', 855684, [4]),
    new Client (10, 'Ira', 'Deg', 'di@ukr.net', 568429, [8]),
]

console.log(clients);

let sort = clients.sort(function (сlient1, сlient2) {
        if (сlient1.order <= сlient2.order) {
            return -1
        } else {
            return 1
        }
});

console.log(sort);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car




// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car



// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити 10 попелюшок , покласти їх в масив.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку