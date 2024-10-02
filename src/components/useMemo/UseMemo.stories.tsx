import React, {useCallback, useMemo, useState} from "react";

export default {
    title: 'useMemo'
}

export const DiffikultCountingExample = () => {

    const [a, setA] = useState(5)
    const [b, setB] = useState(5)

    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {

        let tempResult = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 30000000) {
                fake++
                const fakeValue = Math.random() * 1000
            }
            tempResult = tempResult * i
        }
        return tempResult
    }, [a]);


    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }

    return <>

        <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
        <input value={b} onChange={(e) => setB(Number(e.currentTarget.value))}/>
        <hr/>
        <div>Result for a: {resultA}</div>
        <div>Result for b: {resultB}</div>
    </>
}

const UsersSecret = (props: { users: Array<string> }) => {
    console.log('UsersSecret')
    return <div>
        {props.users.map((u, i) => {
            return <div key={i}>{u}</div>
        })}
    </div>
}

const Users = React.memo(UsersSecret)

export const HelpsToReactMemo = () => {
    console.log('HelpsToReactMemo')
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(['Max', 'Larisa', 'Andrey', 'Bogdan']);

    const newArray = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf('a') > -1)
    }, [users])

    const addUser = () => {
        const newUsers = [...users, 'Sveta' + new Date().getTime()]
        setUsers(newUsers);
    }

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={() => addUser()}>addUser</button>
        {counter}
        <Users users={newArray}/>
    </>
}


// ---------------------------------------------  UseCallback   -----------------------------------------------------------


export const LikeUseCallback = () => {
    console.log('LikeUseCallback')
    const [counter, setCounter] = useState(0);
    const [books, setBooks] = useState(['React', 'JS', 'HTML', 'CSS']);

    // const newArray = useMemo(() => {
    //     return books.filter(b => b.toLowerCase().indexOf('a') > -1)
    // }, [books])

    const addBook = () => {
        console.log(books)
        const newBooks = [...books, 'Angular' + new Date().getTime()]
        setBooks(newBooks);
    }

    const memoizedAddBook = useMemo(() => addBook, [])

    const memoizedAddBook2 = useCallback(() => {
        console.log(books)
        const newBooks = [...books, 'Angular' + new Date().getTime()]
        setBooks(newBooks);

    }, [books])

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <Book
            // book={newArray}
            addBook={memoizedAddBook2}
        />
    </>
}

const BooksSecret = (props: {
    // book: Array<string>,
    addBook: () => void
}) => {
    console.log('BooksSecret')
    return <div>
        <button onClick={() => props.addBook()}>addUser</button>
        {/*{props.book.map((book, i) => {*/}
        {/*    return <div key={i}>{book}</div>*/}
        {/*})}*/}
    </div>
}

const Book = React.memo(BooksSecret)

