// let man = {
//     name: 'Dmitry',
//     age: 31,
//     sayName() {
//         alert("My name is " + this.name);
//     }
// }

// man.age = 27;
// console.log(man.age);
// console.log(man.name);
// man.sayName();



let data = 'sds';

let page = {
    title: 'samuraiJS',
    data: ``,

    render() {
        if (this.data === '') {
            alert('Content is unavaiable');
        } else {
            document.title = this.title;
            document.write(this.data);
        }
    }
}

page.data = `<div>Content about React JS</div>`;
page.render();

let page2 = {
    title: 'samuraiJS',
    _content: ``,
    setContent(value) {
        //if (value is ok??)           
        this._content = value;
    },
    getContent() {
        return this._content;
    },
    render: function () {
        document.write(this._content);
    }
}

// page2._content = `<div>Content about React JS</div>`;
page2.setContent(`<div>Content about React JS</div>`);
// console.log( page2._content );
console.log(page2.getContent());
page2.render();

let renderPage = (state) => {
    console.log(state);
};

let store = {
    _subscriber() {
        console.log('no subscribers (observers)')
    },
    _state: {
        firstName: 'it-incubator.by',
        lastName: 'it-kamasutra.com'
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._subscriber = observer;
    },
    setFirstName(value) {
        // send ajax to server
        this._state.firstName = value;
        this._subscriber();
    }
}
// store._state


let state = store.getState();
store.setFirstName('samuraiJS.com');
state = store.getState();

let subscriber = () => {
    let state = store.getState();
    renderPage(state);
};

store.subscribe(subscriber);

store.setFirstName('youtube.com');



// </script > <script>

// plain object   // POCO\POJO

let man = {
    name: 'Dmitry',
    age: 31,
    sayName() {
        alert("My name is " + this.name);
    }
}

man.age = 27;
console.log(man.age);
console.log(man.name);
man.sayName();





let content = 'sds';

let page3 = {
    title: 'samuraiJS',
    content: ``,

    render() {
        if (this.content === '') {
            alert('Content is unavaiable');
        } else {
            document.title = this.title;
            document.write(this.content);
        }
    }
}

page3.content = `<div>Content about React JS</div>`;
page3.render();

let page4 = {
    title: 'samuraiJS',
    _content: ``,
    setContent(value) {
        //if (value is ok??)           
        this._content = value;
    },
    getContent() {
        return this._content;
    },
    render: function () {
        document.write(this._content);
    }
}

// page4._content = `<div>Content about React JS</div>`;
page4.setContent(`<div>Content about React JS</div>`);
// console.log( page4._content );
console.log(page4.getContent());
page4.render();

// let renderPage = (state) => {
//     console.log(state);
// };

let store = {
    _subscriber() {
        console.log('no subscribers (observers)')
    },
    _state: {
        firstName: 'it-incubator.by',
        lastName: 'it-kamasutra.com'
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._subscriber = observer;
    },
    setFirstName(value) {
        // send ajax to server
        this._state.firstName = value;
        this._subscriber();
    }
}
// store._state


let state = store.getState();
store.setFirstName('samuraiJS.com');
state = store.getState();

let subscriber = () => {
    let state = store.getState();
    renderPage(state);
};

store.subscribe(subscriber);

store.setFirstName('youtube.com');