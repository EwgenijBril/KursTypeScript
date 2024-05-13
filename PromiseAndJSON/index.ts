const jsonTest1 = '{"name": "Test", "data": 4}';

interface JSONTest {
    name: string;
    data: number;
}

const objFromJson1 = JSON.parse(jsonTest);

let toDoList1 : ToDo[] = [];

interface ToDo {
    "userId": number;
    "id": number;
    "title": string;
    "completed": false;

}

// fetch("https://jsonplaceholder.typicode.com/todos/1")
//     .then(response => response.json())
//     .then(json => {
//         if ("id" in json) {
//             toDoList.push(json)
//         }
//         console.log(toDoList);
//     })

fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response => response.json())
    .then(json => {
        if ("id" in json) {
            toDoList.push(json)
        } else if (Array.isArray(json)) {
            toDoList1 = json;
        } else {
            console.log(`${json} - is a string`)
        }
        console.log(toDoList1);
    })

const promise = new Promise<string>((resolve, reject) => {
    resolve("Test")
})

promise.then(value => {
    console.log(value.toLowerCase())
})