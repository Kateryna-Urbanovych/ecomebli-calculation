import lint from "../assets/images/lint.png";
import whiteLint from "../assets/images/white_lint.png";

export const Rating = ({quantity}) => {
    const ratingArr = [];
    for(let i = 0; i < 5; i ++){
        i < quantity ? ratingArr.push(lint) : ratingArr.push(whiteLint);
    }
    return(
        <div className='d-flex w-100 h-100 align-items-center justify-content-center'>
            {
                ratingArr.map((item, key) => (
                    <img src={item} key={key} className='rating-cell' alt='rating'/>
                ))
            }
        </div>
    )
}