

export const Buttons = ({options, onLeaveFeedback}) => {

    return (
        <>
    <div>
{options.map((option, index) => {
    const btnName = option;
    return (
        <button key={index} type="button" onClick={() => {onLeaveFeedback(option)}}>
            {btnName}
        </button>
    );
})}
    </div>
    </>
    )
}