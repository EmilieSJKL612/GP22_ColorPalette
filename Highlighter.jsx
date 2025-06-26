
export default function Highlighter({ color }){
    return(
        <div className="highlighter">
            <div className="handle">
                The currently selected color is {color}.
            </div>
            <div className={`tip ${color}`}></div>
        </div>

    )
}



