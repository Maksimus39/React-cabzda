import {Rating, ValueTypeRating} from "./Rating";
import {useState} from "react";

export default {
    title: 'Rating stories',
    component: Rating,
}

export const EmptyRating = () => <Rating value={0} onClick={x => x}/>;
export const Empty1 = () => <Rating value={1} onClick={x => x}/>;
export const Empty2 = () => <Rating value={2} onClick={x => x}/>;
export const Empty3 = () => <Rating value={3} onClick={x => x}/>;
export const Empty4 = () => <Rating value={4} onClick={x => x}/>;
export const Empty5 = () => <Rating value={5} onClick={x => x}/>;


export const RatingChanged = () => {
    const [rating, setRating] = useState<ValueTypeRating>(0);

    return <Rating
        value={rating}
        onClick={setRating}
    />;
}