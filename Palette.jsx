
export default function Palette({ colors, setSelectedColor }) {
    return(
        <menu className="palette">
            {colors.map((color) => (
                <li 
                    key={color}
                    className={`swatch ${color}`}
                    onClick={() => setSelectedColor(color)}
                ></li>
            ))}
        </menu>
    )
}

