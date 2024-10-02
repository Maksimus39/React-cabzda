import React, {useCallback, useMemo, useState} from "react";

export default {
    title: 'useCallback'
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

